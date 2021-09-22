<template>
  <section style="width: 100%">
    <NavMain />
    <v-content style="clear: both;padding: 2%;margin:0;width: 100%">
      <!-- <v-alert
        outlined
        type="warning"
        prominent
        border="left"
      >Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor.
      </v-alert>-->
      <h1>Welcome to {{getAppName}}</h1>
      <p class="text-muted">What are we doing today?</p>
      <v-img
        v-bind:alt="getAppName"
        v-bind:title="getAppName"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="80%"
        style="margin-left: 50px;"
        src="../assets/zero-stress.svg"
        width="200"
      />
    </v-content>
    <Footer />
  </section>
</template>

<script>
import store from "../store";
import NavMain from "../components/Navs/NavMain.vue";
import Footer from "../components/Footers/Footer.vue";
import { appMixin } from "../mixins/appMixin.js";

export default {
  name: "Dashboard",
  mixins: [appMixin],
  components: {
    NavMain,
    Footer
  },
  created: function() {
    // this.isLoggedIn();
  },
  data: function() {
    return {};
  },
  computed: {
    getAppName() {
      return store.state.commonStore.appName;
    }
  },
  methods: {}
};
</script>
