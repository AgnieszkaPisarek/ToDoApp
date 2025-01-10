package klosebrothers.ToDoApp;

public class Task {
    private String id;
    private String description;
    private String date;
    private boolean completed;

    public Task(String id, String description, String date, boolean completed) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.completed = completed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
