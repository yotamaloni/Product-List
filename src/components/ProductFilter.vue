<template>
  <section class="product-filter">
    <Datepicker
      v-model="date"
      :format="format"
      @update:modelValue="setFilter()"
      :minDate="minDate"
      :maxDate="maxDate"
    />
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    const date = ref();
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    return {
      date,
      format,
    };
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", this.date);
    },
  },
  computed: {
    maxDate() {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 14);
      return maxDate;
    },
    minDate() {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 1);
      return maxDate;
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