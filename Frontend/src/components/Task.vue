<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import OptionsMenu from '@/components/OptionsMenu.vue'
const input = defineModel()
const isChecked = ref(false)

const task = ref<HTMLInputElement | null>(null)

const props = defineProps({
  task: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
})
const date = ref(props.date)
isChecked.value = props.completed
const emit = defineEmits<{
  (event: 'deleteTaskEvent', index: number): void
  (event: 'markAsCompleteEvent', index: number): void
  (event: 'changeTaskDescription', index: number, description: string): void
  (event: 'changeDate', index: number, date: string): void
}>()

const handleDeleteClick = () => {
  emit('deleteTaskEvent', props.index)
}

const handleChangeOfTaskDescription = () => {
  emit('changeTaskDescription', props.index, input.value as string)
}

const handleChangeOfDate = () => {
  emit('changeDate', props.index, date.value)
}

const checkButton = document.querySelector('.createTaskInput')
if (checkButton) {
  checkButton.addEventListener('click', () => {
    checkButton.classList.add('taskDoneButton')
  })
}

function clickCheck() {
  isChecked.value = !isChecked.value
  emit('markAsCompleteEvent', props.index)
}
</script>

<template>
  <section class="task">
    <div class="task-container">
      <input id="checkButton" type="checkbox" v-model="isChecked" @click="clickCheck" />
      <input class="thingToDo" type="text" v-model="input" ref="task" @input="handleChangeOfTaskDescription" :style="{ textDecoration: isChecked ? 'line-through' : 'none' }" />
      <input class="date" type="date" @change="handleChangeOfDate" v-model="date"/>
      <OptionsMenu :taskIndex="index" @handleDeleteEvent="handleDeleteClick" />
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
  height: 52px;
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
  font-size: 16px;
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
