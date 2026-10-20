// Mock data for the in-page Keyly demo: the menu-bar shortcuts Keyly would read from
// the browser you are using, plus one custom group as a `.keyly` template would add it.

export type DemoShortcut = { action: string; keys: string };
export type DemoCategory = { title: string; description?: string; shortcuts: DemoShortcut[] };
export type DemoGroup = { group: string; description?: string; categories: DemoCategory[] };
export type DemoBlock = DemoCategory | DemoGroup;
export type DemoApp = { name: string; color: [string, string]; blocks: DemoBlock[] };

const editMenu: DemoCategory = {
	title: 'Edit',
	shortcuts: [
		{ action: 'Undo', keys: '⌘Z' },
		{ action: 'Redo', keys: '⇧⌘Z' },
		{ action: 'Cut', keys: '⌘X' },
		{ action: 'Copy', keys: '⌘C' },
		{ action: 'Paste', keys: '⌘V' },
		{ action: 'Paste and Match Style', keys: '⌥⇧⌘V' },
		{ action: 'Select All', keys: '⌘A' },
		{ action: 'Find…', keys: '⌘F' },
		{ action: 'Find Next', keys: '⌘G' },
		{ action: 'Find Previous', keys: '⇧⌘G' },
		{ action: 'Emoji & Symbols', keys: '⌃⌘Space' },
	],
};

const vimium: DemoGroup = {
	group: 'Vimium',
	description: 'Keyboard browsing, added from vimium.keyly',
	categories: [
		{
			title: 'Navigation',
			shortcuts: [
				{ action: 'Scroll down', keys: 'j' },
				{ action: 'Scroll up', keys: 'k' },
				{ action: 'Scroll to top', keys: 'gg' },
				{ action: 'Scroll to bottom', keys: '⇧G' },
				{ action: 'Open link', keys: 'f' },
				{ action: 'Open link in new tab', keys: '⇧F' },
			],
		},
		{
			title: 'Tabs',
			shortcuts: [
				{ action: 'Next tab', keys: 'gt' },
				{ action: 'Previous tab', keys: 'gT' },
				{ action: 'Close tab', keys: 'x' },
				{ action: 'Restore closed tab', keys: '⇧X' },
				{ action: 'Search open tabs', keys: '⇧T' },
			],
		},
	],
};

const chrome = (name: string, privateWindow: string): DemoApp => ({
	name,
	color: ['#4f8df7', '#1a5fd6'],
	blocks: [
		{
			title: name,
			shortcuts: [
				{ action: 'Settings…', keys: '⌘,' },
				{ action: `Hide ${name}`, keys: '⌘H' },
				{ action: 'Hide Others', keys: '⌥⌘H' },
				{ action: `Quit ${name}`, keys: '⌘Q' },
			],
		},
		{
			title: 'File',
			shortcuts: [
				{ action: 'New Tab', keys: '⌘T' },
				{ action: 'New Window', keys: '⌘N' },
				{ action: privateWindow, keys: '⇧⌘N' },
				{ action: 'Reopen Closed Tab', keys: '⇧⌘T' },
				{ action: 'Open File…', keys: '⌘O' },
				{ action: 'Open Location…', keys: '⌘L' },
				{ action: 'Close Window', keys: '⇧⌘W' },
				{ action: 'Close Tab', keys: '⌘W' },
				{ action: 'Save Page As…', keys: '⌘S' },
				{ action: 'Print…', keys: '⌘P' },
			],
		},
		editMenu,
		{
			title: 'View',
			shortcuts: [
				{ action: 'Always Show Bookmarks Bar', keys: '⇧⌘B' },
				{ action: 'Stop', keys: '⌘.' },
				{ action: 'Reload This Page', keys: '⌘R' },
				{ action: 'Force Reload This Page', keys: '⇧⌘R' },
				{ action: 'Enter Full Screen', keys: '⌃⌘F' },
				{ action: 'Actual Size', keys: '⌘0' },
				{ action: 'Zoom In', keys: '⌘+' },
				{ action: 'Zoom Out', keys: '⌘-' },
			],
		},
		{
			title: 'Developer',
			shortcuts: [
				{ action: 'View Source', keys: '⌥⌘U' },
				{ action: 'Developer Tools', keys: '⌥⌘I' },
				{ action: 'JavaScript Console', keys: '⌥⌘J' },
			],
		},
		{
			title: 'History',
			shortcuts: [
				{ action: 'Home', keys: '⇧⌘H' },
				{ action: 'Back', keys: '⌘[' },
				{ action: 'Forward', keys: '⌘]' },
				{ action: 'Show Full History', keys: '⌘Y' },
			],
		},
		{
			title: 'Bookmarks',
			shortcuts: [
				{ action: 'Bookmark Manager', keys: '⌥⌘B' },
				{ action: 'Bookmark This Tab…', keys: '⌘D' },
				{ action: 'Bookmark All Tabs…', keys: '⇧⌘D' },
			],
		},
		{
			title: 'Tab',
			shortcuts: [
				{ action: 'Select Next Tab', keys: '⌃⇥' },
				{ action: 'Select Previous Tab', keys: '⌃⇧⇥' },
			],
		},
		{
			title: 'Window',
			shortcuts: [
				{ action: 'Minimize', keys: '⌘M' },
				{ action: 'Downloads', keys: '⇧⌘J' },
			],
		},
		vimium,
	],
});

