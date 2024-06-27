<script setup>
	import axios from 'axios';
	const { data: response, refresh: refetchPlants } = await useFetch('/api/plants');
	const plants = computed(() => response.value || 'Loading...');

	const plantInput = ref('');

	const postPlant = async () => {
		if (plantInput.value.trim()) {
			await axios.post('/api/plants', {
				name: plantInput.value,
			});
			plantInput.value = '';
			refetchPlants();
		}
	};
</script>

<template>
	<div class="plant-box">
		<NuxtLink v-for="plant in plants" :to="`/${plant.name}`" :key="plant.id">
			<button>
				<h3>{{ plant.name }}</h3>
			</button>
		</NuxtLink>

		<div id="add-plant-button">
			<input type="text" v-model="plantInput" />
			<button @click="postPlant">Submit</button>
		</div>
	</div>
</template>

<style>
	.plant-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		& a {
			text-decoration: none;
			margin: 10px;

			& button {
				min-width: 28vw;
				height: 35vh;
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
					width: 100%;
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
		& #add-plant-button {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
</style>
