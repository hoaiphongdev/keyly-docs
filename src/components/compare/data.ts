// Comparison pages: every claim shown on /compare/ lives here, in plain end-user words.
// The evidence behind each value is kept in comments (never rendered), checked on CHECKED_ON.
//
// Sources
// - Keyly: keyly repo (README, Package.swift, CHANGELOG 1.9.0); `lipo -archs` on the 1.9.0 DMG → arm64 only
// - CheatSheet: macstories.net/mac/cheatsheet-quickly-lists-an-apps-keyboard-shortcuts/ ("holding down the
//   command key for a couple seconds"); Homebrew cask disabled 2025-11-09 as discontinued; the official page
//   mediaatelier.com/CheatSheet/ now redirects to GrandTotal. No search feature documented anywhere.
// - KeyCue: ergonis.com/keycue, ergonis.com/keycue/pricing (Basic $39.99 one-time), version history
//   (11.2.1, macOS 13+, universal since 10.0)
// - KeyClu: sergii.tatarenkov.name/apps/keyclu/ (free, macOS 11+, Intel + Apple Silicon, own shortcuts,
//   shareable sets, filter, Markdown export, EN/DE/ZH/JA), github.com/Anze/KeyCluCask
import type { Lang } from '../home/copy';

export type { Lang };
export type AppId = 'keyly' | 'cheatsheet' | 'keycue' | 'keyclu';
export type Rival = Exclude<AppId, 'keyly'>;
type Text = Record<Lang, string>;

export const CHECKED_ON: Text = { en: 'October 2026', vi: 'tháng 10/2026' };
export const RIVALS: Rival[] = ['cheatsheet', 'keycue', 'keyclu'];

export const apps: Record<AppId, { name: string; key: string; url: string }> = {
	// `key` is the key you press to open each app, drawn on its keycap in the hero
	keyly: { name: 'Keyly', key: '⇪', url: 'https://github.com/hoaiphongdev/keyly' },
	cheatsheet: { name: 'CheatSheet', key: '⌘', url: 'https://www.macstories.net/mac/cheatsheet-quickly-lists-an-apps-keyboard-shortcuts/' },
	keycue: { name: 'KeyCue', key: '⌘', url: 'https://www.ergonis.com/keycue' },
	keyclu: { name: 'KeyClu', key: '⌘', url: 'https://sergii.tatarenkov.name/apps/keyclu/' },
};

/** `yes` and `no` get a filled or hollow dot next to the text; `text` and `unknown` are text only. */
export type Cell = { kind: 'yes' | 'no' | 'text' | 'unknown'; text: Text };
export type Row = { id: string; label: Text; hint: Text; cells: Record<AppId, Cell> };

const notMentioned: Cell = { kind: 'unknown', text: { en: 'Not mentioned', vi: 'Không đề cập' } };

