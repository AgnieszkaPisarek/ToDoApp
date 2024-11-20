<script>
import RandomText from './components/RandomText.vue'
import CreateTask from './components/CreateTask.vue'
import Task from './components/Task.vue'
export default {
  name: 'App',
  components: { Task, RandomText, CreateTask },
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
      <Task />
    </section>

    <section>
      <CreateTask />
    </section>
  </main>
</template>

<style scoped></style>
