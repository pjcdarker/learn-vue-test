import { cleanUpStubBooks, feedStubBooks, gotoApp, checkAppTitle, checkBookDetail, checkBookList } from '../../helpers'

describe('Bookish application', () => {
  before(() => {
    cleanUpStubBooks()
  })

  beforeEach(() => {
    feedStubBooks()
    gotoApp()
  })

  afterEach(() => {
    cleanUpStubBooks()
  })

  it('Visits the bookish', () => {
    checkAppTitle('Bookish')
  })

  it('Show book list', () => {
    checkBookList(['Refactoring', 'Domain-Driven design', 'Building Microservices'])
  })

  it('Goes to the Book Detail page', () => {
    checkBookDetail()
  })

})

