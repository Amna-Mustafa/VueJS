<template>
  <div class="container">
    <div class="content">
      <h1>My App</h1>
      <p>
        This is an example of how you might use Vue Teleport. I think it is a
        pretty neat API that is yet another awesome escape hatch that Vue
        provides for practical reasons. Sometimes you just need to render
        something completely outside the Vue component tree.
      </p>
      <button @click="showModal = true">Show Modal</button>
      <teleport to="#modal-root">
        <Modal v-show="showModal" @close="showModal = false">
          This is the secret modal message!
        </Modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 400px;
  position: relative;
}
</style>
