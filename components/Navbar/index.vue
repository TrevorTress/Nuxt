<script setup>
import NavButtons from './NavButtons/index.vue';
const active = useState('active', () => false);
const setActive = (value) => (active.value = value);

const route = useRoute();
const { plant } = route.params;
const { data: plantData, isFetching: isFetchingPlantData } = await useFetch(`/api/plant/${plant}`);
const activePlant = computed(() => plantData.value || {});

const { data: sectionData, refresh: refetchSections } = await useFetch(`/api/sections/${plantData.value?._id}`);
console.log(sectionData.value);
const sections = computed(() => sectionData.value || []);
const sectionInput = ref('');
</script>

<template>
	<nav class="navbar" :style="{ left: active ? '0' : '-20vw' }">
		<button id="toggle" @mousedown="setActive(!active)">
			<Icon name="i-heroicons-arrow-left-start-on-rectangle-16-solid" />
		</button>

		<NavButtons :plant="plant" :sections="sections" />
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
	gap: .25rem;
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
