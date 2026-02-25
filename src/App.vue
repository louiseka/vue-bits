<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <Navigation></Navigation>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
