<script setup lang="ts">
import { ref } from 'vue'
import OptionsMenu from '@/components/OptionsMenu.vue'
const input = ref('')
const isChecked = ref(false)
const checkButton = document.querySelector('.checkButton')

if (checkButton) {
  checkButton.addEventListener('click', () => {
    checkButton.classList.add('taskDoneButton')
  })
}

const handleClick = () => {
  isChecked.value = !isChecked.value
  const button = document.getElementById('checkButton')
  if (button) {
    button.style.background = '#ffffff'
  }
}
</script>

<template>
  <section class="task">
    <div class="task-container">
      <button class="checkButton"></button>

      <input class="thingToDo" type="text" v-model="input" />
      <input class="date" type="date" />
      <OptionsMenu />
    </div>
  </section>
</template>

<style scoped>
.date {
  gap: 0;
  border-radius: 12px;
  background: #ffffff;
  padding: 10px;
  border: 0 solid #ccc;
  font-size: 16px;
}

.task-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-right: 5px;
  margin-left: 5px;
  width: 780px;
  height: 50px;
  border-radius: 12px;
  background: #ffffff;
  padding: 10px;
  border: 0 solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.checkButton {
  width: 25px;
  height: 25px;
  background-color: #ededed;
  border: 0 solid #ccc;
  border-radius: 6px;
  z-index: 20;
}

.checkButton:hover {
  cursor: pointer;
}

.taskDoneButton {
  background: #494955;
}

.thingToDo {
  box-sizing: border-box;
  width: 550px;
  height: 35px;
  gap: 0;
  border-radius: 12px;
  background: #ffffff;
  padding: 10px;
  border: 0 solid #ccc;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}
</style>
