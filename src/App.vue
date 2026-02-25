<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <div class="container">
      <Navigation></Navigation>
      <div class="demo">
        <h2 class="demo__heading">Get Started</h2>
        <div class="demo__inner">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.demo {
  border: 1px solid black;
  min-height: 600px;
  width: 90%;
  margin: 3em auto;
  padding: 1em 0;
  border-radius: var(--md-border-radius);
  border: var(--solid-normal-border);
  background-color: var(--light-pink);
}

.demo__inner {
  background-color: var(--white);
  margin: 1.5em;
  min-height: 550px;
  border-radius: var(--md-border-radius);
  border: var(--dashed-border);
}

.demo__heading {
  text-align: center;
  padding: 0.5em 0;
  margin: 0.8em 1.5em;
  background-color: var(--pink);
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
  width: auto;
  font-weight: var(--font-medium);
}

@media (min-width: 1400px) {
  .container {
    flex-direction: row;
  }

  .demo {
    width: 70%;
    margin: 3em;
  }
  .demo__heading {
    width: 20%;
  }
}
</style>
