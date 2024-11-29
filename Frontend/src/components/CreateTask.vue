<script setup lang="ts">
import { ref, onMounted } from 'vue'

const createNewTaskText = ref('Write a new task')
const input = ref('')
const isFocused = ref(false)
const clearPlaceholder = () => {
  const container = document.getElementById('create-task')
  if (container) {
    container.classList.add('active')
  }
  createNewTaskText.value = ''
  isFocused.value = true
}
const restorePlaceholder = () => {
  const container = document.getElementById('create-task')
  isFocused.value = false
  if (input.value === '') {
    createNewTaskText.value = 'Write a new task'
  }
  if (container) {
    container.classList.remove('active') // Remove 'active' class when not focused
  }
}

onMounted(() => {})

const handleClick = () => {}
</script>
<template>
  <section class="create-task">
    <button
      v-if="isFocused"
      class="checkButton"
      @click="handleClick"
      :placeholder="createNewTaskText"
    ></button>
    <input
      type="text"
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
.create-task.active {
  background: #ffffff;
}

.create-task input::placeholder {
  font-size: 16px;
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
  width: 550px;
  height: 20px;
  gap: 0;
  border-radius: 12px;
  background: #ededed;
  padding: 10px;
  border: 0 solid #ccc;
}

.create-task {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  width: 780px;
  margin-left: 5px;
  margin-right: 5px;
  height: 50px;
  border-radius: 12px;
  background: #ededed;
  padding: 10px;
  border: 0 solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.addTaskButton {
  height: 30px;
  width: 100px;
  font-size: 16px;
  border: 0 solid #ccc;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: pointer;
}

.checkButton {
  width: 25px;
  height: 25px;
  background-color: #ededed;
  border: 0 solid #ccc;
  border-radius: 6px;
  z-index: 20;
}
</style>
