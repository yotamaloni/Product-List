<template>
  <section class="product-list">
    <ul class="clean-list">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-preview-container flex align-center space-between"
      >
        <ProductPreview :product="product" />
      </li>
    </ul>
  </section>
</template>

<script>
import ProductPreview from "@/components/ProductPreview.vue";

export default {
  props: {
    products: Array,
  },
  components: {
    ProductPreview,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>


<style lang="scss" scoped>
.product-list {
  font-size: 0.875rem;
  margin-top: 20px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    width: 100%;
    gap: 20px;
    .product-preview-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      height: 100px;
      background-color: #f2f6fa;
      border-radius: 10px;
      transition: background-color 0.5s ease;
      &:hover {
        background-color: darken(#f2f6fa, 10%);
      }
    }
  }
}
</style>