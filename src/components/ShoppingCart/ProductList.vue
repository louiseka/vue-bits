<script setup>
import { ref } from "vue";
import chocolateMuffin from "@/assets/products/chocolate-muffin.svg";
import lemonMeringue from "@/assets/products/lemon-meringue.svg";
import shortbread from "@/assets/products/shortbread.svg";

const products = ref([
  {
    id: 1,
    name: "Chocolate Muffin",
    price: 3.45,
    imgUrl: chocolateMuffin,
  },
  {
    id: 2,
    name: "Lemon Meringue Pie",
    price: 3.45,
    imgUrl: lemonMeringue,
  },
  {
    id: 3,
    name: "Shortbread",
    price: 3.45,
    imgUrl: shortbread,
  },
]);
</script>
<template>
  <ul>
    <li class="product__item" v-for="product in products">
      <div>
        <img class="product__img" :src="product.imgUrl" :alt="product.name" />
      </div>
      <div>
        <h3>{{ product.name }}</h3>
        <p>£{{ product.price }}</p>
        <button class="product__add-button">Add to Cart</button>
      </div>
    </li>
  </ul>
</template>
<style scoped>
.product__item {
  display: flex;
  flex-direction: row;
  gap: 2em;
}

.product__img {
  max-width: 200px;
  border-radius: var(--sm-border-radius);
}

.product__add-button {
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
  padding: 0.5em 1em;
  background-color: var(--faded-yellow);
  font-size: var(--font-default);
}
</style>
