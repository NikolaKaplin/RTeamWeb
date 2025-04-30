<script lang="ts">
	import { fade } from 'svelte/transition';
	export let showAuthModal: boolean;
	export let toggleAuthModal: () => void;

	let isLoginView = true;

	const switchView = () => {
		isLoginView = !isLoginView;
	};
</script>

{#if showAuthModal}
	<a
		href={null}
		transition:fade
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
		on:click|self={toggleAuthModal}
	>
		<div class="w-full max-w-md rounded-xl bg-gray-800 p-6">
			<div class="mb-6 flex items-center justify-between">
				<h3 class="text-xl font-bold">{isLoginView ? 'Welcome back' : 'Create account'}</h3>
				<button
					aria-label="toggle-auth-modal"
					on:click={toggleAuthModal}
					class="text-gray-400 hover:text-white"
				>
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</div>

			<div class="space-y-4">
				{#if !isLoginView}
					<div>
						<label for="username" class="mb-1 block text-sm font-medium">Username</label>
						<input
							type="text"
							id="username"
							class="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="Choose a username"
						/>
					</div>
				{/if}

				<div>
					<label for="email" class="mb-1 block text-sm font-medium">Email</label>
					<input
						type="email"
						id="email"
						class="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
						placeholder="your@email.com"
					/>
				</div>

				<div>
					<label for="password" class="mb-1 block text-sm font-medium">Password</label>
					<input
						type="password"
						id="password"
						class="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
						placeholder="••••••••"
					/>
				</div>

				{#if !isLoginView}
					<div>
						<label for="confirm-password" class="mb-1 block text-sm font-medium"
							>Confirm Password</label
						>
						<input
							type="password"
							id="confirm-password"
							class="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="••••••••"
						/>
					</div>
				{/if}

				<button
					class="w-full rounded-md bg-green-600 px-4 py-2 text-white transition duration-200 hover:bg-green-700"
				>
					{isLoginView ? 'Sign In' : 'Sign Up'}
				</button>

				<div class="text-center text-sm text-gray-400">
					{isLoginView ? "Don't have an account?" : 'Already have an account?'}
					<button on:click={switchView} class="ml-1 text-green-500 hover:underline">
						{isLoginView ? 'Sign up' : 'Sign in'}
					</button>
				</div>
			</div>
		</div>
	</a>
{/if}
