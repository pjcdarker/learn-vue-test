import { feedStubBooks, cleanUpStubBooks } from '../../helpers'

import { Before, After } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
  cleanUpStubBooks()
  feedStubBooks()
})

After(() => {
  cleanUpStubBooks()
})
