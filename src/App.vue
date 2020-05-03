<template>
  <v-app>
    <HeaderComponent />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import HeaderComponent from "./components/HeaderComponent";

export default {
  name: "App",

  components: {
    //HelloWorld,
    HeaderComponent
  },

  data: () => ({
    //
  })
};
</script>
