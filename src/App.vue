<script setup lang="ts">
import { RouterView } from "vue-router";
import LefthandMenu from "./components/LefthandMenu.vue";
import PortfolioHeader from "./components/PortfolioHeader.vue";
</script>

<template>
  <div>
    <LefthandMenu/>
    <PortfolioHeader/>
    <main>
      <RouterView></RouterView>
    </main>

  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  grid-template-rows: 7rem 1fr;
  margin: 0;
  padding: 0;
  height: 100%;
}
main {
  padding-top: 0rem;
  padding-left: 3rem;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow-y: hidden;
}
</style>
