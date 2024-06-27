<script setup>
import axios from 'axios';
const props = defineProps({
    section_id: { type: String, default: '' },
});
const { section_id } = props;
const addActive = useState('addActive', () => false);
const setAddActive = (value) => (addActive.value = value);

const pageInput = ref('');

const postPage = async () => {
    console.log('posting page w:', pageInput.value, 'section_id:', section_id);
    if (pageInput.value.trim()) {
        await axios.post('/api/pages', {
            name: pageInput.value,
            section: section_id,
        });
        pageInput.value = '';
    }
};
</script>

<template>
    <li class="add-page-line">
        <span v-if="!addActive" @mousedown="setAddActive(true)" class="inactive">

            Add Page
            <Icon name="ph:plus" />
        </span>
        <span v-if="addActive" class="active">
            <input v-model="pageInput" />
            <Icon name="ph:check" class="submit" @click="postPage" />
            <Icon name="ph:x" class="cancel" @mousedown="setAddActive(false)" />
        </span>
    </li>
</template>

<style scoped>
& .add-page-line {

    text-align: center;
    margin: .5rem 0;
    padding: .5rem;
    background: grey;
    border-radius: .75rem;

    .active {
        display: flex;
        justify-content: space-between;

        input {
            width: 80%;
            border-radius: .5rem;
            padding: .5rem;
            margin: 0 .5rem;
        }

        & svg {
            margin: 0 .25rem;
            width: 1.25vw;
            height: auto;

            &.submit:hover {
                color: green;
            }

            &.cancel:hover {
                color: red;
            }
        }
    }
}





&:hover {
    background: green;
}
</style>