package klosebrothers.ToDoApp;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class WebMVCController {

    TaskService taskService;

    @GetMapping("/tasks")
    @ResponseBody
    public List<TaskEntity> returnTasks() {
        return taskService.getAllTasks();
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
