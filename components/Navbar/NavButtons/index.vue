<script setup>
import AddPage from './AddPage.vue';
const props = defineProps({
    plant: { type: String, default: '' },
    sections: {
        type: Array, default: () => ([]),
    },
});
const { sections } = props;

const NavItems = computed(() => sections.map(section => ({
    label: section.name,
    slot: 'ul-test',
    _id: section._id,
    pages: section.pages,
})));
console.log('NavItems:', NavItems);

</script>

<template>
    <UAccordion :items="NavItems">
        <template #ul-test="{ item }">
            <ul>

                <NuxtLink v-for="page in item.pages" :to="`/`" :key="page.id">
                    <li>
                        test
                    </li>
                </NuxtLink>
                <AddPage :section_id="item._id" />
            </ul>
        </template>
        <!-- <UButton variant="solid">
            <Icon :name="section.icon" />
            <h3>{{ section.name }}</h3>
        </UButton> -->
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