<template>
  <section class="app-header flex space-between align-center">
    <h3>ממיין המוצרים</h3>
    <nav>
      <RouterLink class="clean-link" to="/">בית</RouterLink> |
      <RouterLink class="clean-link" to="/signup">הרשם</RouterLink> |
      <RouterLink class="clean-link" to="/products">מוצרים</RouterLink> 
    </nav>
  </section>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.app-header{
  height: 100px;
}
</style>