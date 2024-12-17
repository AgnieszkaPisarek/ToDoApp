<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import { ref } from 'vue'

const encouragement = 'Manage your tasks and stay productive...'
const tasks = ref([
  {
    index: 0,
    task: 'Take a dog for a walk',
    date: '2024-12-12',
    completed: false,
  },
])

const handleDeleteTask = (index: number) => {
  tasks.value = tasks.value.filter((value) => value.index !== index)
}

const handleStateOfTheTask = (index: number) => {
  const task = tasks.value.find((value) => value.index === index)
  if (task) {
    task.completed = !task.completed
    task.date = getDate()
  }
}

const getDate = () => {
  const currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() + 1
  let day = currentDate.getDate()

  let formattedDay
  if (day < 10) {
    formattedDay = ('0' + day).toString()
  } else {
    formattedDay = day.toString()
  }
  return (year + '-' + month + '-' + formattedDay).toString()
}

const handleAddTask = (task: string) => {
  const currentDateInProperFormat = getDate()
  tasks.value.push({
    index: tasks.value.length,
    task: task,
    date: currentDateInProperFormat,
    completed: false,
  })
}
</script>

<template>
  <main class="app">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
    </section>
    <div class="tasksField">
      <Task
        v-model="task.task"
        v-for="task in tasks"
        :task="task.task"
        :index="task.index"
        :date="task.date"
        :completed="task.completed"
        @deleteTaskEvent="handleDeleteTask"
        @markAsCompleteEvent="handleStateOfTheTask"
      />
    </div>
    <CreateTask @addTaskEvent="handleAddTask" />
    <div class="completed">
      <Icon icon="ic:sharp-remove-red-eye" class="icon" color="#494955" />
      <div class="completedText">
        Completed
        {{ tasks.filter((task) => task.completed === true).length }} of
        {{ tasks.length }}
      </div>
    </div>
  </main>
</template>

<style scoped>
.app {
  margin: 50px auto auto;
  box-sizing: border-box;
  height: 900px;
  width: 1000px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0 solid #ccc;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.icon {
  margin-top: 3px;
}
.encouragement {
  font-size: 18px;
}

.tasksField {
  height: 600px;
  width: 900px;
  overflow: auto;
}

.completed {
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.completedText {
  margin-top: 5px;
  margin-left: 10px;
  color: #494955;
}
</style>
