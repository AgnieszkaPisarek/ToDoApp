describe('ToDo App Page', () => {
  //navigates to your App
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1200, 1000)
  })
  //validates all static text
  it('should validate all static text on the page', () =>  {
    cy.get('.encouragement').should('contain.text', 'Manage your tasks and stay productive...')
    cy.get('.completedText').should('contain.text', 'Completed')
  })
  //adds multiple tasks and validates their creation
  it('should successfully create many tasks', () =>  {
    cy.get('.task').should('not.exist');
    cy.get('.thingToDo').should('have.length', 0);

    cy.get('.createTaskInput').type("Wash the dishes")
    cy.get('.addTaskButton').click()
    cy.get('.task').should('exist');
    cy.get('.thingToDo').eq(0).should('have.value', 'Wash the dishes');
    cy.get('.completedText').should('contain.text', 'Completed 0 of 1')

    cy.get('.createTaskInput').type("Take out the trash")
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo').eq(1).should('have.value', 'Take out the trash');
    cy.get('.completedText').should('contain.text', 'Completed 0 of 2')

    cy.get('.createTaskInput').type("Take the dog for a walk")
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo').eq(2).should('have.value', 'Take the dog for a walk');
    cy.get('.completedText').should('contain.text', 'Completed 0 of 3')

    cy.get('.createTaskInput').type("Do the homework")
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo').eq(3).should('have.value', 'Do the homework');
    cy.get('.completedText').should('contain.text', 'Completed 0 of 4')

    cy.get('.thingToDo').should('have.length', 4);
  })
  //edits one task and validates change
  it('should visibly edit second task', () =>  {
  })
})



