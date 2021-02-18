import { When, And } from 'cypress-cucumber-preprocessor/steps'
import { gotoApp, checkBookList } from '../../helpers'

When('I open the list page', () => {
  gotoApp()
})

And('there are a book list', records => {
  const expect = records.rows().map(e => e[0])

  checkBookList(expect)
})
