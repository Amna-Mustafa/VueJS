<template>
  <!-- Slots -->
  <Card></Card>
  <Card>Card Content</Card>
  <Card><img src="https://picsum.photos/200" /></Card>

  <!-- named slots -->
  <Card>
    <template v-slot:header>
      <h3>Page Title</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
      <p>A paragraph for the main content.</p>
    </template>
    <template v-slot:footer>
      <h4>Page Footer</h4>
    </template>
  </Card>

  <!-- Scoped SLot-->
  <ScopedSlot v-slot="slotProps">
  	{{ slotProps.text }} 
  </ScopedSlot>

  <!-- renderless component -->
  <MouseTracker v-slot="{ x, y }">
  	Mouse is at: {{ x }}, {{ y }}
	</MouseTracker>
</template>

<script>
import Card from './components/Card.vue'
import ScopedSlot from './components/ScopedSlot.vue'
import MouseTracker from './components/MouseTracker.vue'

export default {
  components: {
    Card,
    ScopedSlot,
    MouseTracker
  },
  data() {
    return {
      title: ''
    }
  },
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
