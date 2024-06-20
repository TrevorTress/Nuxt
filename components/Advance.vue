<script setup>
	const props = defineProps({
		jump: { type: String, default: '' },
		to: { type: String, default: '' },
	});
	const { jump, to } = props;

	const route = useRoute();
	const { plant, section } = route.params;

	const advanceURL = computed(() => `/${plant}/${jump || section}/${to ? encodeURIComponent(to) : ''}`);
</script>

<template>
	<ULink
		class="advance"
		:to="advanceURL"
	>
		<h5>{{ to }}>></h5>
	</ULink>
</template>

<style>
	.advance {
		position: absolute !important;
		top: 1% !important;
		right: 1% !important;
		display: flex;
		align-items: center;
		text-decoration: none;

		& h5 {
			display: inline;
			margin: 0;
			color: white;
			font-weight: 500;
			font-size: 1.5rem;
		}

		&:hover {
			cursor: pointer;
			color: var(--secondary);
			transform: scale(1.02);
		}

		@media screen and (max-width: 500px) {
			top: 16%;

			& h5 {
				display: none;
			}
		}
	}
</style>
