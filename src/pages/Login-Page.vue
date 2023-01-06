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
import { Directus } from "@directus/sdk";

const config = {
  auth: {
    mode: "json",
    autoRefresh: true,
    msRefreshBeforeExpires: 30000,
    staticToken: "J31wVPnvJs_uutXQO-QRJ900efpRsq-c",
  },
};

const directus = new Directus("https://yb940bgp.directus.app/");

async function testDirectus() {
  let authenticated = false;

  await directus.auth.refresh().then(() => {
    authenticated = true;
  });

  const publicData = await directus
    .items("Users")
    .readByQuery({ sort: ["id"] });
  console.log(publicData.data);
}

window.onload = () => {
  testDirectus();
};
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.login.username || !this.login.password) {
        this.$q.notify({
          message: "Wrong username or password!",
        });
      } else {
        window.location.href = "#/home";
      }
    },
  },
};
</script>
