<template>
	<div class="box">
		<slot />
	</div>
</template>

<style>
	.box {
		position: relative;
		background: pink;
		width: 100vw;
		/* height: calc(100vh - var(--header-height) - var(--footer-height)); */
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
