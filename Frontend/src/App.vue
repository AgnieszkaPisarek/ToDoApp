<script setup lang="ts">
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoEyeOutline } from 'oh-vue-icons/icons'

const encouragement = 'Manage your tasks and stay productive...'
// addIcons(IoEyeOutline)
// const app = createApp(App)
// app.component('v-icon', OhVueIcon)
// app.mount('#app')
</script>

<template>
  <main class="App">
    <section class="greeting">
      <RandomText />
      <div class="encouragement">{{ encouragement }}</div>
      <div class="tasksField">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>

      <CreateTask />
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
.tasksField {
  height: 500px;
  width: auto;
  overflow: auto;
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
