<template>
  <div id="app">
    <nav-bar/>
    <div class="container mt-5">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import "jquery";
import "samples-bootstrap-theme";
import "samples-bootstrap-theme/dist/css/auth0-theme.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    appFooter: Footer
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch {
      // Supress the 'not logged in' error as we can illegitimately get that
      // when processing the callback url
    }
  }
};
</script>
