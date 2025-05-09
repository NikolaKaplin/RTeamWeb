<script lang="ts">
	let number = $state();

	async function roll() {
		const response = await fetch('/api/v1/roll');
		number = await response.json();
	}
</script>

<div class="bg-white">
	<button onclick={roll}>Roll the dice</button>

	{#if number !== undefined}
		<p>You rolled a {number}</p>
	{/if}
</div>
