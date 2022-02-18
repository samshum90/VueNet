import Vue from "vue";
import FirstComponent from "./FirstComponent.vue";

new Vue({
  el: "#app",
  components: {
    FirstComponent,
  },
  data() {
    return {
      vueMessage: "Message from Vue",
    };
  },
  methods: {
    toggleModal() {
      this.$refs.modal.open();
    },
  },
});
