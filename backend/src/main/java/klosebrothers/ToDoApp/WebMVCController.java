package klosebrothers.ToDoApp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WebMVCController {

    private static final List<Task> tasks;

    static {
        tasks = new ArrayList<>();
        tasks.add(new Task("1", "Take a dog for a walk", "2025-01-03", true));
        tasks.add(new Task("2", "Take out the trash", "2025-01-04", false));
        tasks.add(new Task("3", "Do the dishes", "2025-01-05", false));
        tasks.add(new Task("4", "Updated task title", "2025-01-07", true));
    }

    @GetMapping("/tasks")
    @ResponseBody
    public List<Task> returnTasks() {
        return tasks;
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable("id")String id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }

    @PostMapping("/tasks")
    public void addTask(@RequestBody Task newTask) {
        tasks.add(newTask);
    }

    @PutMapping("/tasks/{id}")
    public void updateTask(@RequestBody Task changedTask, @PathVariable String id) {
        tasks.stream()
                .filter(task -> task.getId().equals(id))
                .findFirst()
                .ifPresent(task -> {
                    task.setDescription(changedTask.getDescription());
                    task.setDate(changedTask.getDate());
                    task.setCompleted(changedTask.isCompleted());
                });
    }
}
