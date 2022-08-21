<template>
  <section class="product-app app-main">
    <div class="date-container">
      <h4>אנא בחר תאריך</h4>
      <ProductFilter @set-filter="setFilter" />
    </div>

    <h3>רשימת מוצרים זמינים</h3>
    <pre v-if="products">{{ product }}</pre>
    <ProductList v-if="products" :products="products" />
  </section>
</template>


<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import productService from "@/services/products.service.js";
import { ref, computed } from "vue";

export default {
  components: {
    ProductList,
    ProductFilter,
  },
  data() {
    const date = ref();
    return {
      products: null,
      filterBy: null,
      date,
    };
  },

  async created() {
    this.products = await productService.query();
  },
  methods: {
    async setFilter(date) {
      this.filterBy = { date };
      this.products = await productService.query(this.filterBy);
    },
  },
  computed: {},
};
</script>


<style lang="scss" scoped>
.product-app {
  .date-container {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
    h3 {
      text-transform: capitalize;
    }
  }
}
</style>