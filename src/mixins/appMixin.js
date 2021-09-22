import store from "../store";

export const appMixin = {
  methods: {
    logout() {
      localStorage.setItem("isLogin", false);
      localStorage.setItem("token", "");
      store.commit(store.state.setTokenLocalStorageKey, "");
      store.commit(store.state.setIsLoginLocalStorageKey, false);
      this.$router.push("Login");
    },
    isLoggedIn() {
      let tempToken = localStorage.getItem(store.state.setTokenLocalStorageKey);
      if (tempToken === "") {
        this.$router.push("Login");
      }
    },
    isLoggedAsInec() {
      let isLogin = localStorage.getItem(store.state.setIsLoginLocalStorageKey);
      if (!isLogin) {
        this.$router.push("Login");
      }
    },
    isLoggedInAsVoter() {
      let loginAsVoter = localStorage.getItem(
        store.state.setIsLoginAsVoterLocalStorageKey
      );
      if (!loginAsVoter) {
        this.$router.push("LoginVoters");
      }
    }
  }
};
