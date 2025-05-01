import { faDiscord, faYoutube, type IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import {
	FolderKanban,
	House,
	ListTodo,
	ShieldCheck,
	UserRoundCog,
	UsersRound
} from 'lucide-svelte';
import type { Icon as LucideIcon } from 'lucide-svelte';
import type { IconSize } from 'svelte-fa';

export type NavItem = {
	title: string;
	path: string;
	icon: typeof LucideIcon;
};

export const NavItems: NavItem[] = [
	{
		title: 'Home',
		icon: House,
		path: 'home'
	},
	{
		title: 'Profile',
		icon: UserRoundCog,
		path: 'profile'
	},
	{
		title: 'Team',
		icon: UsersRound,
		path: 'team'
	},
	{
		title: 'My tasks',
		icon: ListTodo,
		path: 'tasks'
	},
	{
		title: 'Projects',
		icon: FolderKanban,
		path: 'projects'
	},
	{
		title: 'Admin',
		icon: ShieldCheck,
		path: 'admin'
	}
];

export type SocialLink = {
	name: string;
	url: string;
	icon: IconDefinition;
	color?: string;
	scale?: number;
	size?: IconSize;
};

export const SocialLinks: SocialLink[] = [
	{
		name: 'telegram',
		url: 'https://t.me/altergemu',
		icon: faTelegramPlane,
		color: '#2DA7E2',
		size: '1.9x'
	},
	{
		name: 'discord',
		url: 'https://discord.gg/wsHUFYTh',
		icon: faDiscord,
		color: '#939BF9'
	},
	{
		name: 'youtube',
		url: 'https://youtube.com/altergemu',
		icon: faYoutube,
		color: '#FE0032'
	}
];
