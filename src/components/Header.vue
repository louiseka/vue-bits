<script setup></script>

<template>
  <section class="header">
    <h1>Vue Bits</h1>
    <p class="header__text">
      Vue Bits is my personal Vue playground. I experiment with components,
      features, and small projects while learning Vue - kind of like a lab for
      fun and practice.
    </p>
  </section>
</template>

<style scoped>
.header {
  margin: 1em;
}

.header__text {
  font-weight: var(--font-light);
}

@media (min-width: 700px) {
  .header__text {
    font-size: var(--font-sm);
  }

  @media (min-width: 1400px) {
    .header {
      margin: 1em 0;
    }
  }
}
</style>
