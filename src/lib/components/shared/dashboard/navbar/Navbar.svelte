<script lang="ts">
	import { NavItems } from '$lib/constants';
	import NavbarItem from './navbar-item.svelte';
	import { page } from '$app/stores';
	import NavbarFooter from './navbar-footer.svelte';

	let { isMobileMenuOpen }: { isMobileMenuOpen: boolean } = $props();
	const pathName = $derived($page.url.pathname);

	const isItemActive = (itemPath: string) => {
		if (itemPath === 'home') {
			return pathName === '/dashboard';
		}
		return pathName.startsWith(`/dashboard/${itemPath}`);
	};
</script>

<div
	class={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col rounded-r-3xl bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
		isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
	}`}
>
	<div
		class="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 flex-grow overflow-y-auto"
	>
		<div class="hidden p-6 text-center lg:block">
			<div class="flex items-center justify-center space-x-2">
				<h1
					class="bg-gradient-to-r from-indigo-200 to-purple-500 bg-clip-text text-3xl font-bold text-transparent"
				>
					Your Team
				</h1>
			</div>
			<div class="mt-2 text-sm text-gray-400">Your description</div>
		</div>

		<nav class="gap-2 space-y-1 px-3 py-2">
			{#each NavItems as item}
				<NavbarItem {item} isActive={isItemActive(item.path)} currentPath={pathName} />
			{/each}
		</nav>
	</div>
	<div class="border-t border-gray-700 p-4">
		<NavbarFooter />
	</div>
</div>
