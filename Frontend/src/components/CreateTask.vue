<script setup lang="ts">
import { ref, onMounted } from 'vue'

const createNewTaskText = ref('Write a new task')
const input = ref('')
const isFocused = ref(false)
const clearPlaceholder = () => {
  createNewTaskText.value = ''
  isFocused.value = true
}

const restorePlaceholder = () => {
  isFocused.value = false
  if (input.value === '') {
    createNewTaskText.value = 'Write a new task'
  }
}

onMounted(() => {})

const handleClick = () => {}
</script>
<template>
  <section class="create-task">
    <button v-if="isFocused" class="checkButton" @click="handleClick"></button>
    <input
      type="text"
      :placeholder="createNewTaskText"
      v-model="input"
      @focus="clearPlaceholder"
      @blur="restorePlaceholder"
    />
    <button v-if="isFocused" class="addTaskButton" @click="handleClick">
      Add Task
    </button>
  </section>
</template>

<style scoped>
.create-task input::placeholder {
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #494955;
}

.create-task input:focus {
  background: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.create-task input {
  width: 451px;
  height: 36px;
  position: absolute;
  top: 576px;
  left: 286px;
  gap: 0;
  border-radius: 12px;
  background: #e6e6e6;
  padding: 10px;
  border: 0 solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.addTaskButton {
  width: 71px;
  height: 23px;
  position: absolute;
  top: 592px;
  left: 670px;
  border: 0 solid #ccc;
  border-radius: 6px;
  background-color: #ededed;
}

.checkButton {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 594px;
  left: 290px;
  background-color: #ededed;
  border: 0 solid #ccc;
  border-radius: 6px;
  z-index: 20;
}
</style>
