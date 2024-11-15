<script>
import RandomText from './components/RandomText.vue'

export default {
  name: 'App',
  components: { RandomText },
  data() {
    return {
      encouragement: 'Manage your tasks and stay productive...',
    }
  },
}
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
    </section>
  </main>
</template>

<style scoped></style>
