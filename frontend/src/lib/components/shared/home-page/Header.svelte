<!-- Header -->
<script lang="ts">
	export let toggleAuthModal: () => void;
</script>

<header class="px-4 py-6 sm:px-6 lg:px-8">
	<div class="flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<svg
				class="h-8 w-8 text-green-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span class="text-xl font-bold">RTask</span>
		</div>
		<button
			on:click={toggleAuthModal}
			class="rounded-md bg-green-600 px-4 py-2 text-white transition duration-200 hover:bg-green-700"
		>
			Get Started
		</button>
	</div>
</header>
