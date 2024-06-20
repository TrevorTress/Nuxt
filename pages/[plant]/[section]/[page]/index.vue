<script setup lang="ts">
	import { PLANT_DATA } from '../../../../-PLANT-DATA-';
	import { PAGE_DATA } from '../../../../-PAGE-DATA-';
	const route = useRoute();
	const { plant, section, page } = route.params;

	const ensureString = (param: string | string[]) => (Array.isArray(param) ? param[0] : param);
	const plantStr = ensureString(plant);
	const sectionStr = ensureString(section);
	const pageStr = ensureString(page);

	const PlantData = PLANT_DATA[plantStr] || [];
	const SectionData = PlantData.filter((sectionItem: SectionData) => sectionItem.section_name === section);

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

	const PageData = getPages(SectionData)[pageStr];
	const { retreat, advance } = PageData || { retreat: {}, advance: {} };

	const tabs =
		PageData?.tabs?.map((tab) => {
			const tabContents = PAGE_DATA[pageStr] || {};
			const component = tabContents[tab];
			return {
				tab_name: tab,
				component: component,
			};
		}) || [];

	const finalTabs = tabs.map((tab) => {
		return {
			label: tab.tab_name,
			content: tab.component,
			slot: 'tab',
		};
	});

	function getComponent(content: any) {
		return content;
	}
</script>

<template>
	<section class="content">
		<div v-if="PageData">
			<Retreat
				:jump="retreat?.jump"
				:to="retreat?.to"
			/>

			<div :class="`${sectionStr.toLowerCase()} tabs`">
				<UTabs :items="finalTabs">
					<template #tab="{ item }">
						<component :is="getComponent(item.content)"></component>
					</template>
				</UTabs>
			</div>

			<Advance
				:jump="advance?.jump"
				:to="advance?.to"
			/>
		</div>
	</section>
</template>

<style>
	.content {
		background: white;
		width: 95vw;
		height: 70vh;
		color: black;
		border-radius: 1rem;
		box-shadow: inset 0 0 0.3rem 0.3rem #000000b4;

		.inline-grid {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		h1 {
			color: black;
		}
	}
</style>
