<template>
  <div class="book-detail">
    <h2 class="book-title">{{ book.name }}</h2>
    <p class="book-description">{{ book.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  props: {
    book: Object
  }
}
</script>
