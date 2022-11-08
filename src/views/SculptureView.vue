<template>
    <div>HOLLA</div>
    <span>aaa aaa {{ name }}</span>
</template>

<script>

export default {
    name: 'SculptureView',
    props: {
        name: {type: String, required: true}
    },
    computed: {
        /*
        sculptureName() {
            return this.$route.params.name;
        }
        */
    }
    
}

</script>
