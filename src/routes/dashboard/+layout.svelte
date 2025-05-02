<script lang="ts">
	import Footer from '$lib/components/shared/dashboard/navbar/footer.svelte';
	import MobileHeader from '$lib/components/shared/dashboard/navbar/mobile-header.svelte';
	import Navbar from '$lib/components/shared/dashboard/navbar/navbar.svelte';
	import { setContext, type Snippet } from 'svelte';
	import type { LayoutServerData } from './$types';
	let { data, children }: { data: LayoutServerData; children: Snippet } = $props();

	export interface ContextUser {
		id: string;
		username: string;
	}
	let isMobileMenuOpen = $state(false);

	let user = $state(data.user);
	setContext('user-context', user);
	const handleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

<div class="flex h-screen flex-col overflow-hidden lg:flex-row">
	<MobileHeader showMobileMenu={handleMobileMenu} />
	<Navbar {isMobileMenuOpen} />
	<div class="flex-1 overflow-hidden">
		<div
			class="min-h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 text-gray-900 dark:text-gray-100"
		>
			<div class=" flex h-screen flex-col pt-20 lg:pl-64 lg:pt-4">
				<div class="flex-grow">{@render children()}</div>
				<Footer />
			</div>
		</div>
	</div>
</div>
