<script setup lang="ts">
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoEyeOutline } from 'oh-vue-icons/icons'
import { ref } from 'vue'
import App from '@/App.vue'

const encouragement = 'Manage your tasks and stay productive...'

const tasks = ref([
  { index: 0, task: 'Take a dog for a walk', date: '2024-12-12' },
])
// addIcons(IoEyeOutline)
// const app = createApp(App)
// app.component('v-icon', OhVueIcon)
// app.mount('#app')
const handleDeleteTask = (index: number) => {
  tasks.value = tasks.value.filter((value) => value.index !== index)
  console.log(tasks.value)
}

const handleAddTask = (task: string) => {
  tasks.value.push({ index: tasks.value.length, task: task, date: '' })
}
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
      <div class="tasksField">
        <Task
          v-model="task.task"
          v-for="task in tasks"
          :task="task.task"
          :index="task.index"
          :date="task.date"
          @deleteTaskEvent="handleDeleteTask"
        >
        </Task>
      </div>
      <CreateTask @addTaskEvent="handleAddTask" />
      <v-icon name="IoEyeOutline" />
      <div class="completed">Completed 0 of 4</div>
    </section>
  </main>
</template>

<style scoped>
.App {
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

.encouragement {
  font-size: 18px;
}

.tasksField {
  height: 600px;
  width: 900px;
  overflow: auto;
}

.completed {
  margin-top: 5px;
  margin-left: 10px;
  color: #494955;
}
</style>
