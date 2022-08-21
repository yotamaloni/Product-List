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
};
</script>


<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;

  main {
    flex-grow: 1;
    margin: 20px 20px;
  }
}
</style>





