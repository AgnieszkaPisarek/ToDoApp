package klosebrothers.ToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public record Task(int id, String description, String date, boolean completed) {}

    public List<Task> getAllTasks() {
        List<Task> recordTasks = new ArrayList<>();
        List<TaskEntity> tasks = taskRepository.findAll();
        for(TaskEntity task : tasks)   {
            recordTasks.add(new Task(task.getId(), task.getDescription(), task.getDate(), task.isCompleted()));
        }
        return recordTasks;
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

    public TaskEntity getTaskById(int id) {
        return taskRepository.findById(id).orElse(null);
    }

}
