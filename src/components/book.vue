<template>
  <div class="card m-3">
    <h4 class="card-header">Search book title</h4>
    <div class="card-body">
      <Form @submit.prevent="onSubmit">
        <input required class="formcontrol" type="text" placeholder="Filter Search" v-model="form.searchBookTitle" />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: 'BookHomepage',
  setup() {
    const form = reactive({
      searchBookTitle: "",
    });
    return {
      form,
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({name:'BooklistPage',params:{title:this.form.searchBookTitle}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.formcontrol {
  max-width: 500px;
  width: 100%;
  margin-right: 20px;
  height: 40px;
  border-radius: 4px;
}
</style>
