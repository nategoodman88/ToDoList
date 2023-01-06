<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <div class="row justify-left">
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            filled
            dark
            outlined
            label="Email"
            placeholder="email@example.com"
            v-model="login.email"
          >
          </q-input>
        </q-form>
        <q-form class="q-gutter-md">
          <q-input
            filled
            dark
            outlined
            label="Username"
            placeholder="User"
            v-model="login.username"
          >
          </q-input>
        </q-form>
        <q-form class="q-gutter-md">
          <q-input
            filled
            dark
            outlined
            label="Password"
            type="password"
            placeholder="Password"
            v-model="login.password"
          >
          </q-input>
        </q-form>
        <q-btn label="signup" class="full-width" @click="submitForm"></q-btn>
        <q-btn
          to="/login"
          label="Already a user? Click here to log in!"
          class="full-width"
          type="submit"
        ></q-btn>
      </q-card-section>
    </div>
  </q-card>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.login.email || !this.login.username || !this.login.password) {
        this.$q.notify({
          message: "Invalid username, passowrd, or email!",
        });
      } else {
        window.location.href = "#/";
      }
    },
  },
};
</script>
