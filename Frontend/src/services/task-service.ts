import axios from 'axios'

const jsonServerURL = 'http://localhost:3000/tasks'

type Task = {
  id: string
  description: string
  date: string
  completed: boolean
}

export async function getTasks(): Promise<Task[]> {
  try {
    const respond = await axios.get<Task[]>(jsonServerURL)
    console.log(respond.data)
    return respond.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function addTask(newTask: Task) {
  try {
    await axios.post(jsonServerURL, JSON.stringify(newTask), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export async function deleteTask(index: string) {
  try {
    const URLofTaskToBeDeleted = jsonServerURL + '/' + index
    await axios.delete(URLofTaskToBeDeleted)
  } catch (error) {
    console.error(error)
  }
}

export async function editTask(index: string, editedTask: Task) {
  try {
    const URLofTaskToBeEdited = jsonServerURL + '/' + index
    await axios.put(URLofTaskToBeEdited, JSON.stringify(editedTask), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
  }
}
