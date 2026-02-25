<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="nav__container">
    <h2 class="nav__heading">Vue Demos</h2>
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

.nav__heading {
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
