<template>
  <section class="product-filter">
    <Datepicker v-model="date" utc @update:modelValue="setFilter()" />
  </section>
</template>

<script>
import { computed, ref } from "vue";

export default {
  data() {
    const date = ref();
    return {
      date,
    };
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", this.date);
    },
  },
};
</script>


<style lang="scss" scoped>
.product-filter {
  direction: ltr;
  display: flex;
  justify-content: flex-start;
  img {
    height: inherit;
  }
}
</style>