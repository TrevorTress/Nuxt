<template>
	<div class="box">
		<slot />
	</div>
</template>

<style>
.box {
	position: relative;
	background: url('/assets/bg.webp');
	width: 100vw;
	/* height: calc(100vh - var(--header-height) - var(--footer-height)); */
	height: 83vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
