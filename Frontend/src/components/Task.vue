<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
const handleClick = () => {}
</script>

<template>
  <section class="task">
    <div class="task-container">
      <button class="checkButton" @click="handleClick"></button>
      <input class="thingToDo" type="text" v-model="input" />
    </div>
  </section>
</template>

<style scoped>

</style>