export const rows: Row[] = [
	{
		id: 'price',
		label: { en: 'Price', vi: 'Giá' },
		hint: { en: 'What it costs', vi: 'Chi phí' },
		cells: {
			keyly: { kind: 'yes', text: { en: 'Free', vi: 'Miễn phí' } },
			cheatsheet: { kind: 'yes', text: { en: 'Free', vi: 'Miễn phí' } },
			keycue: { kind: 'text', text: { en: 'Paid, from $39.99', vi: 'Trả phí, từ $39.99' } },
			keyclu: { kind: 'yes', text: { en: 'Free', vi: 'Miễn phí' } },
		},
	},
	{
		id: 'open',
		label: { en: 'How to open', vi: 'Cách mở' },
		hint: { en: 'The key you press', vi: 'Phím bạn bấm' },
		cells: {
			keyly: {
				kind: 'text',
				text: {
					en: 'Double-tap ⇪ Caps Lock, or any key you choose, tap or hold',
					vi: 'Nhấn đúp ⇪ Caps Lock, hoặc phím bất kỳ bạn chọn, nhấn hay giữ đều được',
				},
			},
			cheatsheet: { kind: 'text', text: { en: 'Hold ⌘ for about 2 seconds', vi: 'Giữ ⌘ khoảng 2 giây' } },
			keycue: { kind: 'text', text: { en: 'Hold ⌘', vi: 'Giữ ⌘' } },
			keyclu: { kind: 'text', text: { en: 'Tap ⌘ twice, then hold', vi: 'Nhấn ⌘ hai lần rồi giữ' } },
		},
	},
	{
		id: 'custom',
		label: { en: 'Custom shortcuts & templates', vi: 'Phím tắt & template riêng' },
		hint: { en: 'Make it yours', vi: 'Tuỳ biến theo ý bạn' },
		cells: {
			keyly: {
				kind: 'yes',
				text: {
					en: 'Write your own in plain text files, for one app or every app. Share them, or install a ready-made one in one command',
					vi: 'Tự viết bằng file văn bản đơn giản, cho một app hay mọi app. Chia sẻ được, hoặc cài template có sẵn bằng một lệnh',
				},
			},
			cheatsheet: { kind: 'no', text: { en: 'No', vi: 'Không' } },
			keycue: { kind: 'yes', text: { en: 'Yes, added inside the app', vi: 'Có, thêm ngay trong app' } },
			keyclu: { kind: 'yes', text: { en: 'Yes, and you can share sets', vi: 'Có, và chia sẻ được' } },
		},
	},
	{
		id: 'search',
		label: { en: 'Search shortcuts', vi: 'Tìm phím tắt' },
		hint: { en: 'Find one fast', vi: 'Tìm thật nhanh' },
		cells: {
			keyly: { kind: 'yes', text: { en: 'Yes, just start typing', vi: 'Có, gõ là lọc ngay' } },
			cheatsheet: notMentioned,
			keycue: { kind: 'yes', text: { en: 'Yes', vi: 'Có' } },
			keyclu: { kind: 'yes', text: { en: 'Yes', vi: 'Có' } },
		},
	},
	{
		id: 'mac',
		label: { en: 'Works on', vi: 'Chạy trên' },
		hint: { en: 'Your Mac', vi: 'Máy Mac của bạn' },
		cells: {
			keyly: { kind: 'text', text: { en: 'Apple Silicon Macs · macOS 12+', vi: 'Mac chip Apple · macOS 12+' } },
			cheatsheet: { kind: 'no', text: { en: 'No longer updated', vi: 'Không còn được cập nhật' } },
			keycue: { kind: 'text', text: { en: 'Apple Silicon & Intel · macOS 13+', vi: 'Chip Apple & Intel · macOS 13+' } },
			keyclu: { kind: 'text', text: { en: 'Apple Silicon & Intel · macOS 11+', vi: 'Chip Apple & Intel · macOS 11+' } },
		},
	},
];

type Page = {
	/** Hero title; `{vs}` marks the accent word */
	title: Text;
	vs: Text;
	tagline: Text;
	/** One-line verdict on the hub's cards */
	verdict?: Text;
	/** "Choose Keyly if…" / "Choose <rival> if…" */
	keylyWins?: Record<Lang, string[]>;
	rivalWins?: Record<Lang, string[]>;
	/** Question and answer pairs, shown on the page and as FAQPage structured data */
	faq: Record<Lang, [string, string][]>;
};

