<template>
  <div v-if="meals" class="meal-list mx-auto my-12">
    <h1 align="center">Search results</h1>

    <v-data-table
      :headers="headers"
      :items="meals"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-10 transparent hover-class"
      @click:row="handleSelect"
      @page-count="pageCount = $event"
    ></v-data-table>

    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </div>
  <div v-else>
    <h1 align="center">No results found</h1>
    <h3 align="center">
      <router-link to="/">Click here for a surprise meal!</router-link>
    </h3>
  </div>
</template>

<script>
import { fetchMealById } from "@/networkCall.service.js";

export default {
  name: "MealList",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "strMeal"
        },
        { text: "Category", value: "strCategory" },
        { text: "Area", value: "strArea" }
      ]
    };
  },
  computed: {
    meals() {
      return this.$store.getters.searchResult;
    }
  },
  methods: {
    handleSelect(value) {
      console.log("clicked", value.idMeal);
      fetchMealById(value.idMeal).then(response => {
        this.$store.commit("changeMealCard", response.data.meals[0]);
        this.$store.commit("changeClickedOnMeal", true);
      });
    }
  }
};
</script>
<style scoped>
.meal-list {
  max-width: 800px;
}
.hover-class:hover {
  cursor: pointer;
}
</style>