<script setup>
	const route = useRoute();
	const { plant, section, page } = route.params;
</script>

<template>
	<div className="left">
		<h1>{{ page.toUpperCase() }}</h1>
		<slot />
	</div>
</template>

<!-- :style={{ maxWidth: w ? `${w}vw` : '100%' }} -->

<style>
	.left {
		max-height: 100%;
		position: relative;
		display: block;
		font-size: 1.2rem;
		padding: 1rem;
		padding-bottom: 0;
		overflow: auto;

		& h1 {
			text-align: center;
			margin-bottom: 1rem;
			font-weight: 700;
		}

		& heading {
			display: flex;
			justify-content: center;
			margin-bottom: 1rem;
			& h2 {
				font-weight: 700;
				margin: 0.75rem;
			}

			& a {
				width: 4.5rem;
				height: 8vh;
				& button {
					background: var(--drawing-color);
					color: #fff;
					border-radius: 1rem;
					width: 100%;
					height: 100%;
					padding: 0.5rem;
				}
			}
		}

		@media screen and (max-width: 650px) {
			width: 80vw !important;
		}
	}
</style>
