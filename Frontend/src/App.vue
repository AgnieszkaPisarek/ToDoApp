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
      <Task />
<!--      <CreateTask />-->
    </section>
  </main>
</template>

<style scoped>

</style>
