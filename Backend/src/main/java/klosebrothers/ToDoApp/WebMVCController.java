package klosebrothers.ToDoApp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class WebMVCController {

    @GetMapping("/tasks")
    @ResponseBody
    public List<Task> returnTasks() {
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task("1", "Take a dog for a walk", "2025-01-03", true));
        tasks.add(new Task("2", "Take out the trash", "2025-01-04", false));
        tasks.add(new Task("3", "Do the dishes", "2025-01-05", false));
        tasks.add(new Task("4", "Updated task title", "2025-01-07", true));

        return tasks;
    }

    @DeleteMapping
    public void deleteTask(@RequestParam("id") int id) {

    }

    @PostMapping
    public void addTask(@ModelAttribute Task task) {

    }

    @PatchMapping
    public void updateTask(@ModelAttribute Task task) {

    }

}
