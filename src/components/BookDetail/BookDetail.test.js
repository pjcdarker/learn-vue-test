import { mount } from '@vue/test-utils'
import BookDetail from './BookDetail'

describe('Book Detail', () => {
  it('render title', () => {
    const book = { name: 'Refactoring' }

    const wrapper = mount(BookDetail, {
      props: {
        book
      }
    })

    const title = wrapper.find('h2.book-title')

    expect(title.text()).toEqual(book.name)
  })

  it('render description', () => {
    const book = {
      name: 'Refactoring',
      description: `Martin Fowler's Refactoring defined core ideas and techniques 
          that hundreds of thousands of developers have used to improve 
          their software.`
    }

    const wrapper = mount(BookDetail, {
      props: {
        book
      }
    })

    const description = wrapper.find('p.book-description')

    expect(description.text()).toEqual(book.description)
  })
})
