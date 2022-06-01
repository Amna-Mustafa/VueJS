<script>
import BlogPost from './components/BlogPost.vue'
import Greet from './components/Greet.vue'
import Popup from './components/Popup.vue'
import Input from './components/Input.vue'
  
export default {
  components: {
    BlogPost, 
    Greet,
    Popup,
    Input
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' }
      ],
      postFontSize: 1,
      showPopup: false,
      name: 'Javascript',
      title: ''
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false
      console.log('name', name);
    }
  }
}
</script>

<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></BlogPost>
  </div>
  <Greet name="VueJS" />
  <Greet name="NodeJS" />
  <Greet name="ExpressJS" />

  <!-- Dynamic props-->
  <Greet :name="name" />

  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup" />
  <br>
  <br>
  <br>
  <br>

  <Input v-model:title="title" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
