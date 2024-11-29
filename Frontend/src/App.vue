<script setup lang="ts">
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'

const encouragement = 'Manage your tasks and stay productive...'
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
      <div class="tasksField">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>

      <CreateTask />
    </section>
  </main>
</template>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tasksField {
  height: 500px;
  width: auto;
  overflow: auto;
}
.encouragement {
  font-size: 18px;
}
</style>
