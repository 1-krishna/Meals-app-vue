<template>
  <div class="search">
    <MealsList v-if="!clickedOnMeal" />
    <MealCard v-else />
  </div>
</template>

<script>
import { searchMeals } from "@/networkCall.service.js";
import MealsList from "@/components/MealsList";
import MealCard from "@/components/MealCard";

export default {
  name: "Search",
  components: {
    MealsList,
    MealCard
  },
  data() {
    return {};
  },
  computed: {
    searchQuery() {
      return this.$store.getters.searchQuery;
    },
    clickedOnMeal() {
      return this.$store.getters.clickedOnMeal;
    }
  },
  created() {
    searchMeals(this.searchQuery).then(response => {
      this.$store.commit("changeSearchResult", response.data.meals);
    });
  },
  watch: {
    searchQuery() {
      searchMeals(this.searchQuery).then(response => {
        this.$store.commit("changeSearchResult", response.data.meals);
      });
    }
  }
};
</script>
<style scoped>
.search {
  margin-top: 50px;
}
</style>