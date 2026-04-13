<script setup>
import { ref } from "vue";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart.vue";
import ProductList from "@/components/ShoppingCart/ProductList.vue";

const cart = ref([]);

const addToCart = (product) => {
  const existingItem = cart.value.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({
      ...product,
      quantity: 1,
    });
  }
};
</script>
<template>
  <div class="shop">
    <ProductList @add-to-cart="addToCart" />
    <ShoppingCart :cart="cart" />
  </div>
</template>
<style scoped>
.shop {
  display: flex;
  margin: 1.5em 0;
  flex-direction: column;
}

@media (min-width: 890px) {
  .shop {
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>
