<script lang="ts">
	import { goto } from '$app/navigation';
	import AuthModal from '$lib/components/shared/auth/auth-modal.svelte';
	import Downloader from '$lib/components/shared/home-page/Downloader.svelte';
	import Footer from '$lib/components/shared/home-page/Footer.svelte';
	import Header from '$lib/components/shared/home-page/Header.svelte';
	import MainContent from '$lib/components/shared/home-page/MainContent.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
	let showAuthModal = $state(false);

	const toggleAuthModal = () => {
		if (data.user) return goto('/dashboard');
		showAuthModal = !showAuthModal;
	};
</script>

<svelte:head>
	<title>RTask | Get Started</title>
	<meta name="description" content="Boost your productivity with RTask" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-900 text-gray-100">
	<Header toggleAuthModal={() => toggleAuthModal()} />
	<MainContent toggleAuthModal={() => toggleAuthModal()} />
	<Downloader />
	<Footer />
	<AuthModal {showAuthModal} toggleAuthModal={() => toggleAuthModal()} />
</div>
