import axios from 'axios'

const API_URL = 'http://127.0.0.1:8081'

module.exports = {
  gotoApp: () => {
    cy.visit('http://127.0.0.1:8080')
  },

  checkAppTitle: (title) => {
    cy.get('h2[data-test="heading"]').contains(title)
  },

  checkBookList: (expectation = []) => {
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(expectation.length)
      const titles = [...books].map(e => e.querySelector('h2').innerHTML)
      expect(titles).to.deep.equal(expectation)
    })
  },

  checkBookDetail: () => {
    cy.get('div.book-item').contains('View Details').eq(0).click()
    cy.url().should('include', '/books/1')
    cy.get('h2.book-title').contains('Refactoring')
  },

  cleanUpStubBooks: () => {
    return axios.delete(`${API_URL}/books?_cleanup=true`).catch(err => err)
  },

  feedStubBooks: () => {
    const books = [
      {
        name: 'Refactoring',
        id: 1,
        description: 'Martin Fowlers Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.'
      },
      {
        name: 'Domain-Driven design',
        id: 2,
        description: 'Explains how to incorporate effective domain modeling into the software development process.'
      },
      {
        name: 'Building Microservices',
        id: 3,
        description: 'Author Sam Newman provides you with a firm grounding in the concepts while diving into current solutions for modeling, integrating, testing, deploying, and monitoring your own autonomous services.'
      }
    ]
    return books.map(e => axios.post(`${API_URL}/books`, e, { headers: { 'Content-Type': 'application/json' } })
      .catch(err => err))
  }
}
