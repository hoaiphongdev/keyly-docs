// Apps shown on the homepage "Works with" wall. Brand glyphs come from Simple Icons (CC0) and are
// inlined at build time; brands Simple Icons doesn't ship get a monogram tile instead.
// Lumin's mark is taken from luminpdf.com/common/images/logo-lumin.svg (the icon part only).
// `template` names the app's bundled community template in the keyly repo (templates/<slug>.keyly);
// their shortcut is taken from that template.
import {
	siAlacritty,
	siArc,
	siCursor,
	siDatagrip,
	siEvernote,
	siFigma,
	siGhostty,
	siGooglechrome,
	siIntellijidea,
	siIterm2,
	siLinear,
	siNotion,
	siObsidian,
	siPhpstorm,
	siPostman,
	siPycharm,
	siRider,
	siRubymine,
	siSafari,
	siSublimetext,
	siThings,
	siWarp,
	siWebstorm,
	siWindsurf,
	siXcode,
	siZedindustries,
} from 'simple-icons';

const LUMIN_MARK =
	'M5.08721 26.25L9.04169 19.3892H1.16647C0.222115 19.3892 -0.302759 18.4783 0.18628 17.6392L10.0556 0.594578C10.2664 0.208735 10.5805 0 11.1412 0H20.9388C21.8832 0 22.4081 0.910843 21.919 1.75L13.032 17.15H26.8537C27.798 17.15 28.2892 18.0946 27.8339 18.9L22.935 27.4054C22.7243 27.7913 22.4102 28 21.8495 28H6.06529C5.12094 28 4.59607 27.0892 5.08511 26.25H5.08721ZM10.336 17.15L18.9785 2.23916H11.8052L3.12684 17.15H10.336ZM21.2529 25.7587L24.8575 19.3892H11.7356L8.0615 25.7587H21.2529Z';

export type WallApp = {
	name: string;
	/** SVG path (24×24 viewBox unless `viewBox` is set) or, when absent, a two-letter monogram */
	path?: string;
	viewBox?: string;
	monogram?: string;
	keys: string;
	action: string;
	/** Slug of the bundled template (templates/<slug>.keyly), which has its own page at /templates/<slug>/ */
	template?: string;
};

export const apps: WallApp[] = [
	{ name: 'Google Chrome', path: siGooglechrome.path, keys: '⇧⌘T', action: 'Reopen closed tab' },
	{ name: 'Safari', path: siSafari.path, keys: '⇧⌘\\', action: 'Show tab overview' },
	{ name: 'Arc', path: siArc.path, keys: '⌘S', action: 'Toggle sidebar' },
	{ name: 'Zed', path: siZedindustries.path, keys: '⇧⌘P', action: 'Command palette' },
	{ name: 'VS Code', monogram: 'VS', keys: '⇧⌘P', action: 'Show command palette', template: 'vscode' },
	{ name: 'Cursor', path: siCursor.path, keys: '⌘K', action: 'Open inline edit', template: 'cursor' },
	{ name: 'Xcode', path: siXcode.path, keys: '⌘B', action: 'Build' },
	{ name: 'Figma', path: siFigma.path, keys: '⌥⌘K', action: 'Create component', template: 'figma' },
	{ name: 'Photoshop', monogram: 'Ps', keys: '⌘J', action: 'New layer via copy', template: 'photoshop' },
	{ name: 'Illustrator', monogram: 'Ai', keys: '⌘G', action: 'Group', template: 'illustrator' },
	{ name: 'Premiere Pro', monogram: 'Pr', keys: '⌘K', action: 'Add edit', template: 'premiere-pro' },
	{ name: 'Notion', path: siNotion.path, keys: '⌘P', action: 'Quick find', template: 'notion' },
	{ name: 'Obsidian', path: siObsidian.path, keys: '⌘O', action: 'Quick switcher', template: 'obsidian' },
	{ name: 'Slack', monogram: 'Sl', keys: '⌘K', action: 'Jump to…' },
	{ name: 'Linear', path: siLinear.path, keys: '⌘K', action: 'Command menu' },
	{ name: 'Ghostty', path: siGhostty.path, keys: '⌘D', action: 'New split (right)', template: 'ghostty' },
	{ name: 'Warp', path: siWarp.path, keys: '⌘P', action: 'Command palette', template: 'warp' },
	{ name: 'IntelliJ IDEA', path: siIntellijidea.path, keys: '⇧ ⇧', action: 'Search everywhere', template: 'intellij' },
	{ name: 'Postman', path: siPostman.path, keys: '⌘⏎', action: 'Send request', template: 'postman' },
	{ name: 'Sublime Text', path: siSublimetext.path, keys: '⇧⌘P', action: 'Command palette', template: 'sublime-text' },
	{ name: 'Lumin', path: LUMIN_MARK, viewBox: '0 0 28 28', keys: '⌘O', action: 'Open file' },
	{ name: 'Things 3', path: siThings.path, keys: '⌘N', action: 'New to-do' },
	{ name: 'Windsurf', path: siWindsurf.path, keys: '⌘P', action: 'Quick open', template: 'windsurf' },
	{ name: 'iTerm2', path: siIterm2.path, keys: '⌘D', action: 'Split vertically', template: 'iterm2' },
	{ name: 'Alacritty', path: siAlacritty.path, keys: '⌘T', action: 'New tab', template: 'alacritty' },
	{ name: 'Kitty', monogram: 'Kt', keys: '⌘⏎', action: 'New window', template: 'kitty' },
	{ name: 'Evernote', path: siEvernote.path, keys: '⇧⌘K', action: 'Search in Evernote', template: 'evernote' },
	{ name: 'Craft', monogram: 'Cr', keys: '⌘O', action: 'Quick open', template: 'craft' },
	{ name: 'TablePlus', monogram: 'TP', keys: '⌘N', action: 'New connection', template: 'tableplus' },
	{ name: 'DataGrip', path: siDatagrip.path, keys: '⌃ ⌃', action: 'Run anything', template: 'datagrip' },
	{ name: 'WebStorm', path: siWebstorm.path, keys: '⇧ ⇧', action: 'Search everywhere', template: 'webstorm' },
	{ name: 'PyCharm', path: siPycharm.path, keys: '⇧⌘A', action: 'Find action', template: 'pycharm' },
	{ name: 'PhpStorm', path: siPhpstorm.path, keys: '⌘O', action: 'Go to class', template: 'phpstorm' },
	{ name: 'Rider', path: siRider.path, keys: '⇧⌘O', action: 'Go to file', template: 'rider' },
	{ name: 'RubyMine', path: siRubymine.path, keys: '⌃ ⌃', action: 'Run anything', template: 'rubymine' },
	{ name: 'RustRover', monogram: 'RR', keys: '⌘O', action: 'Go to type', template: 'rustrover' },
	{ name: 'Acrobat', monogram: 'Ac', keys: '⇧⌘N', action: 'Go to page', template: 'acrobat' },
	{ name: 'After Effects', monogram: 'Ae', keys: '⌥⌘N', action: 'New project', template: 'after-effects' },
	{ name: 'Animate', monogram: 'An', keys: '⌥⇧⌘S', action: 'Export movie', template: 'animate' },
	{ name: 'Lightroom Classic', monogram: 'Lr', keys: 'D', action: 'Open in Develop', template: 'lightroom-classic' },
];

/** Bundled community templates in the keyly repo (ls keyly/templates | wc -l) */
export const TEMPLATE_COUNT = 31;
