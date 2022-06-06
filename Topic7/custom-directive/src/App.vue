<template>
  <div id="app">
    <h2  v-size>Hello Vue 3</h2>
    <input v-focus />
  </div>
</template>



<script>
  const focus = {
  mounted: (el) => el.focus()
}

export default {
  directives: {
    // enables v-focus in template
    focus
  }
}
</script>



<style scoped>

</style>
