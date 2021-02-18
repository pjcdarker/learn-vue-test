import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { checkAppTitle, gotoApp } from '../../helpers'

Given(`I am a bookish user`, () => {
  console.log('I am a bookish user')
});

When(`I open the list page`, () => {
  gotoApp()
});

Then(`I can see the title {string} is showing`, (title) => {
  checkAppTitle(title)
})
