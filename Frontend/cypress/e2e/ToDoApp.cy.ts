describe('Accessing the page', () => {
  //navigates to your App
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1200, 1000)
  })
  const texts = [
    '👋 Hello, Energizer!',
    "G'Day Boss!",
    "What's our plan for today? ☺️",
    'Keep it going!',
    'Hello sunshine! ☀️',
  ];
  //validates all static text
  it('should validate all static text on the page', () =>  {
    cy.get('.encouragement').should('contain.text', 'Manage your tasks and stay productive...')
    cy.get('.completedText').should('contain.text', 'Completed')
    cy.get('h1').should((element) => {
      const text = element.text();
      expect(texts).to.include(text);
    })
  })
})

describe('Creating tasks', () => {
  //navigates to your App
  before(() => {
    cy.visit('/')
    cy.viewport(1200, 1000)
  })
  //adds multiple tasks and validates their creation
  it('should successfully create many tasks', () => {
    cy.get('.task').should('not.exist')
    cy.get('.thingToDo').should('have.length', 0)

    cy.get('.createTaskInput').type("Wash the dishes")
    cy.get('.addTaskButton').click()
    cy.get('.task').should('exist')
    cy.get('.thingToDo').eq(0).should('have.value', 'Wash the dishes')
    cy.get('.completedText').should('contain.text', 'Completed 0 of 1')

    cy.get('.createTaskInput').type("Take out the trash")
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo').eq(1).should('have.value', 'Take out the trash')
    cy.get('.completedText').should('contain.text', 'Completed 0 of 2')

    cy.get('.createTaskInput').type("Take the dog for a walk")
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo').eq(2).should('have.value', 'Take the dog for a walk')
    cy.get('.completedText').should('contain.text', 'Completed 0 of 3')

    cy.get('.createTaskInput').type("Do the homework")
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo').eq(3).should('have.value', 'Do the homework')
    cy.get('.completedText').should('contain.text', 'Completed 0 of 4')
    cy.get('.thingToDo').should('have.length', 4)
  })
})

describe('Editing and deleting tasks', () => {
  //navigates to your App
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1200, 1000)
    cy.get('.createTaskInput').type("Mow the lawn")
    cy.get('.addTaskButton').click()
    cy.get('.createTaskInput').type("Feed the dog")
    cy.get('.addTaskButton').click()

  })
  //edits one task and validates change
  it('should visibly edit second task', () =>  {
    cy.get('.thingToDo').eq(1).should('have.value', 'Feed the dog')
    cy.get('input.thingToDo').eq(1).clear()
    cy.get('input.thingToDo').eq(1).type("Feed the cat")
    cy.get('.thingToDo').eq(1).should('have.value', 'Feed the cat')
    cy.get('.date').eq(1).type('2012-12-12')
    cy.get('.date').eq(1).should('have.value', '2012-12-12')
  })

  //deletes another task and validates deletion
  it('should delete given task', () =>  {
    cy.get('.completedText').should('contain.text', 'Completed 0 of 2')
    cy.get('.options-menu').should('not.exist')
    cy.get('.menu-sign').eq(1).click()
    cy.get('.options-menu').should('be.visible')
    cy.get('.options-menu').click()

    cy.get('.options-menu').should('not.exist')
    cy.get('.thingToDo').should('have.length', 1)
    cy.get('.thingToDo').should('have.value', 'Mow the lawn')
    cy.get('.completedText').should('contain.text', 'Completed 0 of 1')
  })
})


