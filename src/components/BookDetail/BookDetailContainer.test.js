import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import BookDetailContainer from './BookDetailContainer'
import api from '@/api'

describe('Book Detail Container', () => {
  it('render', async() => {
    const book = { id: 1, name: 'Refactoring' }
    api.fetchBook = jest.fn().mockImplementation(() => Promise.resolve(book))

    const wrapper = mount(BookDetailContainer, {
      props: {
        id: book.id
      }
    })

    await flushPromises()
    const title = wrapper.find('h2.book-title')

    expect(title.text()).toEqual(book.name)
  })
})
