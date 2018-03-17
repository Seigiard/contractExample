<template>
  <span
    class="editable-area"
    contenteditable="true"
    v-on="listeners"
    v-text="renderValue"
    :style="{ 'min-width': $attrs.width }"></span>
</template>

<script>
import { position } from "caret-pos";

export default {
  name: "InlineEdit",
  inheritAttrs: false,
  props: ["value"],
  data: () => ({
    renderValue: ""
  }),
  created() {
    this.renderValue = this.value;
  },
  methods: {
    emitInput(event) {
      const text = event.target.innerText;
      const html = event.target.innerHTML;
      if (text !== html) {
        // save caret position
        const caretPosition = position(event.target);
        event.target.innerHTML = text;
        // restore caret position
        position(event.target, caretPosition.pos);
      }

      this.$emit("input", event.target.innerText);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.emitInput
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.editable-area {
  font-size: 1em;
  border: 1px solid #ddd;
  border-width: 0 0 1px;
  outline: none;

  &:empty {
    display: inline-block;
  }

  &:focus {
    outline: none;
    border-color: #009;
  }
}
</style>
