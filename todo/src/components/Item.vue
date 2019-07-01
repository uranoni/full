<template>
  <li>
    {{task.text}}
    <button @click="clickBtn('delete')">刪除</button>
    <button @click="clickBtn('edit')">修改</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["task"],
  methods: {
    clickBtn(type) {
      this.$emit("btnClicked", type, this.task);
    }
  }
};
</script>

<style>
</style>
