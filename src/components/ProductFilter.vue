<template>
  <Datepicker v-model="date" utc    />
  <pre>{{date}}</pre>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    data() {
        const date = ref();
        return {
          date,
        }
    }
}
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