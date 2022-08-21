<template>
  <section class="home-page app-main flex column align-center">
    <!-- <p v-if="user">
      Welcome <span>{{ user.username }}</span>
    </p> -->
    <!-- <p v-if="bitcoin.rate">
      Bitcoin rate <span>{{ bitcoin.rate }}</span>
    </p> -->
  </section>
</template>


<script>
export default {
  components: {
  },
  data() {
    return {
      bitcoin: {
        rate: null,
      },
    };
  },
  async created() {
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>


<style lang="scss" scoped>
.home-page {
  gap: 20px;
  p {
    span {
      font-weight: bold;
    }
  }
}
</style>