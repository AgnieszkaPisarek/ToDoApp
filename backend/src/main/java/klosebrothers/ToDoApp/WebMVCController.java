package klosebrothers.ToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class WebMVCController {

    @Autowired
    TaskService taskService = new TaskService();
    public record TaskDTO(String id, String description, String date, boolean completed) {}

    @GetMapping("/tasks")
    @ResponseBody
    public List<TaskDTO> returnTasks() {
        List<TaskDTO> recordTasks = new ArrayList<>();
        List<TaskService.Task> tasks = taskService.getAllTasks();
        for (TaskService.Task task : tasks) {
            recordTasks.add(new TaskDTO(String.valueOf(task.id()), task.description(), task.date(), task.completed()));
        }
        return recordTasks;
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable("id")String id) {
        TaskEntity task = taskService.getTaskById(Integer.parseInt(id));
        taskService.deleteTask(task);
    }

    @PostMapping("/tasks")
    public void addTask(@RequestBody TaskEntity newTask) {
        taskService.addTask(newTask);
    }

    @PutMapping("/tasks/{id}")
    public void updateTask(@RequestBody TaskEntity changedTask, @PathVariable String id) {
        taskService.editTask(changedTask);
    }
}
