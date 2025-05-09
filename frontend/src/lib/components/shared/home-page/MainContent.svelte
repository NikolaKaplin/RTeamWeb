<!-- Main Content -->
<script lang="ts">
	export let toggleAuthModal: () => void;
</script>

<main class="container mx-auto flex-grow px-4 py-12 sm:px-6 lg:px-8">
	<section class="mx-auto mb-16 max-w-3xl text-center">
		<h1 class="mb-6 text-4xl font-bold md:text-5xl">
			Organize. Prioritize. <span class="text-green-500">Achieve.</span>
		</h1>
		<p class="mb-8 text-xl text-gray-300">
			RTask helps you manage projects efficiently with intuitive tools designed for modern teams.
		</p>

		<h1 class="flex items-center gap-2 text-center text-2xl">
			<p class="mb-5 text-8xl text-blue-500">&#123;</p>
			<p class="text-4xl text-yellow-400">You</p>
			<p class="text-2xl text-red-400">==</p>
			<p class=" text-4xl text-green-600">"Developer"</p>
			<p class="text-3xl text-red-400">?</p>
			<button
				class="rounded-md bg-purple-600 px-3 py-3 text-lg font-medium text-white shadow-lg transition duration-200 hover:bg-purple-700"
			>
				Read API Docs
			</button>
			<p class="text-3xl text-red-400">:</p>
			<button
				on:click={toggleAuthModal}
				class="rounded-md bg-green-600 px-3 py-3 text-lg font-medium text-white shadow-lg transition duration-200 hover:bg-green-700"
			>
				Get Started - It's Free
			</button>
			<p class="mb-5 text-8xl text-blue-500">&#125;</p>
		</h1>
	</section>

	<!-- Features Section -->
	<section class="mt-24">
		<h2 class="mb-12 text-center text-3xl font-bold">Why Choose RTask?</h2>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Feature 1 -->
			<div class="rounded-lg bg-gray-800 p-6">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
					<svg
						class="h-6 w-6 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Lightning Fast</h3>
				<p class="text-gray-300">
					Built for speed with optimized performance that keeps up with your workflow.
				</p>
			</div>

			<!-- Feature 2 -->
			<div class="rounded-lg bg-gray-800 p-6">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
					<svg
						class="h-6 w-6 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Secure & Private</h3>
				<p class="text-gray-300">
					Your data is encrypted and protected with enterprise-grade security.
				</p>
			</div>

			<!-- Feature 3 -->
			<div class="rounded-lg bg-gray-800 p-6">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
					<svg
						class="h-6 w-6 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Team Collaboration</h3>
				<p class="text-gray-300">
					Work seamlessly with your team in real-time with shared workspaces.
				</p>
			</div>
		</div>
	</section>

	<!-- Image Placeholder Section -->
	<section class="mt-24">
		<div class="rounded-xl bg-gray-800 p-8">
			<div
				class="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-lg bg-gray-700/50"
			>
				<img src="https://storage.yandexcloud.net/rtask/photo_2025-04-30_23-49-05.jpg" alt="" />
				<!-- <span class="text-gray-400">App Screenshot Placeholder</span> -->
			</div>
		</div>
	</section>
</main>
