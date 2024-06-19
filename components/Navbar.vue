<script setup>
	const active = useState('active', () => false);
	const setActive = (value) => (active.value = value);
</script>

<template>
	<nav
		class="navbar"
		:style="{ left: active ? '0' : '-6vw' }"
		@mouseover="setActive(true)"
		@mouseout="setActive(false)"
	>
		<button id="toggle">
			<Icon name="i-heroicons-arrow-left-start-on-rectangle-16-solid" />
		</button>
	</nav>
</template>

<style>
	nav {
		position: absolute;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		top: 10vh;
		height: 80vh;
		width: 6vw;
		min-width: fit-content;
		background: black;
		border-right: solid black 2px;
		transition: all 0.25s ease-in-out;

		#toggle {
			background: white;
			z-index: 10;
			position: absolute;
			right: -2.8vw;
			width: 2.8vw;
			padding: 0.5rem;
			border-radius: 0.5rem;

			svg {
				color: black;
			}
		}
	}
</style>
