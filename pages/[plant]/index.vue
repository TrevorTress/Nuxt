<script setup>
import axios from 'axios';
// import ColorPicker from '../../color-picker';
const route = useRoute();
const { plant } = route.params;
const { data: plantData, isFetching: isFetchingPlantData } = await useFetch(`/api/plant/${plant}`);
const activePlant = computed(() => plantData.value || {});

const { data: sectionData, refresh: refetchSections } = await useFetch(`/api/sections/${plantData.value._id}`);
const sections = computed(() => sectionData.value || []);
const sectionInput = ref('');
const postSection = async () => {
	if (sectionInput.value.trim()) {
		await axios.post('/api/sections', {
			name: sectionInput.value,
			icon: iconInput.value,
			plant: plantData.value?._id,
		});
		sectionInput.value = '';
		iconInput.value = '';
		refetchSections();
	}
};


const iconInput = ref('');
const setIconInput = (iconName) => {
	iconInput.value = iconName;
	isOpen.value = false; // Optionally close the modal after selection
};
const IconList = [
	'ph:traffic-cone',
	'ph:wrench-bold',
	'ph:lightbulb',
	'ph:thermometer',
	'ph:leaf',
	'ph:lightning',
	'ph:wind',
	'ph:cloud-sun',
	'ph:cloud-moon',
	'ph:cloud-rain',
	'ph:cloud-snow',
	'ph:cloud-lightning',
	'ph:cloud-fog',
]
const isOpen = ref(false);

// const pureColor = ref < ColorInputWithoutInstance > ("red");
// const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");
</script>

<template>
	<h1>This is the {{ activePlant.name }} Plant Overview Page</h1>

	<NuxtLink v-for="section in sections" :to="`/${plant}/${section.name}`" :key="section.id">
		<button>
			<Icon :name="section.icon" />
			<h3>{{ section.name }}</h3>
		</button>
	</NuxtLink>

	<div id="add-section-button">
		<span>
			<input type="text" v-model="sectionInput" />
			<UButton label="Select Icon..." @click="isOpen = !isOpen">
				<span v-if="!iconInput">Select</span>
				<Icon v-if="iconInput" :name="iconInput" size="2rem" />

			</UButton>
			<UButton v-if="iconInput" @click="">
				<Icon name="ph:palette-light" size="2rem" />
			</UButton>

			<div class="modal" v-if="isOpen">
				<div class="p-4">
					<UButton v-for="icon in IconList" :key="icon">
						<Icon :name="icon" size="2rem" @click="setIconInput(icon)" />
					</UButton>
				</div>
			</div>
		</span>
		<button @click="postSection">Submit</button>
		<!-- <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor" /> -->
	</div>
</template>

<style scoped>
#add-section-button {
	position: absolute;
	top: 3%;
	right: 2%;

	display: flex;
	flex-direction: column;

	& input {
		margin: 0 1rem;
		padding: .5rem;
		border-radius: 1rem;
	}
}

.modal {
	position: absolute;
	top: 64%;
	right: 0%;

	display: flex;
	justify-content: center;
	width: 18vw;
	background: #000000d2;
	border-radius: 1rem;

	& button {
		margin: 0.25rem;
	}
}

& a {
	text-decoration: none;
	margin: 10px;

	& button {
		min-width: 10vw;
		height: 20vh;
		padding: 0;
		margin: auto;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: end;
		transition: all 0.3s ease-in-out;
		background: #fff;

		& img {
			width: 80%;
			margin: auto;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}

		& svg {
			color: #05056a;
			width: 50%;
			height: auto;
			margin: auto;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}

		& h3 {
			width: 100%;
			padding: 10px;
			margin: 0 auto;
			border-bottom-left-radius: 0.8rem;
			border-bottom-right-radius: 0.8rem;
			background: #05056a;
			color: #fff;
		}

		&:hover {
			transform: scale(1.01);
		}
	}

	@media screen and (max-width: 650px) {
		& button {
			width: 100%;
			height: 50%;
		}
	}
}
</style>