export const pages: Record<'hub' | Rival, Page> = {
	hub: {
		title: { en: 'Keyly {vs} the rest', vi: 'Keyly {vs} các app khác' },
		vs: { en: 'vs', vi: 'so với' },
		tagline: {
			en: 'Four ways to see every shortcut on your Mac. Here is how they differ, in plain words.',
			vi: 'Bốn cách xem mọi phím tắt trên Mac. Khác nhau ở đâu, nói ngắn gọn dễ hiểu.',
		},
		faq: {
			en: [
				['What is a good free alternative to CheatSheet?', 'Keyly. It is free and open source, still updated, and like CheatSheet it shows every shortcut of the app you are using. You open it with a double-tap of Caps Lock instead of holding ⌘.'],
				['Which of these apps work on an Intel Mac?', 'KeyCue and KeyClu both run on Intel Macs. Keyly currently needs a Mac with Apple silicon.'],
				['Is Keyly really free?', 'Yes. There is no trial, no account and no paid tier, and the code is open source on GitHub.'],
			],
			vi: [
				['App miễn phí nào thay được CheatSheet?', 'Keyly. Miễn phí, mã nguồn mở, vẫn được cập nhật, và cũng hiện mọi phím tắt của app đang dùng như CheatSheet. Bạn mở bằng cách nhấn đúp Caps Lock thay vì giữ ⌘.'],
				['App nào chạy được trên Mac Intel?', 'KeyCue và KeyClu đều chạy trên Mac Intel. Keyly hiện cần máy Mac dùng chip Apple.'],
				['Keyly có thật sự miễn phí không?', 'Có. Không dùng thử, không cần tài khoản, không có gói trả phí, và mã nguồn công khai trên GitHub.'],
			],
		},
	},
	cheatsheet: {
		title: { en: 'Keyly {vs} CheatSheet', vi: 'Keyly {vs} CheatSheet' },
		vs: { en: 'vs', vi: 'hay' },
		tagline: {
			en: 'CheatSheet made holding ⌘ famous, but it is no longer updated. Keyly is a free, open-source alternative that is.',
			vi: 'CheatSheet nổi tiếng với kiểu giữ ⌘, nhưng đã ngừng cập nhật. Keyly là lựa chọn thay thế miễn phí, mã nguồn mở và vẫn đang được phát triển.',
		},
		verdict: {
			en: 'The classic, now unmaintained. Keyly opens faster and lets you add your own shortcuts.',
			vi: 'App kinh điển, nay đã ngừng phát triển. Keyly mở nhanh hơn và cho thêm phím tắt riêng.',
		},
		keylyWins: {
			en: [
				'You want an app that is still updated',
				'You would rather tap Caps Lock twice than hold ⌘ and wait',
				'You want to add shortcuts that never show up in menus',
				'You want to search the list instead of scanning it',
			],
			vi: [
				'Bạn muốn một app vẫn còn được cập nhật',
				'Bạn thích nhấn đúp Caps Lock hơn là giữ ⌘ rồi chờ',
				'Bạn muốn thêm những phím tắt không có trong menu',
				'Bạn muốn gõ để tìm thay vì dò cả danh sách',
			],
		},
		rivalWins: {
			en: ['It still runs fine on your Mac and you are happy with it', 'You like clicking a command right in the list to run it'],
			vi: ['Nó vẫn chạy ổn trên máy bạn và bạn đã quen', 'Bạn thích bấm thẳng vào lệnh trong danh sách để chạy'],
		},
		faq: {
			en: [
				['Is CheatSheet still updated?', 'No. Its developer no longer updates it and the official page now leads elsewhere. If it still runs on your Mac it keeps working, but it will not get fixes for new versions of macOS.'],
				['How is Keyly different from CheatSheet?', 'Both show the shortcuts of the app in front of you. Keyly opens with a double-tap of Caps Lock instead of a two-second ⌘ hold, lets you search the list, and lets you add shortcuts the menus do not show.'],
				['Can I keep holding ⌘ like in CheatSheet?', 'Yes. Set Keyly to open when you hold ⌘ and it works the way you are used to.'],
			],
			vi: [
				['CheatSheet còn được cập nhật không?', 'Không. Nhà phát triển đã ngừng cập nhật và trang chính thức giờ dẫn sang chỗ khác. Nếu vẫn chạy trên máy bạn thì vẫn dùng được, nhưng sẽ không có bản sửa lỗi cho các phiên bản macOS mới.'],
				['Keyly khác CheatSheet ở đâu?', 'Cả hai đều hiện phím tắt của app đang mở. Keyly mở bằng cách nhấn đúp Caps Lock thay vì giữ ⌘ hai giây, cho gõ để tìm, và cho thêm cả những phím tắt không có trong menu.'],
				['Mình vẫn muốn giữ ⌘ như CheatSheet được không?', 'Được. Chỉnh Keyly mở khi giữ ⌘ là dùng y như cũ.'],
			],
		},
	},
	keycue: {
		title: { en: 'Keyly {vs} KeyCue', vi: 'Keyly {vs} KeyCue' },
		vs: { en: 'vs', vi: 'hay' },
		tagline: {
			en: 'KeyCue is the long-standing paid option. Keyly does the core job for free, opens with Caps Lock, and is open source.',
			vi: 'KeyCue là lựa chọn trả phí lâu năm. Keyly làm tốt việc chính mà miễn phí, mở bằng Caps Lock và là mã nguồn mở.',
		},
		verdict: {
			en: 'Powerful and paid. Keyly covers the essentials for free, as plain-text sheets you own.',
			vi: 'Mạnh và trả phí. Keyly lo phần cốt lõi miễn phí, với file văn bản của chính bạn.',
		},
		keylyWins: {
			en: [
				'You want it free and open source',
				'You are on macOS 12',
				'You like shortcut sheets as plain text you can edit, version and share',
				'You want to pick the key that opens it',
			],
			vi: [
				'Bạn muốn miễn phí và mã nguồn mở',
				'Bạn đang dùng macOS 12',
				'Bạn thích phím tắt dạng file văn bản để sửa, lưu và chia sẻ',
				'Bạn muốn tự chọn phím để mở',
			],
		},
		rivalWins: {
			en: [
				'You have an Intel Mac',
				'You want extras beyond shortcuts, like emoji search and quick access to files and links',
				'You prefer a long-established app',
			],
			vi: [
				'Bạn dùng Mac chip Intel',
				'Bạn cần thêm tính năng ngoài phím tắt, như tìm emoji và mở nhanh file, đường dẫn',
				'Bạn thích một app đã có từ lâu',
			],
		},
		faq: {
			en: [
				['Is Keyly a free alternative to KeyCue?', 'Yes. Keyly is free and open source. KeyCue is a paid app, from $39.99, with extras that go beyond shortcuts.'],
				['Will Keyly run on my Mac?', 'Keyly needs macOS 12 or later on a Mac with Apple silicon. KeyCue also runs on Intel Macs, but needs macOS 13 or later.'],
				['Can I add my own shortcuts?', 'Yes, in both. In Keyly you write them in a simple text file, for one app or for every app, and they show up as soon as you save.'],
			],
			vi: [
				['Keyly có phải lựa chọn miễn phí thay KeyCue không?', 'Đúng vậy. Keyly miễn phí và mã nguồn mở. KeyCue là app trả phí, từ $39.99, với nhiều tính năng ngoài phím tắt.'],
				['Keyly có chạy trên máy mình không?', 'Keyly cần macOS 12 trở lên trên máy Mac chip Apple. KeyCue chạy được cả Mac Intel nhưng cần macOS 13 trở lên.'],
				['Mình có thêm phím tắt riêng được không?', 'Được, cả hai đều cho. Với Keyly bạn viết trong một file văn bản đơn giản, cho một app hay mọi app, lưu lại là thấy ngay.'],
			],
		},
	},
	keyclu: {
		title: { en: 'Keyly {vs} KeyClu', vi: 'Keyly {vs} KeyClu' },
		vs: { en: 'vs', vi: 'hay' },
		tagline: {
			en: 'Both are free and read shortcuts straight from your apps. Keyly opens with Caps Lock and keeps your sheets in plain text.',
			vi: 'Cả hai đều miễn phí và đọc phím tắt trực tiếp từ app. Keyly mở bằng Caps Lock và lưu phím tắt dạng văn bản đơn giản.',
		},
		verdict: {
			en: 'A close match. Pick Keyly for Caps Lock and plain-text sheets, KeyClu for Intel and more languages.',
			vi: 'Khá tương đồng. Chọn Keyly nếu thích Caps Lock và file văn bản, KeyClu nếu cần Intel và nhiều ngôn ngữ.',
		},
		keylyWins: {
			en: [
				'You would rather not hold ⌘: double-tap Caps Lock, or any key you choose',
				'You like shortcut sheets you can edit in any text editor',
				'You want a fully open-source app',
			],
			vi: [
				'Bạn không muốn giữ ⌘: nhấn đúp Caps Lock, hoặc phím bạn chọn',
				'Bạn thích file phím tắt sửa được bằng bất kỳ trình soạn thảo nào',
				'Bạn muốn một app mã nguồn mở hoàn toàn',
			],
		},
		rivalWins: {
			en: ['You have an Intel Mac or macOS 11', 'You want the app in German, Chinese or Japanese', 'You want to export the list as Markdown'],
			vi: ['Bạn dùng Mac Intel hoặc macOS 11', 'Bạn cần app bằng tiếng Đức, Trung hoặc Nhật', 'Bạn muốn xuất danh sách ra Markdown'],
		},
		faq: {
			en: [
				['What is the main difference between Keyly and KeyClu?', 'Both do the core job for free. Keyly opens with a double-tap of Caps Lock, or any key you pick, and keeps your shortcuts in plain text files. KeyClu opens with ⌘ and offers more languages and Markdown export.'],
				['Which one works on an Intel Mac?', 'KeyClu. Keyly currently needs a Mac with Apple silicon.'],
				['Can I share my shortcut sheets?', 'Yes, with both. Keyly sheets are plain text files you can send or publish, and ready-made ones install with one command.'],
			],
			vi: [
				['Keyly và KeyClu khác nhau chính ở đâu?', 'Cả hai đều làm tốt việc chính và miễn phí. Keyly mở bằng cách nhấn đúp Caps Lock, hoặc phím bạn chọn, và lưu phím tắt dạng file văn bản. KeyClu mở bằng ⌘, có nhiều ngôn ngữ hơn và xuất được ra Markdown.'],
				['App nào chạy trên Mac Intel?', 'KeyClu. Keyly hiện cần máy Mac dùng chip Apple.'],
				['Có chia sẻ bảng phím tắt được không?', 'Được, cả hai. Bảng phím tắt của Keyly là file văn bản, gửi hay đăng lên đều được, và template có sẵn cài bằng một lệnh.'],
			],
		},
	},
};

