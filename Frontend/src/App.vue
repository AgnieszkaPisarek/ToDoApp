<script setup lang="ts">

import RandomText from '@/components/RandomText.vue'

const encouragement = 'Manage your tasks and stay productive...'
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
<!--      <Task />-->
<!--    </section>-->

<!--    <section>-->
<!--      <CreateTask />-->
    </section>
  </main>
</template>

<style scoped>

</style>
