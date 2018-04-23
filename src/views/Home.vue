<template>
  <div class="page">
    <async-component/>
  </div>
</template>

<script>
import Vue from "vue";
import InlineEdit from "../components/InlineEdit";
import AsyncComponent from "../components/AsyncComponent.js";

export default {
  name: "home",
  components: {
    InlineEdit,
    AsyncComponent: AsyncComponent(1)
  },
  computed: {
    document() {
      return this.$store.state.currentDocument;
    }
  },
  watch: {
    document: {
      handler: function(value) {
        this.$store.dispatch("updateCurrentDocument", {
          value
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="postcss">
.page {
  max-width: 40rem;
  margin: 0 auto;
}
</style>
