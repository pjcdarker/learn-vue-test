<template>
  <div class="home">
    <h2 data-test="heading">Bookish</h2>
    <book-list-container></book-list-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BookListContainer from '@/components/BookList/BookListContainer'

export default {
  name: 'Home',
  components: {
    BookListContainer
  }
}
</script>
