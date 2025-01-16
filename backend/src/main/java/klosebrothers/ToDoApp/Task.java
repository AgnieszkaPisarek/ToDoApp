package klosebrothers.ToDoApp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor
public class Task {
    final private String id;
    private String description;
    private String date;
    private boolean completed;

    @Override
    public String toString() {
        return "Task{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", date='" + date + '\'' +
                ", completed=" + completed +
                '}';
    }
}
