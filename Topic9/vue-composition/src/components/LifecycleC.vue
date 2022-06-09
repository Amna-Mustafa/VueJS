<template>
    <div>Composition API Lifecycle Hooks</div>
    <div>
        <div>Life Cycle Hooks</div>
        <div>{{ state.name }}</div>
        <div>
            <button @click.prevent="state.name = 'Updated InvoZone'">
                Update Name
            </button>
        </div>
    </div>
</template>
<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
   reactive,
} from 'vue'
export default {
  name: 'LifecycleC',
  setup() {
      const state = reactive({
            name: 'InvoZone',
        });
    onBeforeMount(() => {
      console.log('LifeCycleC onBeforeMount()')
    })
    onMounted(() => {
      console.log('LifeCycleC onMounted()')
    })
    onBeforeUpdate(() => {
      console.log('LifeCycleC onBeforeUpdate()')
    })
    onUpdated(() => {
      console.log('LifeCycleC onUpdated()')
    })
    onBeforeUnmount(() => {
      console.log('LifeCycleC onBeforeUnmount()')
    })
    onUnmounted(() => {
      console.log('LifeCycleC onUnmounted()')
    })
    return { state };
  },
}
</script>

<style scoped>
</style>