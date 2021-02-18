import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import BookListContainer from './BookListContainer'
import api from '@/api'

describe('Book Detail Container', () => {
  it('render', async() => {
    const book = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-Driven design' }
    ]

    api.fetchBooks = jest.fn().mockImplementation(() => Promise.resolve(book))

    const wrapper = mount(BookListContainer)

    await flushPromises()
    const titles = wrapper.findAll('h2.book-title').map(e => e.text())

    expect(titles).toEqual(expect.arrayContaining([
      'Refactoring', 'Domain-Driven design'
    ]))
  })
})
