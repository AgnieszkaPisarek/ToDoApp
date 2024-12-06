<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const popOverVisible = ref(false)
function onClickMenu() {
  popOverVisible.value = !popOverVisible.value
}

const emit = defineEmits<{
  (event: 'handleDeleteEvent'): void
}>()

function clickDelete() {
  popOverVisible.value = !popOverVisible.value
  emit('handleDeleteEvent')
}
</script>

<template>
  <div class="container">
    <div class="menu-sign" @click="onClickMenu">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="options-menu" v-if="popOverVisible" @click="clickDelete">
      <div class="delete">Delete task</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-items: center;
  position: relative;
}

.options-menu {
  position: absolute;
  top: -8px;
  left: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #ccc;
  z-index: 100;
}

.delete {
  font-family: 'Noto Sans', serif;
  font-size: 17px;
}

.options-menu:hover {
  background-color: #e6e6e6;
  cursor: pointer;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
  margin: 2px;
}

.menu-sign {
  cursor: pointer;
  position: relative;
}
</style>
