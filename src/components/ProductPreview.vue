<template>
  <section class="product-preview flex align-center">
    <div>
      <p>מוצר:</p>
      <p>
        <span>{{ product.name }}</span>
      </p>
    </div>
    <div>
      <p>מחיר:</p>
      <p>
        <span>{{ product.price }} ₪</span>
      </p>
    </div>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  > * {
    width: 100%;
    display: flex;
    gap: 10px;
    span {
      font-weight: bold;
    }
  }
}
</style>