<script lang="ts">
	import { Menu } from 'lucide-svelte';
	let { showMobileMenu }: { showMobileMenu: () => void } = $props();
</script>

<header
	class="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-gray-800 p-2 drop-shadow-xl lg:hidden"
>
	<div class="w-7"></div>
	<a href="/" class="absolute left-1/2 flex -translate-x-1/2 transform items-center space-x-2">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px">
			<linearGradient
				id="Elxog5TCOlOEK7trzF2bAa"
				x1="32"
				x2="32"
				y1="8"
				y2="54"
				gradientUnits="userSpaceOnUse"
				spreadMethod="reflect"
			>
				<stop offset="0" stop-color="#1a6dff" />
				<stop offset="1" stop-color="#c822ff" />
			</linearGradient>
			<path
				fill="url(#Elxog5TCOlOEK7trzF2bAa)"
				d="M55.952,52.69l-14.221-44C41.601,8.28,41.211,8,40.782,8H23.218 c-0.429,0-0.818,0.28-0.948,0.69l-14.221,44c-0.1,0.31-0.04,0.64,0.14,0.9C8.377,53.85,8.677,54,8.996,54H22.12 c0.24,0,0.479-0.09,0.659-0.25l14.581-12.74l3.563,12.27c0.12,0.43,0.519,0.72,0.958,0.72h13.124c0.319,0,0.619-0.15,0.808-0.41 C55.992,53.33,56.052,53,55.952,52.69z M42.629,52l-9.671-33.28c-0.12-0.42-0.499-0.71-0.938-0.72 c-0.449,0.01-0.828,0.27-0.968,0.68l-6.986,21c-0.1,0.31-0.05,0.64,0.14,0.9c0.19,0.27,0.489,0.42,0.808,0.42h9.311L21.751,52 H10.373l13.573-42h16.108l13.573,42H42.629z M36.77,39H26.401l5.539-16.64L36.77,39z"
			/>
			<linearGradient
				id="Elxog5TCOlOEK7trzF2bAb"
				x1="32"
				x2="32"
				y1="12"
				y2="50"
				gradientUnits="userSpaceOnUse"
				spreadMethod="reflect"
			>
				<stop offset="0" stop-color="#6dc7ff" />
				<stop offset="1" stop-color="#e6abff" />
			</linearGradient>
			<path
				fill="url(#Elxog5TCOlOEK7trzF2bAb)"
				d="M50.88,50h-6.75l-9.25-31.83c-0.36-1.27-1.49-2.14-2.81-2.17h-0.09 c-1.3,0.03-2.41,0.83-2.83,2.05l-6.99,21.02c-0.29,0.91-0.13,1.92,0.41,2.66c0.56,0.79,1.47,1.27,2.44,1.27H29l-8,7h-7.88L25.4,12 h13.2L50.88,50z"
			/>
		</svg>
		<h1
			class="bg-gradient-to-r from-indigo-200 to-purple-500 bg-clip-text text-3xl font-bold text-transparent"
		>
			Altergemu
		</h1>
	</a>
	<button onclick={showMobileMenu} class="flex items-center">
		<Menu />
	</button>
</header>
