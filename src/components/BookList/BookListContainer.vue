<template>
  <book-list :books="books"></book-list>
</template>

<script>
import BookList from './BookList'
import api from '@/api'

export default {
  name: 'BookListContainer',
  components: {
    BookList
  },
  data() {
    return {
      books: []
    }
  },
  mounted() {
    api.fetchBooks().then(data => {
      this.books = data
    })
  }
}
</script>
