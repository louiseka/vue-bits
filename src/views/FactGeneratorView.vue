<script setup>
import { ref, watch } from "vue";

const factData = ref(null);
const trigger = ref(0);

watch(
  trigger,
  async () => {
    const res = await fetch("https://meowfacts.herokuapp.com/");
    const data = await res.json();
    factData.value = data.data[0];
  },
  { immediate: true },
);
</script>
<template>
  <section class="facts">
    <div class="facts__text">
      <h2 class="facts__heading">Generate a Random Cat Fact</h2>
      <p>{{ factData }}</p>
    </div>
    <button class="facts__button" @click="trigger++">Generate a Fact</button>
    <p class="facts__stats">(You've generated {{ trigger }} cat facts)</p>
  </section>
</template>
<style scoped>
.facts {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 2em 1em;
}

.facts__heading {
  margin: 1em 0 0.5em;
  font-weight: var(--font-medium);
  font-size: var(--font-sm);
}

.facts__text {
  text-align: center;
  min-height: 200px;
}

.facts__button {
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
  padding: 0.5em 1em;
  background-color: var(--faded-yellow);
  font-size: var(--font-default);
  margin: 1em 0;
}

.facts__stats {
  font-size: var(--font-xs);
}

@media (min-width: 700px) {
  .facts__heading {
    font-size: var(--font-md);
  }
}
</style>
