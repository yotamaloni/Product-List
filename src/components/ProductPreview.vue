<template>
  <section class="product-preview flex align-center">
    <h3>{{ product.name }}</h3>
    <h2>{{ product.price }}</h2>
  </section>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>


<style lang="scss" scoped>
.product-preview {
  gap: 20px;
  height: 100%;
  img {
    height: inherit;
  }
}
</style>