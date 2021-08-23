<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header
      title="Info - Base de Conhecimento"
      :hideToggle="!user"
      :hideUserDropdown="!user"
    />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

import { baseApiUrl, userKey } from "./global";

import Header from "./components/templates/Header.vue";
import Menu from "./components/templates/Menu.vue";
import Loading from "./components/templates/Loading.vue";
import Content from "./components/templates/Content.vue";
import Footer from "./components/templates/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Loading,
    Content,
    Footer,
  } /* componentes importados */,
  computed: mapState([
    "isMenuVisible",
    "user",
  ]) /* component importado para possibilitar a "animação do menu" */,
  data: function () {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "auth" });
        return;
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.$store.commit("setUser", userData);

        if (this.$mq === "xs" || this.$mq === "sm") {
          this.$store.commit("toggleMenu", false);
        }

      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "auth" });
      }

      this.validatingToken = false;
    },
  },
  created() {
    this.validateToken();
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased; /* suaviza a fonte da aplicação */
  -moz-osx-font-smoothing: grayscale; /* suaviza a fonte da aplicação */

  height: 100vh; /* faz a aplicação ocupar toda a altura */
  display: grid; /* irá organizar os templates */
  grid-template-rows: 60px 1fr 40px; /* estabelece o espaço de cada template orientado a linha */
  grid-template-columns: 300px 1fr; /* estabelece o espaço de cada template orientado a coluna */
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}
#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>