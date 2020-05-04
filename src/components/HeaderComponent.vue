<template>
  <v-app-bar app absolute color="#fcb69f" dark src="http://lorempixel.com/400/200/food/">
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
    </template>

    <v-toolbar-title class="for-large-only">Meal Mania</v-toolbar-title>

    <v-spacer class="for-large-only"></v-spacer>
    <v-form @submit="submitForm">
      <v-text-field
        @input="handleChange"
        v-model="searchQuery"
        class="customInput"
        solo
        dense
        label="Search Meal"
      ></v-text-field>
    </v-form>
    <v-btn id="search-button" :disabled="!searchQuery" @click="submitForm" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="for-large-only" to="/" @click="changeMeal">
      <span>Random Meal</span>
      <v-icon right dark>mdi-heart</v-icon>
    </v-btn>
    <v-btn class="for-small-only" to="/" @click="changeMeal">
      <v-icon dark>mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { fetchRandomMeal } from "@/networkCall.service.js";

export default {
  name: "HeaderComponent",

  components: {},

  data: () => ({
    searchQuery: null
  }),
  methods: {
    submitForm(event) {
      event.preventDefault();
      if (!this.searchQuery) {
        return;
      }
      this.$store.commit("changeClickedOnMeal", false);
      this.$store.commit("changeSearchQuery", this.searchQuery);
      if (this.$router.currentRoute.name !== "Search") {
        this.$router.push("search");
      }
    },
    handleChange() {
      if (!this.searchQuery) {
        return;
      }
      this.$store.commit("changeClickedOnMeal", false);
      this.$store.commit("changeSearchQuery", this.searchQuery);
      if (this.$router.currentRoute.name !== "Search") {
        this.$router.push("search");
      }
    },
    changeMeal() {
      if (this.$router.currentRoute.name === "Home") {
        fetchRandomMeal().then(response => {
          this.$store.commit("changeMealCard", response.data.meals[0]);
        });
      }
    }
  }
};
</script>

<style scoped>
.customInput {
  padding: 0px;
  margin: 0px;
  height: 35px;
}
.for-small-only {
  visibility: hidden;
}

@media screen and (max-width: 670px) {
  .for-large-only {
    display: none;
  }
  .for-small-only {
    visibility: visible;
  }
}
</style>
