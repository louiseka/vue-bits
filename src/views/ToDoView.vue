<script setup>
import { ref, computed } from "vue";

let id = 0;

const newToDo = ref("");
const toDos = ref([]);
const hideCompleted = ref(false);

const filteredToDos = computed(() => {
  return hideCompleted.value ? toDos.value.filter((t) => !t.done) : toDos.value;
});

function addToDo() {
  toDos.value.push({ id: id++, text: newToDo.value, done: false });
  newToDo.value = "";
}

function removeToDo(toDo) {
  toDos.value = toDos.value.filter((t) => t !== toDo);
}
</script>
<template>
  <section class="todo">
    <h2 class="todo__heading">Add a Task</h2>
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
      <h2 class="todo__heading">Tasks To Do</h2>
      <ul class="todo__list">
        <li
          class="todo__list--item"
          v-for="toDo in filteredToDos"
          :key="toDo.id"
        >
          <span :class="{ done: toDo.done }">
            <input type="checkbox" v-model="toDo.done" />
            {{ toDo.text }}
          </span>
          <button class="todo__delete-button" @click="removeToDo(toDo)">
            <img class="todo__icon" src="@/assets/icons/x.svg" />
          </button>
        </li>
      </ul>
      <button class="todo__hide-button" @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? "Show Completed Tasks" : "Hide Completed Tasks" }}
      </button>
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
  font-size: var(--font-sm);
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

.done {
  text-decoration: line-through;
}

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

input[type="checkbox"] {
  transform: scale(1.5);
  margin-right: 0.5em;
  accent-color: var(--pink);
}

/* Button styling */
.todo__add-button,
.todo__delete-button,
.todo__hide-button {
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
  padding: 0.5em 1em;
}

.todo__add-button,
.todo__hide-button {
  background-color: var(--faded-yellow);
  font-size: var(--font-default);
}

.todo__icon {
  width: 20px;
}

.todo__delete-button {
  background-color: var(--pink);
  display: inline-flex;
}

.todo__hide-button {
  margin: 1em 0;
}

@media (min-width: 700px) {
  .todo__heading {
    font-size: var(--font-md);
  }
}
</style>
