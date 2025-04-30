<script>
	import { ArrowUpAZ, MenuIcon, Music2Icon } from 'lucide-svelte';
	import { routes } from '$lib/constants';
</script>

<header
	class="flex min-h-[4vh] min-w-full items-center justify-center bg-orange-500 text-center text-xl"
>
	<a href="/" class="flex underline">New version RTaks...<ArrowUpAZ /></a>
</header>
<header
	class="fixed flex min-h-[9vh] min-w-full border-b-2 border-t-2 border-gray-500 bg-gray-800 px-[35vh]"
>
	<div class=" flex min-w-full items-center justify-between bg-red-600 px-4 text-xl">
		<div class="flex gap-10 pl-5">
			<MenuIcon />
			<Music2Icon />
		</div>
		<div class="flex gap-5">
			{#each routes as route}
				<a href={route.path}>{route.name}</a>
			{/each}
		</div>
	</div>
</header>
<div class="min-h-full bg-gray-800"></div>
