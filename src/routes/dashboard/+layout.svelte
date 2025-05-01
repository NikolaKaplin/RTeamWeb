<script lang="ts">
	import Footer from '$lib/components/shared/dashboard/navbar/Footer.svelte';
	import MobileHeader from '$lib/components/shared/dashboard/navbar/Mobile-header.svelte';
	import Navbar from '$lib/components/shared/dashboard/navbar/Navbar.svelte';
	let { children } = $props();
</script>

<div class="flex h-screen flex-col overflow-hidden lg:flex-row">
	<MobileHeader />
	<Navbar />
	<div class="flex-1 overflow-hidden">
		<div
			class="h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 text-gray-900 dark:text-gray-100"
		>
			<div class=" flex min-h-screen flex-col pt-20 lg:pl-64 lg:pt-4">
				<div class="flex-grow">
					{@render children()}
				</div>
				<Footer />
			</div>
		</div>
	</div>
</div>