export const ui = {
	en: {
		bar: ['00 / Compare', 'Checked'],
		spec: { price: 'Price', open: 'How to open', yourKey: '⇪ ⇪ or your own key' },
		start: 'Get Keyly',
		compare: 'See the comparison',
		matrix: { caption: 'Based on each developer’s website', feature: 'Feature', all: 'Compare all four' },
		race: {
			lead: 'Every time you open the list, you wait for it. Here is that wait in real time.',
			replay: 'Replay',
			open: 'Open',
			keyly: 'Double-tap ⇪ Caps Lock',
			cheatsheet: 'Hold ⌘',
			pick: 'Prefer another key? Pick any key or combination, tap or hold.',
			pickLink: ['See how', '/faq/#can-i-change-the-trigger-key-or-delay'],
			seconds: 's',
		},
		yours: {
			template: 'Template',
			templateText: 'Write your own shortcut sheet for any app in plain text, or install a ready-made one in one command.',
			templateLinks: [
				['Write a template', '/configuration/custom-shortcuts/'],
				['Browse templates', '/templates/'],
			],
			trigger: 'Trigger',
			triggerText: 'Open Keyly with the key you like: Caps Lock, a combination, tapped or held.',
			triggerLink: ['Change the trigger', '/faq/#can-i-change-the-trigger-key-or-delay'],
			hold: 'hold',
		},
		choose: 'Choose {app} if',
		cards: { more: 'Read the comparison' },
		sources: {
			title: 'Sources',
			text: 'Based on each developer’s website and public reviews, checked {date}. Spot a mistake?',
			issue: 'Tell us',
		},
	},
	vi: {
		bar: ['00 / So sánh', 'Cập nhật'],
		spec: { price: 'Giá', open: 'Cách mở', yourKey: '⇪ ⇪ hoặc phím bạn chọn' },
		start: 'Dùng Keyly',
		compare: 'Xem so sánh',
		matrix: { caption: 'Theo website của từng nhà phát triển', feature: 'Tính năng', all: 'So sánh cả bốn' },
		race: {
			lead: 'Mỗi lần mở danh sách phím tắt là một lần chờ. Đây là thời gian chờ đó, tính theo thời gian thực.',
			replay: 'Chạy lại',
			open: 'Mở',
			keyly: 'Nhấn đúp ⇪ Caps Lock',
			cheatsheet: 'Giữ ⌘',
			pick: 'Thích phím khác? Chọn phím hay tổ hợp bất kỳ, nhấn hoặc giữ.',
			pickLink: ['Xem cách làm', '/vi/faq/#có-thể-đổi-phím-kích-hoạt-hoặc-thời-gian-giữ-không'],
			seconds: 's',
		},
		yours: {
			template: 'Template',
			templateText: 'Tự viết bảng phím tắt cho bất kỳ app nào bằng văn bản đơn giản, hoặc cài template có sẵn bằng một lệnh.',
			templateLinks: [
				['Viết template', '/vi/configuration/custom-shortcuts/'],
				['Xem template', '/templates/'],
			],
			trigger: 'Phím mở',
			triggerText: 'Mở Keyly bằng phím bạn thích: Caps Lock, một tổ hợp phím, nhấn hay giữ đều được.',
			triggerLink: ['Đổi phím mở', '/vi/faq/#có-thể-đổi-phím-kích-hoạt-hoặc-thời-gian-giữ-không'],
			hold: 'giữ',
		},
		choose: 'Chọn {app} nếu',
		cards: { more: 'Xem so sánh' },
		sources: {
			title: 'Nguồn',
			text: 'Theo website của từng nhà phát triển và các bài review công khai, kiểm tra {date}. Thấy chỗ sai?',
			issue: 'Báo cho chúng tôi',
		},
	},
} satisfies Record<Lang, unknown>;

/** `''` for the hub, otherwise the rival a page compares against, from a route id like `vi/compare/keycue` */
export function pageFor(id: string): 'hub' | Rival {
	const slug = id.replace(/^vi\//, '').replace(/^compare\/?/, '');
	return (RIVALS as string[]).includes(slug) ? (slug as Rival) : 'hub';
}
