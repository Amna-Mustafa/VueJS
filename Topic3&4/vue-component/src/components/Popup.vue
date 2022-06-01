<template>
    <div>
        <h2>This is popup</h2>
        <input type="text" v-model="name" />
        <button @click="$emit('close', name)">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        // emits: ['close'],

        // event validation only show in console
        emits: {
            close: (name) => {
                if(!name) {
                    return false
                } else {
                    return true
                }
            }
        },
        data(){
            return {
                name: '',
            }
        }
    }
</script>

<style scoped>

</style>