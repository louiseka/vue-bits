<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const navOpen = ref(false);

function toggleNav() {
  console.log("button clicked");
  navOpen.value = !navOpen.value;
}
</script>

<template>
  <div class="nav__container">
    <div class="nav__heading">
      <h2>Vue Demos</h2>
      <button
        class="nav__button"
        @click="toggleNav"
        aria-label="Toggle navigation menu"
      >
        <img class="icon" src="@/assets/icons/chevron-down.svg" alt="" />
      </button>
    </div>
    <nav>
      <ul class="nav__links">
        <li>
          <RouterLink class="nav__link" activeClass="active__link" to="/"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink class="nav__link" activeClass="active__link" to="/counter"
            >Counter</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="nav__link"
            activeClass="active__link"
            to="/text-styler"
            >Text Styler</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav__container {
  text-align: center;
  background-color: var(--light-turquoise);
  width: 90%;
  min-height: auto;
  margin: 1em auto;
  padding: 1em 0;
  border-radius: var(--md-border-radius);
  border: var(--solid-normal-border);
}

.nav__button {
  display: inline-flex;
  border-radius: var(--sm-border-radius);
  border: var(--solid-thin-border);
}

.nav__heading {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin: 0.8em 1em 1em;
  padding: 0.5em 0;
  background-color: var(--turquoise);
  border-radius: var(--mixed-border-radius);
  border: var(--solid-thin-border);
  color: var(--white);
}

.nav__links {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5em;
}
.nav__links li {
  width: 100%;
}

.nav__link {
  display: block;
  margin: 0em 1.5em;
  padding: 0.5em 0;
  color: var(--black);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}

.active__link {
  background-color: var(--warm-yellow);
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
}

@media (min-width: 1400px) {
  .nav__container {
    width: 20%;
    min-height: 600px;
    margin: 3em 0;
  }

  .nav__links {
    flex-direction: column;
  }
}
</style>
