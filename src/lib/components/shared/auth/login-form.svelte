<script>
	import { enhance } from '$app/forms';
</script>

<form method="post" action="/auth/?/login" use:enhance>
	<div>
		<label for="email" class="mb-1 block text-sm font-medium">Email</label>
		<input
			name="emai"
			type="email"
			id="email"
			class="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
			placeholder="your@email.com"
		/>
	</div>
	<div>
		<label for="password" class="mb-1 block text-sm font-medium">Password</label>
		<input
			name="password"
			type="password"
			id="password"
			class="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
			placeholder="••••••••"
		/>
	</div>
	<button
		class="w-full rounded-md bg-green-600 px-4 py-2 text-white transition duration-200 hover:bg-green-700"
	>
		Sign In
	</button>
</form>
