<script setup>
	const props = defineProps({
		w: Number,
		h: Number,
		src: String,
	});
</script>

<template>
	<figure>
		<img @onclick="() => console.log('clicked')" />
		<figcaption>{props.caption}</figcaption>
		<slot />
	</figure>
</template>

<!-- @onclick="() => setImgZoom({ show: true, src: src as string })" -->
