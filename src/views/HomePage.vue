<template>
  <section class="home-page">
    <div className="txt-container">
      <p className="site-description">
        זאת ההזמדנות שלך למצוא את המוצרים עליהם חלמת! תוכל לבדוק בקלות את זמינות
        המוצרים בכל תאריך שידרש. כל שעליך לעשות הוא לעבור לעמוד המוצרים, לבחור
        .את התאריך המבוקש ומיד תקבל את רשימת המוצרים הזמינים
      </p>
      <RouterLink class="clean-link" to="/products">
        <button>לעמוד המוצרים</button>
      </RouterLink>
    </div>
    <div class="img-container">
      <img
        src="https://res.cloudinary.com/dnft2vfvz/image/upload/v1661114965/Media%20maven/utdwdxpujrcndj40nqpp.jpg"
        alt=""
      />
    </div>
  </section>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      bitcoin: {
        rate: null,
      },
    };
  },
  async created() {},
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
  max-width: 500px;
  align-self: center;
  text-align: center;
  margin: auto;
  .txt-container {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    margin-bottom: 20px;

    p {
      margin-bottom: 20px;
    }
    button {
      padding: 10px 10px;
      max-width: 150px;
      border: none;
      background-color: #172b4d;
      color: #fff;
      font-size: 1rem;
      transition: background-color 0.5s ease;
      font-weight: 600;
      &:hover {
        background-color: lighten(#172b4d, 20%);
      }
    }
  }
  .img-container {
    max-width: 500px;

    img {
      width: 100%;
      border-radius: 5px;
      min-width: 250px;
    }
  }
}
</style>