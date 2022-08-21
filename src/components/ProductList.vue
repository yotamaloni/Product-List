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
  margin-top: 20px;
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    .product-preview-container {
      padding: 10px;
      width: 100%;
      height: 100px;
      background-color: #f2f6fa;
      border-radius: 10px;
      .actions {
        > * {
          background-color: #5e6c84;
          padding: 10px;
          border-radius: 10px;
          transition: background-color 0.5s;
          color: #fff;
          &:hover {
            background-color: lighten($color: #5e6c84, $amount: 10%);
          }
        }
      }
    }
  }
}
</style>