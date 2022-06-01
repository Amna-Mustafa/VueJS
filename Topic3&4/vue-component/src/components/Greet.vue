<template>
    <div>
        <h2>Hello {{ name }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Greet',
        props: [
            'name'
        ]
    }
</script>

<style scoped>

</style>