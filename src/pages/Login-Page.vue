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
            label="email"
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
            label="Password"
            type="password"
            placeholder="Password"
            v-model="login.password"
          >
          </q-input>
        </q-form>
        <q-btn
          label="login"
          class="full-width"
          type="submit"
          @click="submitForm"
        ></q-btn>

        <q-btn
          to="/signup"
          label="Not a user? Click here to sign up!"
          class="full-width"
          type="submit"
        ></q-btn>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import { directus } from "src/directus";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await directus.auth.login({
          email: this.login.email,
          password: this.login.password,
          mode: "cookie",
        });
        this.$router.push("/home");
      } catch (error) {
        this.$q.notify({
          message: error.message,
        });
      }
    },
  },
};
</script>
