<script setup>
import { ref, computed } from "vue";

const count = ref(0);
const isBtnDisabled = computed(() => count.value === 0);

function increment() {
  count.value++;
}

function decrement() {
  if (count.value > 0) {
    count.value--;
  }
}
</script>

<template>
  <section class="counter">
    <p class="count">{{ count }}</p>
    <div class="counter__buttons">
      <button
        class="button button--increase"
        v-on:click="increment"
        type="button"
      >
        <img class="icon" src="@/assets/icons/plus.svg" alt="" />
        Increase
      </button>
      <button
        class="button button--decrease"
        v-bind:disabled="isBtnDisabled"
        v-on:click="decrement"
        type="button"
      >
        <img class="icon" src="@/assets/icons/minus.svg" alt="" />
        Decrease
      </button>
    </div>
  </section>
</template>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
}
.count {
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
}

.counter__buttons {
  display: flex;
  gap: 20px;
  margin: 0.8em 0;
  flex-direction: column;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0.5em 1em;
  width: 180px;
  font-size: var(--font-sm);
  border-radius: var(--sm-border-radius);
  border: var(--solid-thin-border);
}

.button--increase {
  background-color: var(--faded-yellow);
}

.button--decrease {
  background-color: var(--faded-turquoise);
}

@media (min-width: 475px) {
  .counter__buttons {
    flex-direction: row;
  }
}
</style>
