<script setup lang="ts">
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoEyeOutline } from 'oh-vue-icons/icons'
import { ref } from 'vue'
import App from '@/App.vue'

const encouragement = 'Manage your tasks and stay productive...'

const tasks = ref([{ index: 0, task: 'wyjsc z psem' }])
// addIcons(IoEyeOutline)
// const app = createApp(App)
// app.component('v-icon', OhVueIcon)
// app.mount('#app')
const handleDeleteTask = (index: number) => {
  console.log(index)
  tasks.value.splice(index, 1)
  console.log(tasks)
}

const handleAddTask = (task: string) => {
  tasks.value.push({ index: tasks.value.length, task: task })
}
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
      <Task
        v-for="(task, index) in tasks"
        :task="task.task"
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
