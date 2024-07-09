<script setup lang='ts'>
import axios from 'axios';
import NavButtons from './NavButtons/index.vue';
const active = useState('active', () => false);
const setActive = (value: boolean) => (active.value = value);
provide('setActive', setActive);

const route = useRoute();
const { plant } = route.params;
const { data: plantData } = await useFetch<PlantData>(`/api/plant/${plant}`);

const { data: sectionData, refresh } = await useFetch<SectionData[]>(`/api/sections/${plantData.value?._id}`);
provide('refresh', refresh);
const sections = useState<SectionData[]>('sections', () => sectionData.value || []);
const setSections = (value: SectionData[]) => (sections.value = value);
watch(() => sectionData, (newValue) => {
	newValue.value && setSections(newValue.value);
}, { deep: true });


const sectionInput = ref('');
const postSection = async () => {
	if (sectionInput.value.trim() && plantData.value?._id) {
		await axios.post('/api/sections', {
			plant_id: plantData.value._id,
			name: sectionInput.value,
			icon: "ph:traffic-cone"
		});
		sectionInput.value = '';

		refresh();
	}
};
</script>

<template>
	<nav class="navbar" :style="{ left: active ? '0' : '-20vw' }">
		<button id="toggle" @mousedown="setActive(!active)">
			<Icon name="i-heroicons-arrow-left-start-on-rectangle-16-solid" />
		</button>

		<NavButtons :plant="plant" :sections="sections" />
		<input v-model="sectionInput" placeholder="Type Section" />
		<UButton @click="postSection">Add Section</UButton>
	</nav>
</template>

<style>
nav {
	position: absolute;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	gap: 0.25rem;
	top: 10vh;
	height: 80vh;
	width: 20vw;
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
