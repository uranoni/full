<template>
  <div>
    <input type="text" v-on:keyup.enter="submit" v-model="text" />
    <button @click="submit">{{type == 'add'? '送出': '修改'}}</button>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["type"],
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
