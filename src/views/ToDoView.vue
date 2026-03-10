<script setup>
import { ref } from "vue";

let id = 0;

const newToDo = ref("");
const toDos = ref([]);

function addToDo() {
  toDos.value.push({ id: id++, text: newToDo.value });
  newToDo.value = "";
}

function removeToDo(toDo) {
  toDos.value = toDos.value.filter((t) => t !== toDo);
}
</script>
<template>
  <section class="todo">
    <h3 class="todo__heading">Add a Task</h3>
    <form class="todo__form" @submit.prevent="addToDo">
      <input
        class="todo__input"
        v-model="newToDo"
        required
        id="todo-item"
        name="todo-item"
        type="text"
      />
      <button class="todo__add-button" type="submit">Add</button>
    </form>
    <div v-if="toDos.length > 0">
      <h3 class="todo__heading">Tasks To Do</h3>
      <ul class="todo__list">
        <li class="todo__list--item" v-for="toDo in toDos" :key="toDo.id">
          {{ toDo.text }}
          <span
            ><button class="todo__delete-button" @click="removeToDo(toDo)">
              <img class="todo__icon" src="@/assets/icons/x.svg" /></button
          ></span>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
/* Container */
.todo {
  width: 90%;
}

/* Headings */
.todo__heading {
  margin: 1em 0 0.5em;
  font-weight: var(--font-medium);
}

/* Form */
.todo__form {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.todo__input {
  width: 95%;
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
  background-color: var(--white);
  font-size: var(--font-default);
  padding: 0.5em 1em;
}

/* List styling */

.todo__list {
  border: var(--thin-dashed-border);
  border-radius: var(--sm-border-radius);
  padding: 0.5em 1em 2em;
}

.todo__list--item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  border-bottom: var(--thin-dashed-border);
}

/* Button styling */
.todo__add-button,
.todo__delete-button {
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
}

.todo__add-button {
  background-color: var(--faded-yellow);
  padding: 0.5em 1em;
  font-size: var(--font-default);
}

.todo__icon {
  width: 20px;
}

.todo__delete-button {
  background-color: var(--pink);
  display: inline-flex;
  padding: 0.5em 1em;
}
</style>
