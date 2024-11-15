<script setup lang="ts"></script>

<template>
  <section class="task">
    <div class="task-container">
      <button class="checkButton" @click="handleClick"></button>
      <input class="thingToDo" type="text" v-model="input" />
    </div>
  </section>
</template>

<style scoped>
.task-container {
  margin-top: 100px;
  width: 451px;
  height: 36px;
  gap: 10px;
  border-radius: 12px;
  background: #e6e6e6;
  padding: 10px;
  border: 0 solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}
.checkButton {
  width: 18px;
  height: 18px;
  background-color: #ededed;
  border: 0 solid #ccc;
  border-radius: 6px;
}

.thingToDo {
  font-size: 16px;
  font-weight: 500;
  color: #494955;
}
</style>
