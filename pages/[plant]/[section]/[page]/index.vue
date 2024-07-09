<script setup lang="ts">
import axios from 'axios';

const route = useRoute();
const { plant, section, page } = route.params;

const ensureString = (param: string | string[]) => (Array.isArray(param) ? param[0] : param);
// const plantStr = ensureString(plant);
// const sectionStr = ensureString(section);
const pageStr = ensureString(page);

const { data: pageData } = await useFetch<PageData>(`/api/page/${page}`);
const tabs = computed(() => pageData.value?.tabs);

console.log('pageData', pageData.value?.tabs);


const finalTabs = [
	{
		label: 'Testing Longer Again even longer this time!',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 2',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 3',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 4',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 5',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 6',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 7',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 8',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 9',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Testing Longer Again 10',
		content: '',
		slot: 'tab',
	},
	{
		label: 'Add Tab',
		icon: true,
		content: '',
		slot: 'tab',
	},
];

const TabItems = computed(() => {
	const TabMap = tabs.value?.map((tab) => ({
		label: tab.name,
		icon: false,
		content: '',
		slot: 'tab',
	}))

	TabMap?.push({
		label: 'Add Tab',
		icon: true,
		content: '',
		slot: 'tab',
	});

	return TabMap;
}
);

const postTab = async () => {
	if (pageData.value?._id) {
		await axios.post('/api/tab', {
			page_id: pageData.value?._id,
			name: 'Testing Post',
		});


		// refresh();
	}
};

</script>

<template>
	<section class="content">

		<div v-if="page">
			<Retreat jump='' to='Previous' />

			<div :class="`${section[0].toLowerCase()} tabs`">
				<h1 id="content-header">{{ page }}</h1>
				<UTabs :items="TabItems" @change="onChange" id="tabs">
					<template #default="{ item, index, selected }">
						<div class="truncate" :class="{ 'active-tab-label': selected, 'icon-tab': item.icon }">
							<span class="truncate">{{ item.label }}</span>

							<Icon v-if="item.icon" name="ph:plus" size="1.5rem" @click="postTab" />
						</div>
					</template>
					<template #tab="{ item }">
						<div class="tab-content">

							<Left :w=50>
								<h1>{{ item.label?.toUpperCase() || '' }}</h1>
								<p>Hello from paragraph</p>
							</Left>
							<Right :w=50>


							</Right>
						</div>
						<!-- <component :is="getComponent(item.content)"></component> -->
					</template>
				</UTabs>
			</div>

			<Advance jump='' to='Next' />
		</div>
	</section>
</template>

<style>
.tab-content {
	margin: 0 auto;
	width: 98%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 1rem;

}

.left {
	height: 64vh;

	& h1 {
		text-align: center;
		font-weight: 700;
	}

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 1rem;
		gap: 2rem;

		& button {
			position: relative;
			display: flex;
		}
	}
}

.right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 64vh;

	span {
		position: relative;
		display: flex;

		&:hover {
			svg {
				color: red;
				cursor: pointer;
			}

		}
	}
}

.content {
	position: relative;
	top: 1%;
	background: white;
	width: 95vw;
	height: 76vh;
	color: black;
	border-radius: 1rem;
	box-shadow: inset 0 0 0.3rem 0.3rem #000000b4;

	.inline-grid {
		border-radius: 0;
	}

	& button {
		padding: 0;
	}

	#content-header {
		color: white;
		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
		background: #1f2937;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		padding: 0.5rem;
	}

	.active-tab-label {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.25rem;
		transition: all 0.5s ease-in-out;
		background-color: #dcc032;
		width: 95%;
		height: 75%;
		color: white;

		&.icon-tab {
			background-color: green;
			color: white;

		}
	}

	.icon-tab {
		display: flex;
		justify-content: center;
		align-items: center;

		span {
			margin: 0 1rem;
		}

		svg {}
	}
}
</style>
