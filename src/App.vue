<template>
  <section class="app-container">
  <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </section>
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


<style lang="scss" scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex-grow: 1;
  }
}
</style>





