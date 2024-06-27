<script setup>
	import axios from 'axios';
	const route = useRoute();
	const { plant } = route.params;
	const { data: plantData, isFetching: isFetchingPlantData } = await useFetch(`/api/plant/${plant}`);
	const activePlant = computed(() => plantData.value || {});

	const { data: sectionData, refresh: refetchSections } = await useFetch(`/api/sections/${plantData.value._id}`);
	const sections = computed(() => sectionData.value || []);
	console.log(plantData.value);
	const sectionInput = ref('');
	const postSection = async () => {
		if (sectionInput.value.trim()) {
			await axios.post('/api/sections', {
				name: sectionInput.value,
				plant: plantData.value?._id,
			});
			sectionInput.value = '';
			refetchSections();
		}
	};
</script>

<template>
	<h1>This is the {{ activePlant.name }} Plant Overview Page</h1>

	<NuxtLink v-for="section in sections" :to="`/${plant}/${section.name}`" :key="section.id">
		<button>
			<h3>{{ section.name }}</h3>
		</button>
	</NuxtLink>

	<div id="add-section-button">
		<input type="text" v-model="sectionInput" />
		<button @click="postSection">Submit</button>
	</div>
</template>

<style>
	#add-section-button {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
