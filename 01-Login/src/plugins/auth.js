/* eslint-disable no-unused-labels */

import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";
import authService from "../auth/authService";

// let client;

export const Auth0Mixin = {
  data() {
    return {
      auth0: null
    };
  },
  computed: {
    isAuthenticated: async () => await this.$auth0.isAuthenticated(),
    isLoading: async () => await this.$auth0.isLoading(),
    profile: () => ({
      email: "elkdanger@gmail.com",
      picture: null,
      name: "Steve"
    })
  },

  created() {
    console.log(this);
  },

  methods: {
    async loginWithRedirect() {
      await this.$auth0.loginWithRedirect({
        redirect_uri: window.location.origin
      });
    },

    logout() {
      this.$auth0.logout();
    }
  }
};

export default {
  install(Vue) {
    Vue.prototype.$auth = authService;

    Vue.prototype.$auth0 = createAuth0Client({
      domain: "elkdanger.eu.auth0.com",
      clientId: "sdoiufuidf"
    });
  }
};
