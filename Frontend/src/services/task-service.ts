import axios from 'axios'

const jsonServerURL = 'http://localhost:3000/tasks'

type Task = {
  id: string
  description: string
  date: string
  completed: boolean
}

export async function getTasks() : Promise<Task[]> {
  try {
    const respond = await axios.get<Task[]>(jsonServerURL);
    console.log(respond.data)
    return respond.data
  } catch (error) {
    console.error(error);
    return []
  }
}

export async function addTask(task : Task) {
  try {
    await axios.post(jsonServerURL, JSON.stringify(task), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
  }
}


