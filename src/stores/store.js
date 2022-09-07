import { defineStore } from "pinia";
const baseUrl = `http://openlibrary.org`;
import axios from "axios";

export const bookStore = defineStore({
  state: () => {
    return {
      bookposts: [],
      error: null,
    };
  },
  actions: {
    async getbookList(title) {
      try {
        const res = await axios.get(`${baseUrl}/search.json?q=` + title);
        const results = await res.data.docs;
        return results;
      } catch (error) {
        this.error = error;
        alert(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
export default bookStore;
