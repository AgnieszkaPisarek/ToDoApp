<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { computed, ref } from 'vue'
import dayjs from "dayjs";

const encouragement = 'Manage your tasks and stay productive...'
type Task = {
  index: number,
  task: string,
  date: string,
  completed: boolean
}
const tasks = ref<Task[]>([])
const bla
const completed = computed(() => {
  return tasks.value.filter((task) => task.completed).length;
});

const handleDeleteTask = (index: number) => {
  tasks.value = tasks.value.filter((value) => value.index !== index)
}

const handleStateOfTheTask = (index: number) => {
  const task = tasks.value.find((value) => value.index === index)
  if (task) {
    task.completed = !task.completed
  }
}

const getDate = () => {
  let date = dayjs(new Date());
  return date.format("YYYY-MM-DD")
}

const handleChangeOfTheDescription = (index: number, description: string) =>  {
  const task = tasks.value.find((task) => task.index === index)
  if (task) {
    task.task = description
  }
}

const handleChangeOfTheDate = (index: number, date: string) =>  {
  const task = tasks.value.find((task) => task.index === index)
  if (task) {
    task.date = date
  }
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
  <main class="frame">
    <ProgressBar :completedStatus="completed" :numberOfTasks="tasks.length"/>
    <div class="app">
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
        @changeTaskDescription="handleChangeOfTheDescription"
        @changeDate="handleChangeOfTheDate"
      />
    </div>
    <CreateTask @addTaskEvent="handleAddTask" />
    <div class="completed">
      <Icon icon="ic:sharp-remove-red-eye" class="icon" color="#494955" />
      <div class="completedText">
        Completed
        {{ completed }} of
        {{ tasks.length }}
      </div>
    </div>
    </div>
  </main>
</template>

<style scoped>
.frame {
  overflow: hidden;
  margin: 50px auto auto;
  height: 950px;
  width: 1050px;
  border: 0 solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.app  {
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 50px 135px;
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
  justify-content: left;
}
.completedText {
  margin-top: 5px;
  margin-left: 10px;
  color: #494955;
}
</style>
