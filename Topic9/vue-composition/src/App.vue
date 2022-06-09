<template>
  <Data />
  <DemoOne />
  <DemoTwo />
  <Methods />
  <LifecyleO />
  <LifecycleC />

</template>


<script>
import Data from './components/Data.vue'
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
import Methods from './components/Methods.vue'
import LifecycleO from './components/LifecycleO.vue'
import LifecycleC from './components/LifecycleC.vue'



export default {
   name: 'App',
   components: {
     Data,
     DemoOne,
     DemoTwo,
     Methods,
     LifecycleC,
     LifecycleO
   }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
