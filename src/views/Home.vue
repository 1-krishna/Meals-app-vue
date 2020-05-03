<template>
  <MealCard />
</template>

<script>
import MealCard from "@/components/MealCard.vue";
import { fetchRandomMeal } from "@/networkCall.service.js";
export default {
  name: "Home",
  components: {
    MealCard
  },
  data: () => ({}),
  mounted() {
    if (!this.$store.getters.mealCard.strMeal) {
      fetchRandomMeal().then(response => {
        this.$store.commit("changeMealCard", response.data.meals[0]);
      });
    }
  }
};
</script>
