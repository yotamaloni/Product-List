<template>
  <section class="app-header flex space-between align-center">
    <a class="logo" href="/">מצא את המוצר</a>
    <nav>
      <RouterLink class="clean-link" class-active="active-link" to="/"
        >בית</RouterLink
      >
      |
      <RouterLink class="clean-link" class-active="active-link" to="/products"
        >מוצרים</RouterLink
      >
    </nav>
  </section>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.app-header {
  height: 100px;
  color: #fff;
  padding: 0 20px;
  background-color: #172b4d;
  nav {
    > * {
      font-weight: 600;
      transition: color 0.5s ease;
      &:hover,
      &.active-link {
        color: tomato;
      }
    }
  }
  .logo {
    text-decoration: none;
    transition: color 0.5s ease;
    font-family: rubikDrift;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}
</style>