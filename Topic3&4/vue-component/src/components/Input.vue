<script>
export default {
  props: ['title'],
  emits: ['update:title']
}
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>

<style scoped>
input[type=text] {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

</style>