const safari: DemoApp = {
	name: 'Safari',
	color: ['#3ec5f6', '#0a6fe0'],
	blocks: [
		{
			title: 'Safari',
			shortcuts: [
				{ action: 'Settings…', keys: '⌘,' },
				{ action: 'Hide Safari', keys: '⌘H' },
				{ action: 'Hide Others', keys: '⌥⌘H' },
				{ action: 'Quit Safari', keys: '⌘Q' },
			],
		},
		{
			title: 'File',
			shortcuts: [
				{ action: 'New Window', keys: '⌘N' },
				{ action: 'New Private Window', keys: '⇧⌘N' },
				{ action: 'New Tab', keys: '⌘T' },
				{ action: 'Open File…', keys: '⌘O' },
				{ action: 'Open Location…', keys: '⌘L' },
				{ action: 'Close Window', keys: '⇧⌘W' },
				{ action: 'Close Tab', keys: '⌘W' },
				{ action: 'Save As…', keys: '⌘S' },
				{ action: 'Print…', keys: '⌘P' },
			],
		},
		editMenu,
		{
			title: 'View',
			shortcuts: [
				{ action: 'Show Tab Overview', keys: '⇧⌘\\' },
				{ action: 'Show Sidebar', keys: '⇧⌘L' },
				{ action: 'Show Reader', keys: '⇧⌘R' },
				{ action: 'Reload Page', keys: '⌘R' },
				{ action: 'Actual Size', keys: '⌘0' },
				{ action: 'Zoom In', keys: '⌘+' },
				{ action: 'Zoom Out', keys: '⌘-' },
				{ action: 'Enter Full Screen', keys: '⌃⌘F' },
			],
		},
		{
			title: 'History',
			shortcuts: [
				{ action: 'Back', keys: '⌘[' },
				{ action: 'Forward', keys: '⌘]' },
				{ action: 'Home', keys: '⇧⌘H' },
				{ action: 'Reopen Last Closed Tab', keys: '⇧⌘T' },
				{ action: 'Show All History', keys: '⌘Y' },
			],
		},
		{
			title: 'Bookmarks',
			shortcuts: [
				{ action: 'Show Bookmarks', keys: '⌃⌘1' },
				{ action: 'Edit Bookmarks', keys: '⌥⌘B' },
				{ action: 'Add Bookmark…', keys: '⌘D' },
			],
		},
		{
			title: 'Develop',
			shortcuts: [
				{ action: 'Show Web Inspector', keys: '⌥⌘I' },
				{ action: 'Show JavaScript Console', keys: '⌥⌘C' },
				{ action: 'Show Page Source', keys: '⌥⌘U' },
				{ action: 'Empty Caches', keys: '⌥⌘E' },
			],
		},
		{
			title: 'Window',
			shortcuts: [
				{ action: 'Minimize', keys: '⌘M' },
				{ action: 'Show Previous Tab', keys: '⌃⇧⇥' },
				{ action: 'Show Next Tab', keys: '⌃⇥' },
				{ action: 'Downloads', keys: '⌥⌘L' },
			],
		},
		vimium,
	],
};

