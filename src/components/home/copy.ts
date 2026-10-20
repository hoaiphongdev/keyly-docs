// Homepage section copy. Feature, install and credit texts are the original homepage wording,
// moved here from index.mdx / vi/index.mdx so both locales share the same components.

export type Lang = 'en' | 'vi';

const en = {
	features: {
		caption: 'What you get',
		items: [
			{ title: 'Instant Shortcuts', body: 'Double-tap ⇪ Caps Lock to see all keyboard shortcuts for the currently active app. No memorization needed.' },
			{ title: 'Real Menu Shortcuts', body: "Extracts actual shortcuts from the app's menu bar via macOS Accessibility API. Always accurate." },
			{
				title: 'Custom Configs',
				body: 'Create <code>.keyly</code> files to add your own shortcuts for any application. Use <a href="/configuration/templates/">community templates</a> for popular apps.',
			},
			{ title: 'Modern UI', body: 'Multi-column layout with category grouping, descriptions, and blur effect overlay.' },
		],
	},
	works: {
		caption: 'Compatibility',
		lead: "Works with every app that has a menu bar — plus community templates for the shortcuts menus don't show.",
		template: 'Community template',
		stats: [
			['apps shown', '40'],
			['community templates', '31'],
			['menu-bar apps supported', '∞'],
		],
		templatesLink: '/configuration/templates/',
		browse: 'Browse templates',
	},
	install: {
		caption: 'One command',
		intro: 'Open Terminal and run:',
		after: 'Then grant Accessibility permission when prompted.',
		done: "That's it!",
		copy: 'Copy',
		copied: 'Copied',
		output: ['Downloading Keyly…', '✓ Installed Keyly to /Applications', 'Double-tap ⇪ Caps Lock to show shortcuts'],
	},
	footer: {
		made: 'Made with ❤️ by <a href="https://github.com/hoaiphongdev">hoaiphongdev</a>',
		start: 'Get Started',
		startHref: '/getting-started/',
		tryIt: 'Try it',
	},
};

const vi: typeof en = {
	features: {
		caption: 'Bạn có gì',
		items: [
			{ title: 'Phím tắt tức thì', body: 'Nhấn đúp ⇪ Caps Lock để xem tất cả phím tắt của ứng dụng đang hoạt động. Không cần ghi nhớ.' },
			{ title: 'Phím tắt thật từ menu', body: 'Đọc phím tắt thật từ thanh menu của ứng dụng qua Accessibility API của macOS. Luôn chính xác.' },
			{
				title: 'Cấu hình tùy chỉnh',
				body: 'Tạo file <code>.keyly</code> để thêm phím tắt riêng cho bất kỳ ứng dụng nào. Dùng <a href="/vi/configuration/templates/">mẫu cộng đồng</a> cho các ứng dụng phổ biến.',
			},
			{ title: 'Giao diện hiện đại', body: 'Bố cục nhiều cột với nhóm danh mục, phần mô tả và nền kính mờ.' },
		],
	},
	works: {
		caption: 'Tương thích',
		lead: 'Hoạt động với mọi ứng dụng có thanh menu — kèm mẫu cộng đồng cho những phím tắt mà menu không hiển thị.',
		template: 'Có mẫu cộng đồng',
		stats: [
			['ứng dụng tiêu biểu', '40'],
			['mẫu cộng đồng', '31'],
			['ứng dụng có thanh menu', '∞'],
		],
		templatesLink: '/vi/configuration/templates/',
		browse: 'Xem các mẫu',
	},
	install: {
		caption: 'Một lệnh duy nhất',
		intro: 'Mở Terminal và chạy:',
		after: 'Sau đó cấp quyền Trợ năng (Accessibility) khi được hỏi.',
		done: 'Xong!',
		copy: 'Sao chép',
		copied: 'Đã chép',
		output: ['Đang tải Keyly…', '✓ Đã cài Keyly vào /Applications', 'Nhấn đúp ⇪ Caps Lock để xem phím tắt'],
	},
	footer: {
		made: 'Được làm với ❤️ bởi <a href="https://github.com/hoaiphongdev">hoaiphongdev</a>',
		start: 'Bắt đầu',
		startHref: '/vi/getting-started/',
		tryIt: 'Thử ngay',
	},
};

export const copy = { en, vi };
export const INSTALL_COMMAND = 'curl -fsSL https://raw.githubusercontent.com/hoaiphongdev/keyly/main/scripts/install.sh | bash';
