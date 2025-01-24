package klosebrothers.ToDoApp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor
@Entity
public class TaskEntity {

    @Id
    private String id;
    private String description;
    private String date;
    private boolean completed;

    protected TaskEntity() {}
}