const firefox: DemoApp = {
	name: 'Firefox',
	color: ['#ff9a3c', '#e3412f'],
	blocks: [
		{
			title: 'Firefox',
			shortcuts: [
				{ action: 'Settings', keys: '⌘,' },
				{ action: 'Hide Firefox', keys: '⌘H' },
				{ action: 'Hide Others', keys: '⌥⌘H' },
				{ action: 'Quit Firefox', keys: '⌘Q' },
			],
		},
		{
			title: 'File',
			shortcuts: [
				{ action: 'New Tab', keys: '⌘T' },
				{ action: 'New Window', keys: '⌘N' },
				{ action: 'New Private Window', keys: '⇧⌘P' },
				{ action: 'Open Location…', keys: '⌘L' },
				{ action: 'Open File…', keys: '⌘O' },
				{ action: 'Close Tab', keys: '⌘W' },
				{ action: 'Close Window', keys: '⇧⌘W' },
				{ action: 'Save Page As…', keys: '⌘S' },
				{ action: 'Print…', keys: '⌘P' },
			],
		},
		editMenu,
		{
			title: 'View',
			shortcuts: [
				{ action: 'Reload', keys: '⌘R' },
				{ action: 'Zoom In', keys: '⌘+' },
				{ action: 'Zoom Out', keys: '⌘-' },
				{ action: 'Actual Size', keys: '⌘0' },
				{ action: 'Enter Reader View', keys: '⌥⌘R' },
				{ action: 'Enter Full Screen', keys: '⌃⌘F' },
			],
		},
		{
			title: 'History',
			shortcuts: [
				{ action: 'Back', keys: '⌘[' },
				{ action: 'Forward', keys: '⌘]' },
				{ action: 'Show All History', keys: '⇧⌘H' },
				{ action: 'Reopen Closed Tab', keys: '⇧⌘T' },
				{ action: 'Reopen Closed Window', keys: '⇧⌘N' },
			],
		},
		{
			title: 'Bookmarks',
			shortcuts: [
				{ action: 'Bookmark Current Tab…', keys: '⌘D' },
				{ action: 'Manage Bookmarks', keys: '⇧⌘O' },
				{ action: 'Bookmarks Sidebar', keys: '⌘B' },
			],
		},
		{
			title: 'Tools',
			shortcuts: [
				{ action: 'Add-ons and Themes', keys: '⇧⌘A' },
				{ action: 'Web Developer Tools', keys: '⌥⌘I' },
				{ action: 'Browser Console', keys: '⇧⌘J' },
				{ action: 'Page Source', keys: '⌘U' },
			],
		},
		{
			title: 'Window',
			shortcuts: [{ action: 'Minimize', keys: '⌘M' }],
		},
		vimium,
	],
};

/** Picks the data for the browser the visitor is using (Keyly shows the frontmost app). */
export function demoAppFor(userAgent: string): DemoApp {
	if (/Firefox\//.test(userAgent)) return firefox;
	if (/Edg\//.test(userAgent)) return chrome('Microsoft Edge', 'New InPrivate Window');
	if (/Safari\//.test(userAgent) && !/Chrom(e|ium)\//.test(userAgent)) return safari;
	return chrome('Google Chrome', 'New Incognito Window');
}
