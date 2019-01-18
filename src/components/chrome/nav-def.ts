export type NavEntry = {
	label: string,
	icon: string,
};
export type NavLink = NavEntry & {
	href: string,
};
export type NavGroup = NavEntry & {
	sub: NavLink[],
};

export const navDef: NavGroup[] = [
	{
		label: 'Data Entry',
		icon: 'list',
		sub: [
			{
				label: 'Employees',
				icon: 'people',
				href: '/employees',
			},
			{
				label: 'Contractors',
				icon: 'people_outline',
				href: '/contractors',
			},
			{
				label: 'Projects',
				icon: 'class',
				href: '/projects',
			},
		],
	},
	{
		label: 'Account',
		icon: 'account_balance',
		sub: [
			{
				label: 'Account Circle',
				icon: 'account_circle',
				href: '/account-circle',
			},
			{
				label: 'Account Inbox',
				icon: 'all_inbox',
				href: '/all-inbox',
			},
		],
	},
	{
		label: 'Assignment',
		icon: 'assignment',
		sub: [
			{
				label: 'Feedback',
				icon: 'feedback',
				href: '/feedback',
			},
			{
				label: 'Fingerprint',
				icon: 'fingerprint',
				href: '/finger-print',
			},
		],
	},
	{
		label: 'Pan Tool',
		icon: 'pan_tool',
		sub: [
			{
				label: 'Schedule',
				icon: 'schedule',
				href: '/schedule',
			},
			{
				label: 'Thumb Up',
				icon: 'thumb_up',
				href: '/thumb-up',
			},
		],
	},
];
