<script lang="ts">
	import type { Icon as LucideIcon } from 'lucide-svelte';

	type Props = {
		Icon: typeof LucideIcon;
		class?: string;
		size?: number;
		color?: string;
		strokeWidth?: number;
	};

	const {
		Icon,
		class: className = '',
		size = 24,
		color = 'currentColor',
		strokeWidth = 2
	}: Props = $props();
</script>

<Icon class={className} {size} {color} {strokeWidth} />
