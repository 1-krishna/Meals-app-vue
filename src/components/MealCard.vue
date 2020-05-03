<template>
  <v-card shaped class="mx-auto my-12 meal-card" max-width="600px">
    <v-img height="250px" :src="meal.strMealThumb">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="blue accent-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title>{{meal.strMeal}}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">
        <b>Category</b>
        • {{meal? meal.strCategory:``}}
      </div>
      <div class="my-4 subtitle-1">
        <b>Area</b>
        • {{meal? meal.strArea:``}}
      </div>
    </v-card-text>

    <v-divider v-if="meal.strTags" class="mx-4"></v-divider>

    <v-card-title v-if="meal.strTags">Tags</v-card-title>

    <v-card-text v-if="meal.strTags">
      <v-chip-group column>
        <v-chip v-for="(tag, idx) in meal.strTags.split(',')" :key="idx">{{tag}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="blue-grey" class="ma-2 white--text" @click="setDetailedMeal">View Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MealCard",

  data: () => ({}),
  props: {},
  methods: {
    setDetailedMeal() {
      this.$store.commit("changeDetailedMeal", this.meal);
      this.$router.push("details");
    }
  },
  created() {},
  computed: {
    meal() {
      return this.$store.getters.mealCard;
    }
  }
};
</script>

<style lang="css" scoped>
.meal-card {
  padding: 10px;
}
</style>
