<template>
  <div>
    <Inp v-on:listen="pushto"></Inp>
    <ul>
      <Item v-for="(task,idx) in todo" :key="idx" :task="task"></Item>
    </ul>
  </div>
</template>

<script>
import Inp from "../components/Input";
import Item from "../components/Item";
export default {
  name: "Todo",
  components: {
    Item,
    Inp
  },
  mounted() {
    
  },
  data: () => {
    return {
      todo: []
    };
  },
  methods: {
    pushto(text) {
      console.log(text);
      this.todo.push(text);
    }
  }
};
</script>

<style>
</style>
