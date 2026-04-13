<script setup>
import { ref } from "vue";
import chocolateMuffin from "@/assets/products/chocolate-muffin.svg";
import lemonMeringue from "@/assets/products/lemon-meringue.svg";
import shortbread from "@/assets/products/shortbread.svg";

const emit = defineEmits(["add-to-cart"]);

const products = ref([
  {
    id: 1,
    name: "Chocolate Muffin",
    description:
      "A rich, moist chocolate muffin packed with indulgent cocoa flavor and melty chocolate chips",
    price: 3.45,
    imgUrl: chocolateMuffin,
  },
  {
    id: 2,
    name: "Lemon Meringue Pie",
    description:
      "A zesty lemon meringue pie with a crisp crust, tangy citrus filling, and a light, fluffy meringue topping.",
    price: 3.45,
    imgUrl: lemonMeringue,
  },
  {
    id: 3,
    name: "Shortbread",
    description:
      "A buttery, crumbly shortbread with a delicate texture and rich, melt-in-the-mouth flavor.",
    price: 3.45,
    imgUrl: shortbread,
  },
]);

const addToCart = (product) => {
  emit("add-to-cart", product);
};
</script>
<template>
  <section class="products">
    <h2 class="products__heading">Shop Sweet Treats</h2>
    <ul class="products__list">
      <li class="product__item" v-for="product in products">
        <div>
          <img class="product__img" :src="product.imgUrl" :alt="product.name" />
        </div>
        <div>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="product__actions">
            <p class="product__price">£{{ product.price }}</p>
            <button class="product__add-button" @click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.products {
  max-width: 100%;
}

.products__heading {
  margin: 0.5em 0 0.5em 0.5em;
}

.products__list {
  margin: 0 1em;
  padding: 0;
}
.product__item {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-bottom: var(--thin-dashed-border);
  margin: 1em 0;
}

.product__img {
  max-width: 180px;
  border-radius: var(--sm-border-radius);
}

.product__actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
}

.product__price {
  font-size: var(--font-sm);
  font-weight: var(--font-medium);
}

.product__add-button {
  border: var(--solid-thin-border);
  border-radius: var(--sm-border-radius);
  padding: 0.5em 1em;
  background-color: var(--faded-yellow);
  font-size: var(--font-default);
  margin: 1em 0;
}

@media (min-width: 890px) {
  .products {
    max-width: 60%;
    border-right: var(--thin-dashed-border);
  }
}

@media (min-width: 600px) {
  .product__item {
    flex-direction: row;
    gap: 2em;
  }
}
</style>
