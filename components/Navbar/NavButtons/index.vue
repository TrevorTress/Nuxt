<script setup lang="ts">
import AddPage from './AddPage.vue';
const props = defineProps({
	plant: {
		type: [String, Array],
		required: true,
	},
	sections: {
		type: Array as PropType<SectionData[]>,
		default: () => [],
	},
});

const NavItems = computed(() =>
	props.sections.map((section) => ({
		label: section.name,
		slot: 'ul-test',
		_id: section._id,
		section_name: section.name,
		pages: section.pages,
	}))
);

const setActive = inject('setActive');
</script>

<template>
	<UAccordion :items="NavItems">
		<template #ul-test="{ item }">
			<ul>
				<NuxtLink v-for="page in item.pages" :to="`/${props.plant}/${item.section_name}/${page.name}`"
					:key="page.id" @click="setActive(false)">
					<li>
						{{ page.name }}
					</li>
				</NuxtLink>
				<AddPage :section_id="item._id" />
			</ul>
		</template>

	</UAccordion>
</template>

<style scoped>
& a {
	width: 100%;

	& button {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem 0 !important;

		& svg {
			width: 60%;
			height: auto;
		}
	}
}
</style>
