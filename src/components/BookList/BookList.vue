<template>
  <div data-test="book-list">
    <div class="book-item" v-for="book in books" :key="book.id">
      <h2 class="book-title">{{ book.name }}</h2>
      <a :href="'/books/' + book.id">View Details</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  }
}
</script>
