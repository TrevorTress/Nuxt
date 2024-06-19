<script setup lang="ts">
	import { PLANT_DATA } from '../../../../-PLANT-DATA-';
	import { PAGE_DATA } from '../../../../-PAGE-DATA-';
	const route = useRoute();
	const { plant, section, page } = route.params;

	const PlantData = PLANT_DATA[plant] || [];
	const SectionData = PlantData.filter((sectionItem) => sectionItem.section_name === section);

	const getPages = (SectionData: SectionData[]) => {
		return SectionData.reduce((acc, section) => {
			section.pages.forEach((page) => {
				if ('subpages' in page && page.subpages) {
					page.subpages.forEach((subpage) => {
						acc[subpage.page_name] = {
							...subpage,
							retreat: subpage.retreat,
							advance: subpage.advance,
						};
					});
				} else {
					acc[page.page_name] = {
						...page,
						retreat: page.retreat,
						advance: page.advance,
					};
				}
			});
			return acc;
		}, {} as PagesData);
	};

	const PageData = getPages(SectionData)[page];
	const { retreat, advance } = PageData || { retreat: {}, advance: {} };

	console.log('Retreat', retreat, 'Advance', advance);

	const tabs =
		PageData?.tabs?.map((tab) => {
			const tabContents = PAGE_DATA[page] || PAGELESS_DATA[section] || {};
			const component = tabContents[tab];
			return {
				tab_name: tab,
				component: component,
			};
		}) || [];
</script>

<template>
	<section class="content">
		<div v-if="PageData">
			<Retreat
				:jump="retreat.jump"
				:to="retreat.to"
			/>

			<div :class="`${section.toLowerCase()} tabs`">
				<div
					v-for="tab in tabs"
					:key="tab.tab_name || ''"
					@click="setActiveKey(tab.tab_name)"
					:class="{ active: activeKey === tab.tab_name }"
				>
					{{ tab.tab_name }}
					<component :is="tab.component"></component>
				</div>
			</div>

			<Advance
				v-bind="advance"
				:jump="advance.jump"
				:to="advance.to"
			/>
		</div>
	</section>
</template>

<style>
	.content {
		background: white;
		width: 95vw;
		height: 70vh;
		padding: 1rem;
		border-radius: 1rem;

		& h1 {
			color: black;
		}
	}
</style>
