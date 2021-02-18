import { mount } from '@vue/test-utils'
import BookList from './BookList'

describe('Booklist', () => {
  it('render books', () => {
    const books = [
      { name: 'Refactoring' },
      { name: 'Domain-Driven design' }
    ]

    const wrapper = mount(BookList, {
      props: {
        books
      }
    })

    const bookItems = wrapper.findAll('div.book-item')
    const titles = bookItems.map(e => e.find('h2').text())

    expect(bookItems).toHaveLength(2)
    expect(titles).toEqual(expect.arrayContaining([
      'Refactoring', 'Domain-Driven design'
    ]))
  })
})
