<script setup>
import { ref, computed } from "vue";
const previewText = ref("");
const selectedColour = ref("");
const checkedStyle = ref([]);

const previewStyle = computed(() => {
  return {
    color: selectedColour.value,
    fontWeight: checkedStyle.value.includes("bold") ? "bold" : "normal",
    fontStyle: checkedStyle.value.includes("italic") ? "italic" : "normal",
    textDecoration: checkedStyle.value.includes("underline")
      ? "underline"
      : "none",
  };
});
</script>
<template>
  <section class="text-styler">
    <form>
      <fieldset class="text__fieldset">
        <label class="text-styler__label" for="text">Enter your text:</label>
        <input v-model="previewText" id="text" name="text" type="text" />
      </fieldset>

      <fieldset class="select__fieldset">
        <label class="text-styler__label" for="color-select"
          >Choose your text colour:
        </label>
        <select v-model="selectedColour" name="color" id="color-select">
          <option value="">--Please choose an option--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </fieldset>

      <fieldset class="checkbox__fieldset">
        <legend class="text-styler__label">Choose your font style</legend>
        <input
          v-model="checkedStyle"
          type="checkbox"
          value="bold"
          id="bold"
          name="bold"
        />
        <label class="text-styler__label--checkbox" for="bold">Bold</label>
        <input
          v-model="checkedStyle"
          type="checkbox"
          value="italic"
          id="italic"
          name="italic"
        />
        <label class="text-styler__label--checkbox" for="italic">Italic</label>
        <input
          v-model="checkedStyle"
          type="checkbox"
          value="underline"
          id="underline"
          name="underline"
        />
        <label class="text-styler__label--checkbox" for="underline">
          Underline
        </label>
      </fieldset>
    </form>

    <div>
      <h2>Preview your styled text</h2>
      <p :style="previewStyle" class="preview">
        {{ previewText }}
      </p>
    </div>
  </section>
</template>
<style scoped>
.text-styler {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 0.5em;
}

h2 {
  font-weight: var(--font-medium);
  padding: 1em 0 0.5em;
}

.text__fieldset,
.select__fieldset {
  display: flex;
  flex-direction: column;
}

.text-styler__label {
  font-size: 1.1rem;
  padding: 1em 0 0.5em;
}

.text__fieldset input,
.select__fieldset select {
  padding: 1em;
  font-family: var(--body-font);
  border-radius: var(--sm-border-radius);
  border: var(--solid-thin-border);
  font-size: var(--font-default);
}

input[type="checkbox"] {
  transform: scale(1.5);
  margin-right: 0.5em;
}

.preview {
  min-height: 60px;
  padding: 1em;
  margin: 0 0 1em;
  border: var(--thin-dashed-border);
  border-radius: var(--sm-border-radius);
}
</style>
