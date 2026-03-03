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
    <h2 class="text-styler__heading">Style your text</h2>
    <form>
      <fieldset class="text-styler__fieldset--text">
        <label class="text-styler__label" for="text"
          >Enter your text:
          <span class="text-styler__instructions"
            >(Max 50 Characters)</span
          ></label
        >
        <input
          v-model="previewText"
          id="text"
          name="text"
          type="text"
          maxlength="50"
        />
      </fieldset>

      <fieldset class="text-styler__fieldset--select">
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

      <fieldset>
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
      <h2 class="text-styler__preview--heading">Preview your styled text</h2>
      <p :style="previewStyle" class="text-styler__preview" aria-live="polite">
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

/* Headings */

h2 {
  font-weight: var(--font-medium);
  font-size: var(--font-sm);
}
.text-styler__heading {
  margin: 0.5em 0 0;
}

.text-styler__preview--heading {
  margin: 1em 0 0.5em;
}

/* Fieldsets, Inputs, and Labelss */

.text-styler__fieldset--text,
.text-styler__fieldset--select {
  display: flex;
  flex-direction: column;
}

.text-styler__label {
  font-size: var(--font-label);
  padding: 1em 0 0.5em;
}

.text-styler__instructions {
  font-size: var(--font-xs);
}

.text-styler__label--checkbox {
  font-size: var(--body-font);
  padding: 0 0.5em 0 0.25em;
}

.text-styler__fieldset--text input,
.text-styler__fieldset--select select {
  padding: 1em;
  font-family: var(--body-font);
  border-radius: var(--sm-border-radius);
  border: var(--solid-thin-border);
  font-size: var(--font-default);
}

input[type="checkbox"] {
  transform: scale(1.5);
  margin-right: 0.5em;
  accent-color: var(--pink);
}

/* Text preview section */

.text-styler__preview {
  min-height: 60px;
  padding: 1em;
  margin: 0 0 1em;
  border: var(--thin-dashed-border);
  border-radius: var(--sm-border-radius);
  overflow-wrap: break-word;
}

@media (min-width: 700px) {
  h2 {
    font-size: var(--font-md);
  }
}
</style>
