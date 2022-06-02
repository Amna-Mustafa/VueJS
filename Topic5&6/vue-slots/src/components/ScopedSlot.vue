<script>
export default {
  data() {
    return {
      greetingMessage: 'Hello Vue 3'
    }
  }
}
</script>

<template>
  <div>
  	<slot :text="greetingMessage"></slot>
	</div>
</template>