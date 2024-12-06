<script setup lang="ts">
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoEyeOutline } from 'oh-vue-icons/icons'
import { ref } from 'vue'
import App from '@/App.vue'

const encouragement = 'Manage your tasks and stay productive...'
const tasks = ref(['task1', 'task2', 'task3', 'task4'])
// addIcons(IoEyeOutline)
// const app = createApp(App)
// app.component('v-icon', OhVueIcon)
// app.mount('#app')
const handleDeleteTask = (index: number) => {
  console.log(index)
  tasks.value.splice(index, 1)
}

const handleAddTask = (task: string) => {
  console.log(task)
  tasks.value.push('task' + tasks.value.length)
}
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
        @deleteTaskEvent="handleDeleteTask"
      >
      </Task>
      <CreateTask @addTaskEvent="handleAddTask" />
      <v-icon name="IoEyeOutline" />
      <div class="completed">Completed 0 of 4</div>
    </section>
  </main>
</template>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.encouragement {
  font-size: 18px;
}

.completed {
  margin-top: 5px;
  margin-left: 10px;
  color: #494955;
}
</style>
