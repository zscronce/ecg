// import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import AllInboxIcon from '@material-ui/icons/AllInbox';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import FeedbackIcon from '@material-ui/icons/Feedback';
// import FingerprintIcon from '@material-ui/icons/Fingerprint';
// import PanToolIcon from '@material-ui/icons/PanTool';
// import ScheduleIcon from '@material-ui/icons/Schedule';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export type MenuEntry = {
	label: string,
	icon: string,
	href: string,
	sub?: MenuEntry[],
};

export const menu: MenuEntry[] = [
	{
		label: 'Account Balance',
		icon: 'account_balance',
		href: '/account-balance',
		sub: [
			{
				label: 'Account Circle',
				icon: 'account_circle',
				href: '/account-circle',
			},
			{
				label: 'All Inbox',
				icon: 'all_inbox',
				href: '/all-inbox',
			},
		],
	},
	{
		label: 'Assignment',
		icon: 'assignment',
		href: '/assignment',
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
		]
	},
	{
		label: 'Pan Tool',
		icon: 'pan_tool',
		href: '/pan-tool',
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
