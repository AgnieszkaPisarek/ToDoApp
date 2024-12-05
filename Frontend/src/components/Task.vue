<script setup lang="ts">
import { ref } from 'vue'
import OptionsMenu from '@/components/OptionsMenu.vue'
const input = ref('')
const isChecked = ref(false)
const task = ref<HTMLInputElement | null>(null)

const checkButton = document.querySelector('.checkButton')
if (checkButton) {
  checkButton.addEventListener('click', () => {
    checkButton.classList.add('taskDoneButton')
  })
}

function clickCheck() {
  isChecked.value = !isChecked.value;
  if(isChecked.value && task.value) {
    task.value.style.textDecoration = "line-through";
  } else if(task.value) {
    task.value.style.textDecoration = "none";
  }
}

</script>

<template>
  <section class="task">
    <div class="task-container">
      <input id="checkButton" type="checkbox" @click="clickCheck"></input>
      <input class="thingToDo" type="text" v-model="input" ref="task"/>
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

#checkButton {
  accent-color: #494955;
  width: 25px;
  height: 25px;
  background-color: #ededed;
  border: 0 solid #ccc;
  z-index: 20;
  cursor: pointer;
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
  text-decoration: none;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}
</style>
