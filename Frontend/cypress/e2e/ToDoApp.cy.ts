describe('Accessing the page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const texts = [
    '👋 Hello, Energizer!',
    "G'Day Boss!",
    "What's our plan for today? ☺️",
    'Keep it going!',
    'Hello sunshine! ☀️',
  ]

  it('should validate all static text on the page', () => {
    cy.get('.encouragement').should(
      'contain.text',
      'Manage your tasks and stay productive...'
    )
    cy.get('.completedText').should('contain.text', 'Completed')
    cy.get('h1').should((element) => {
      const text = element.text()
      expect(texts).to.include(text)
    })
  })
})

describe('Creating and deleting tasks', () => {
  type Task = {
    id: string
    description: string
    date: string
    completed: boolean
  }

  let numberOfTasks = 0
  let numberOfCompletedTasks = 0

  before(() => {
    cy.intercept('GET', '/tasks').as('getData')
    cy.visit('/')
    cy.wait('@getData').then((interception) => {
      const responseData = interception.response?.body
      numberOfTasks = responseData.length
      responseData.forEach((task: Task) => {
        if (task.completed) {
          numberOfCompletedTasks++
        }
      })
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('should successfully create many tasks and then delete them', () => {
    cy.get('.createTaskInput').first().type('Wash the dishes')
    cy.get('.addTaskButton').click()
    cy.get('.thingToDo')
      .eq(numberOfTasks)
      .should('have.value', 'Wash the dishes')
    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + ++numberOfTasks
    )

    cy.get('.createTaskInput').type('Take out the trash')
    cy.get('.addTaskButton').first().click()
    cy.get('.thingToDo')
      .eq(numberOfTasks)
      .should('have.value', 'Take out the trash')
    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + ++numberOfTasks
    )

    cy.get('.createTaskInput').type('Take the dog for a walk')
    cy.get('.addTaskButton').first().click()
    cy.get('.thingToDo')
      .eq(numberOfTasks)
      .should('have.value', 'Take the dog for a walk')
    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + ++numberOfTasks
    )

    cy.get('.createTaskInput').type('Do the homework')
    cy.get('.addTaskButton').first().click()
    cy.get('.thingToDo')
      .eq(numberOfTasks)
      .should('have.value', 'Do the homework')
    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + ++numberOfTasks
    )
    cy.get('.thingToDo').should('have.length', numberOfTasks)
  })

  it('should successfully delete tasks', () => {
    cy.get('.options-menu').should('not.exist')
    cy.get('.menu-sign').eq(--numberOfTasks).click()
    cy.get('.options-menu').should('be.visible')
    cy.get('.options-menu').click()

    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + numberOfTasks
    )
    cy.get('.options-menu').should('not.exist')
    cy.get('.menu-sign').eq(--numberOfTasks).click()
    cy.get('.options-menu').should('be.visible')
    cy.get('.options-menu').click()

    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + numberOfTasks
    )
    cy.get('.options-menu').should('not.exist')
    cy.get('.menu-sign').eq(--numberOfTasks).click()
    cy.get('.options-menu').should('be.visible')
    cy.get('.options-menu').click()

    cy.get('.completedText').should(
      'contain.text',
      'Completed ' + numberOfCompletedTasks + ' of ' + numberOfTasks
    )
    cy.get('.options-menu').should('not.exist')
    cy.get('.menu-sign').eq(--numberOfTasks).click()
    cy.get('.options-menu').should('be.visible')
    cy.get('.options-menu').click()
  })
})

describe('Editing tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should visibly edit task', () => {
    cy.get('.task')
      .should('exist')
      .then(() => {
        cy.get('.thingToDo')
          .eq(0)
          .invoke('val')
          .then((previousTaskDescription) => {
            cy.get('input.thingToDo').eq(0).clear()
            cy.get('input.thingToDo').eq(0).type('Feed the cat')
            cy.get('.thingToDo').eq(0).should('have.value', 'Feed the cat')
            cy.get('input.thingToDo').eq(0).clear()
            cy.get('input.thingToDo')
              .eq(0)
              .type(String(previousTaskDescription))
          })

        cy.get('.date')
          .eq(0)
          .invoke('val')
          .then((previousDate) => {
            cy.get('.date').eq(0).clear()
            cy.get('.date').eq(0).type('2012-12-12')
            cy.get('.date').eq(0).should('have.value', '2012-12-12')
            cy.get('input.thingToDo').eq(0).clear()
            cy.get('.date').eq(0).type(String(previousDate))
          })
      })
  })
})
