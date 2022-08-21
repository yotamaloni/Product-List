<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  async created() {
    this.$store.dispatch({ type: "setUser" });
  },
};
</script>


