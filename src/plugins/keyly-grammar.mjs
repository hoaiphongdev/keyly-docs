// TextMate grammar for .keyly files, used by Expressive Code (```keyly blocks).
// Mirrors the parser in the app: directives, [Category], > description, and shortcut lines
// written as `keys | description` or `keys<TAB or 2+ spaces>description`.
export default {
	name: 'keyly',
	scopeName: 'source.keyly',
	patterns: [
		{
			match: '^\\s*(#)\\s*(Sheet Name|App|Hide Default|Group)(:)(.*)$',
			captures: {
				1: { name: 'punctuation.definition.comment.keyly' },
				2: { name: 'keyword.control.directive.keyly' },
				3: { name: 'punctuation.separator.key-value.keyly' },
				4: { name: 'string.unquoted.value.keyly' },
			},
		},
		{ match: '^\\s*#.*$', name: 'comment.line.number-sign.keyly' },
		{
			match: '^\\s*(\\[)([^\\]]*)(\\])\\s*$',
			captures: {
				1: { name: 'punctuation.definition.section.begin.keyly' },
				2: { name: 'entity.name.function.section.keyly' },
				3: { name: 'punctuation.definition.section.end.keyly' },
			},
		},
		{
			match: '^\\s*(>)(.*)$',
			captures: { 1: { name: 'punctuation.definition.quote.keyly' }, 2: { name: 'comment.block.documentation.keyly' } },
		},
		{
			match: '^\\s*([^|]+?)\\s*(\\|)\\s*(.*)$',
			captures: {
				1: { name: 'constant.other.shortcut.keyly' },
				2: { name: 'punctuation.separator.keyly' },
				3: { name: 'string.unquoted.description.keyly' },
			},
		},
		{
			match: '^\\s*(.+?)(\\t+| {2,})(.*)$',
			captures: { 1: { name: 'constant.other.shortcut.keyly' }, 3: { name: 'string.unquoted.description.keyly' } },
		},
		{
			// Last resort, like the app: split at the first single space
			match: '^\\s*(\\S+) (.+)$',
			captures: { 1: { name: 'constant.other.shortcut.keyly' }, 2: { name: 'string.unquoted.description.keyly' } },
		},
	],
};
