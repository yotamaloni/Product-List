<template>
  <section class="product-app app-main">
    <h3>Product list</h3>
    <pre v-if="products">{{ product }}</pre>
    <ProductFilter @set-filter="setFilter" />
    <ProductList v-if="products" :products="products" />
  </section>
</template>


<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import productService from "@/services/products.service.js";
export default {
  components: {
    ProductList,
    ProductFilter
  },
  data() {
    return {
      filterBy: null,
      products: null,
    };
  },
  async created() {
    this.products = await productService.query();
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    // contactsToShow() {
    //   if (!this.filterBy) return this.contacts;
    //   const regex = new RegExp(this.filterBy.name, "i");
    //   return this.contacts.filter((contact) => {
    //     return (
    //       regex.test(contact.name) ||
    //       regex.test(contact.phone) ||
    //       regex.test(contact.email)
    //     );
    //   });
    // },
  },
};
</script>


<style lang="scss" scoped>
.product-app {
  h3 {
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  .actions {
    > * {
      background-color: #5e6c84;
      padding: 5px 5px;
      border-radius: 10px;
      transition: background-color 0.5s;
      color: #fff;
      &:hover {
        background-color: lighten($color: #5e6c84, $amount: 10%);
      }
    }
    margin: 20px 0;
  }
}
</style>