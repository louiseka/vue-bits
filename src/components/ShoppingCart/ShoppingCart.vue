<script setup>
defineProps({
  cart: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <section class="cart">
    <h2 class="cart__heading">Your Shopping Cart</h2>
    <p v-if="cart.length === 0">Your cart is empty</p>
    <ul v-else class="cart__list">
      <li v-for="item in cart" :key="item.id" class="cart__item">
        {{ item.quantity }}x {{ item.name }} - £{{
          (item.price * item.quantity).toFixed(2)
        }}
      </li>
    </ul>
    <p v-if="cart.length" class="cart__total">
      Total: £{{
        cart
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)
      }}
    </p>
  </section>
</template>
<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  margin: 0 1em;
}

.cart__heading {
  margin: 0.5em 0;
}

.cart__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart__item {
  border-bottom: var(--thin-dashed-border);
  padding: 0.5em 0;
}

.cart__total {
  margin: 1em 0;
  padding: 0.5em 0;
}
</style>
