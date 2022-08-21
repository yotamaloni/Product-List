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
    <!-- <pre>{{ product.times.makeDays }}</pre>
    <pre>{{ product.times.available_days_of_week }}</pre>
    <pre>{{ product.times.excludeDates }}</pre> -->
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
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  height: 100%;
  width: 100%;
  > * {
    width: 100%;
    display: flex;
    gap: 10px;
    span {
      font-weight: bold;
    }
  }
  img {
    height: inherit;
  }
}
</style>