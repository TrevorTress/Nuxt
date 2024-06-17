<script setup>
	const route = useRoute();
	const { plant, section, page } = route.params;
</script>

<template>
	<section class="content">
		<h1>This page will be content for Plant {{ plant }} - Section {{ section }} - Page {{ page }}</h1>
	</section>
</template>

<style>
	.content {
		background: white;
		width: 50vw;
		height: 40vh;

		& h1 {
			color: black;
		}
	}
</style>
