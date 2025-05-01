<script lang="ts">
	import type { NavItem } from '$lib/constants';
	import { cn } from '$lib/utils';
	import LucideIcon from '../../icons/Lucide-icon.svelte';
	let {
		handleClick,
		item,
		isActive
	}: { handleClick: () => void; item: NavItem; isActive: boolean } = $props();
</script>

<a href={'dashboard/' + item.path} onclick={handleClick}>
	<div
		class={cn(
			'm-1 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200',
			isActive
				? 'bg-indigo-600 text-white shadow-md'
				: 'text-gray-300 hover:bg-gray-700 hover:text-white'
		)}
	>
		<LucideIcon Icon={item.icon} size={28} class="text-indigo-400" />
		<span class="text-sm font-medium">{item.title}</span>
	</div>
</a>
