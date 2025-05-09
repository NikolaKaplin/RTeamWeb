<script lang="ts">
	import type { NavItem } from '$lib/constants';
	import { cn } from '$lib/utils';
	import LucideIcon from '../../icons/lucide-icon.svelte';

	const { item, isActive, currentPath } = $props<{
		item: NavItem;
		isActive: boolean;
		currentPath: string;
	}>();

	// Формируем корректный путь
	const itemPath = $derived(
		item.path === 'home'
			? '/dashboard'
			: currentPath.split('/').length > 1
				? `/dashboard/${item.path}`
				: `/${item.path}`
	);
</script>

<a href={itemPath} class:pointer-events-none={isActive}>
	<div
		class={cn(
			'm-1 flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200',
			isActive
				? 'bg-indigo-600 text-white shadow-md'
				: 'text-gray-300 hover:bg-gray-700 hover:text-white'
		)}
	>
		<LucideIcon Icon={item.icon} size={28} class={isActive ? 'text-white' : 'text-indigo-400'} />
		<span class="text-sm font-medium">{item.title}</span>

		{#if isActive}
			<div class="ml-auto h-2 w-2 rounded-full bg-white"></div>
		{/if}
	</div>
</a>
