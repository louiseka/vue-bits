<script setup>
import { ref } from "vue";
const previewText = ref("");
</script>
<template>
  <section class="textStyler">
    <form>
      <fieldset class="text__fieldset">
        <label for="text">Enter your text:</label>
        <input v-model="previewText" id="text" name="text" type="text" />
      </fieldset>
      <fieldset class="select__fieldset">
        <label for="color-select">Choose your text colour:</label>
        <select name="color" id="color-select">
          <option value="">--Please choose an option--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </fieldset>
      <fieldset class="checkbox__fieldset">
        <legend>Choose your font style</legend>
        <input type="checkbox" id="bold" name="bold" />
        <label for="bold">Bold</label>
        <input type="checkbox" id="italic" name="italic" />
        <label for="italic">Italic</label>
        <input type="checkbox" id="underline" name="underline" />
        <label for="underline">Underline</label>
      </fieldset>
    </form>
    <div>
      <h2>Preview your styled text</h2>
      <p class="preview">{{ previewText }}</p>
    </div>
  </section>
</template>
<style scoped>
.textStyler {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 0.5em;
}

h2 {
  font-weight: var(--font-medium);
}

.checkbox__fieldset,
.text__fieldset,
.select__fieldset,
label,
legend {
  margin: 0.5em 0;
}

.text__fieldset,
.select__fieldset {
  display: flex;
  flex-direction: column;
}

.text__fieldset input,
.select__fieldset select {
  padding: 1em;
  font-family: var(--body-font);
  border-radius: var(--sm-border-radius);
  border: var(--solid-thin-border);
}

.preview {
  min-height: 50px;
  padding: 1em;
  border: var(--thin-dashed-border);
  border-radius: var(--sm-border-radius);
}
</style>
