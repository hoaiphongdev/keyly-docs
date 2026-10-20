// Turns inline code that is only a keyboard shortcut (`⌘P`, `⇧⌘T`, `⌘Space`, `⇪ Caps Lock`)
// into keycaps, the way Keyly draws them. Code blocks and ordinary inline code are untouched.

const MODIFIERS = '⌃⌥⇧⌘';
const KEY = String.raw`(?:Caps Lock|Space|Tab|Esc|Return|Delete|F\d{1,2}|[A-Z0-9]|[⏎⇥⌫⌦⎋↑↓←→⇪]|[\[\]\\;',./\`=+\-])`;
const CHORD = new RegExp(String.raw`^([${MODIFIERS}]*)(${KEY})$`);

/** Splits "⇧⌘T" into ["⇧", "⌘", "T"] and "⇪ Caps Lock" into ["⇪ Caps Lock"]; null if not a shortcut. */
function parseShortcut(text) {
	const value = text.trim();
	if (value === '⇪ Caps Lock') return [[value]];
	const chords = value.split(' ').map((chord) => chord.match(CHORD));
	if (chords.some((match) => !match)) return null;
	// A lone letter or digit is just code, not a shortcut
	if (chords.length === 1 && !chords[0][1] && /^[A-Z0-9]$/.test(chords[0][2])) return null;
	// Show modifiers in macOS menu order (⌃⌥⇧⌘), like Keyly does
	return chords.map((match) => [...[...match[1]].sort((a, b) => MODIFIERS.indexOf(a) - MODIFIERS.indexOf(b)), match[2]]);
}

const text = (node) => (node.type === 'text' ? node.value : (node.children ?? []).map(text).join(''));

function walk(node, inPre) {
	if (!node.children) return;
	node.children = node.children.map((child) => {
		// MDX components (<Steps>, <Aside>…) are mdxJsx* nodes: descend into them too
		if (child.type !== 'element') {
			walk(child, inPre);
			return child;
		}
		if (child.tagName === 'code' && !inPre) {
			const chords = parseShortcut(text(child));
			if (chords) {
				return {
					type: 'element',
					tagName: 'kbd',
					properties: { className: ['kc-keys'] },
					children: chords.flatMap((chord, i) => [
						...(i > 0 ? [{ type: 'text', value: ' ' }] : []),
						...chord.map((cap) => ({
							type: 'element',
							tagName: 'kbd',
							properties: {},
							children: [{ type: 'text', value: cap }],
						})),
					]),
				};
			}
		}
		walk(child, inPre || child.tagName === 'pre');
		return child;
	});
}

export default function rehypeKeycaps() {
	return (tree) => walk(tree, false);
}
