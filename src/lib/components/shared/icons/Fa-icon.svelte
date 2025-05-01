<script lang="ts">
	import Fa, { type IconSize } from 'svelte-fa';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	type Props = {
		Icon: IconDefinition;
		size?: IconSize;
		class?: string;
		color?: string;
		scale?: number;
	};
	const { Icon, class: className = '', size = '1.5x', color, scale = 1.2 }: Props = $props();
</script>

<Fa icon={Icon} class="bg-none" {size} {color} {scale} fw pull="left" />
