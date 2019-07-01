<template>
  <div>
    <Inp v-on:listen="pushto"></Inp>
    <ul v-if="todo">
      <Item v-for="task in todo" :key="task._id" :task="task" @click.native="removeItem(task)"></Item>
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
    axios.get("/todos").then(({ data }) => {
      this.todo = data;
    });
  },
  data: () => {
    return {
      todo: null
    };
  },
  methods: {
    pushto(text) {
      console.log(text);

      axios
        .post("/create", { text })
        .then(res => {
          this.todo.push(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeItem(task) {
      axios
        .delete(`/todo/${task._id}`)
        .then(({ data }) => {
          this.todo = this.todo.filter(el => {
            return el._id != data._id;
          });
        })
        .catch(err => {
          console.log("error");
        });
    }
  }
};
</script>

<style>
</style>
