package klosebrothers.ToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public void getAllTasks() {
    }

    public void deleteTask() {
    }

    public void addTask() {
    }

    public void editTask() {
    }

}
