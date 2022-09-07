<template>
  <div class="card m-3">
    <h4 class="card-header">Book Title List Page</h4>
    <div v-if="!loading" class="spinner-border text-primary" role="status">
      <span class="sr-only"></span>
    </div>
    <ul v-if="loading" class="list-group">
      <li v-for='book in bookposts' :key='book.title' class="list-group-item">{{ book.title }}</li>
    </ul>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import bookStore from '@/stores/store'
const BookStore = bookStore()
import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
const { bookposts } = storeToRefs(bookStore())

export default {
  name: 'BooklistPage',
  data() {
    return {
      BookStore,
      bookposts,
      loading: false,
    };
  },
  created() {
    const gettitle = this.$route.params.title;
    BookStore.getbookList(gettitle).then(res => {
      this.bookposts = _.take(res, 10);
      this.loading = true;
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.spinner-border.text-primary {
  text-align: center;
  margin: 0 auto;
}
</style>
