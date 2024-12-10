<script setup lang="ts">
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoEyeOutline } from 'oh-vue-icons/icons'
import { ref } from 'vue'
import App from '@/App.vue'

const encouragement = 'Manage your tasks and stay productive...'

const tasks = ref([{ index: 0, task: 'Take a dog for a walk' }])
// addIcons(IoEyeOutline)
// const app = createApp(App)
// app.component('v-icon', OhVueIcon)
// app.mount('#app')
const handleDeleteTask = (index: number) => {
  tasks.value.splice(index, 1)
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
      <div class="tasksField">
        <Task
          v-for="task in tasks"
          :task="task.task"
          :index="task.index"
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
