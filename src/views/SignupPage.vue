<template>
  <section class="signup app-main">
    <form @submit.prevent="save">
      <label for="username">Username</label>
      <input
        type="text"
        placeholder="Enter username..."
        v-model="user.username"
        id="username"
      />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
      },
    };
  },
  methods: {
    async save() {
      try {
        await this.$store.dispatch({
          type: "saveUser",
          user: this.user,
        });
        this.$router.push("/");
      } catch (err) {
        console.log("Cannot signup:", err);
      }
    },
  },
};
</script>

<style lang="scss" scope>
.signup {
  input {
    border: 2px solid lightgray;
    border-radius: 3px;
    &:focus {
      border: 2px solid lightblue;
    }
    margin: 10px 0;
  }
}
</style>