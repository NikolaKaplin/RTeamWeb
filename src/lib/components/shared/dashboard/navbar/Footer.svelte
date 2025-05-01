<script>
	import { SocialLinks } from '$lib/constants';
	import FaIcon from '../../icons/Fa-icon.svelte';
</script>

<footer class="py-8 text-gray-300">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center justify-center space-y-4">
			<h3 class="text-lg font-semibold">Join Our Community</h3>
			<p class="max-w-md text-center text-sm">
				Stay connected with us through our social media channels and be a part of the Altergemu
				family!
			</p>
			<div class="flex space-x-4">
				{#each SocialLinks as SocialLink}
					<a href={SocialLink.url}>
						<span
							class="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 transition duration-200 ease-in-out hover:bg-gray-600"
						>
							<FaIcon
								Icon={SocialLink.icon}
								size={SocialLink.size}
								class={'text-3xl'}
								color={SocialLink.color}
							/>
							<span class="sr-only">{SocialLink.name}</span>
						</span>
					</a>
				{/each}
			</div>
			<div class="mt-4 text-xs">
				© {new Date().getFullYear()} Altergemu - All Rights Reserved
			</div>
			<a href={'/release-notes'} class="text-xs text-gray-500 hover:cursor-pointer hover:underline">
				Version 1.0.0
			</a>
			<p class="text-xs text-gray-500">Made with ❤️ by Rizo</p>
		</div>
	</div>
</footer>
