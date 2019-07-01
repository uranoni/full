<template>
  <div>
    <input type="text" v-on:keyup.enter="submit" v-model="text">
    <button @click="submit">送出</button>
  </div>
</template>

<script>
export default {
  name: "Input",
  data: () => {
    return {
      text: ""
    };
  },
  methods: {
    submit() {
      this.$emit("listen", this.text);
      this.text = "";
    }
  }
};
</script>

<style>
</style>
