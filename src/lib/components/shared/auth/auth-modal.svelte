<script lang="ts">
	import { fade } from 'svelte/transition';
	import RegisterForm from './register-form.svelte';
	import LoginForm from './login-form.svelte';
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
					<RegisterForm />
				{/if}
				{#if isLoginView}<LoginForm />{/if}
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
