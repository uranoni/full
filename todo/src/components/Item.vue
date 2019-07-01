<template>
  <li>{{task.text}}</li>
</template>

<script>
export default {
  name: "Item",
  props: ["task", "idx"],
  methods: {}
};
</script>

<style>
</style>
