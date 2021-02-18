<template>
  <div class="book-detail-container">
    <book-detail :book="book"></book-detail>
  </div>
</template>

<script>
import api from '@/api'
import BookDetail from './BookDetail'

export default {
  name: 'BookDetailContainer',
  components: {
    BookDetail
  },
  props: {
    id: Number
  },
  data() {
    return {
      book: {}
    }
  },
  mounted() {
    api.fetchBook(this.id).then(data => {
      this.book = data
    })
  }
}
</script>
