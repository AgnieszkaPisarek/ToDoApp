package klosebrothers.ToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<TaskEntity> getAllTasks() {
        return taskRepository.findAll();
    }

    public void deleteTask(TaskEntity task) {
        taskRepository.delete(task);
    }

    public void addTask(TaskEntity task) {
        taskRepository.save(task);
    }

    public void editTask(TaskEntity task) {
        taskRepository.save(task);
    }

}
