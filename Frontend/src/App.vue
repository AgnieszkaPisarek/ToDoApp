<script setup lang="ts">
import { Icon } from '@iconify/vue'
import RandomText from '@/components/RandomText.vue'
import Task from '@/components/TaskContainer.vue'
import CreateTask from '@/components/CreateTask.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { computed, onMounted, ref } from 'vue'
import JSConfetti from 'js-confetti'
import dayjs from 'dayjs'

const encouragement = 'Manage your tasks and stay productive...'
const jsonServerURL = 'http://localhost:3000/tasks'
type Task = {
  id: string
  description: string
  date: string
  completed: boolean
}
const tasks = ref<Task[]>([])

const confetti = new JSConfetti()
onMounted(async () => {
  try {
    const res = await fetch(jsonServerURL)
    tasks.value = await res.json()
  } catch (err) {
    console.log(err)
  }
  return { tasks }
})

const completed = computed(() => {
  const numberOfCompletedTask = tasks.value.filter(
    (task) => task.completed
  ).length
  if (
    numberOfCompletedTask === tasks.value.length &&
    numberOfCompletedTask !== 0
  ) {
    confetti.addConfetti()
  }
  return numberOfCompletedTask
})

const handleDeleteTask = async (index: string) => {
  tasks.value = tasks.value.filter((value) => value.id !== index)
  try {
    const taskToDeleteURL = jsonServerURL + '/' + index
    await fetch(taskToDeleteURL, {
      method: 'DELETE',
    })
  } catch (err) {
    console.log(err)
  }
}

const handleStateOfTheTask = async (index: string) => {
  const task = tasks.value.find((value) => value.id === index)
  if (task) {
    task.completed = !task.completed
  }
  try {
    const taskToDeleteURL = jsonServerURL + '/' + index
    await fetch(taskToDeleteURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
  } catch (err) {
    console.log(err)
  }
}

const getDate = () => {
  const date = dayjs(new Date())
  return date.format('YYYY-MM-DD')
}

const handleChangeOfTheDescription = async (
  index: string,
  description: string
) => {
  const task = tasks.value.find((task) => task.id === index)
  if (task) {
    task.description = description
  }
  try {
    const taskToDeleteURL = jsonServerURL + '/' + index
    await fetch(taskToDeleteURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
  } catch (err) {
    console.log(err)
  }
}

const handleChangeOfTheDate = async (index: string, date: string) => {
  const task = tasks.value.find((task) => task.id === index)
  if (task) {
    task.date = date
  }
  try {
    const taskToDeleteURL = jsonServerURL + '/' + index
    await fetch(taskToDeleteURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
  } catch (err) {
    console.log(err)
  }
}

const handleAddTask = async (task: string) => {
  const currentDateInProperFormat = getDate()
  tasks.value.push({
    id: (tasks.value.length + 1).toString(),
    description: task,
    date: currentDateInProperFormat,
    completed: false,
  })

  try {
    await fetch(jsonServerURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tasks.value[tasks.value.length - 1]),
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <main class="frame">
    <ProgressBar :completedStatus="completed" :numberOfTasks="tasks.length" />
    <div class="app">
      <section class="greeting">
        <RandomText />
        <div class="encouragement">{{ encouragement }}</div>
      </section>
      <div class="tasksField">
        <Task
          v-model="task.description"
          v-for="task in tasks"
          :key="task.id"
          :task="task.description"
          :index="task.id"
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

.app {
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
