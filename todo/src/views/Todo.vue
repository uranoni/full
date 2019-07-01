<template>
  <div>
    <Inp v-on:listen="pushto" :type="type"></Inp>
    <ul v-if="todo">
      <Item v-for="task in todo" :key="task._id" :task="task" @btnClicked="btnClickedHandler"></Item>
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
      todo: null,
      type: "add",
      selectTask: null
    };
  },
  methods: {
    pushto(text) {
      console.log(text);
      if (this.type == "add") {
        axios
          .post("/create", { text })
          .then(res => {
            this.todo.push(res.data);
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      } else if (this.type == "edit") {
        axios
          .patch(`/update/${this.selectTask._id}`, { text })
          .then(res => {
            const oldTodo = this.todo.find(el => res.data._id === el._id);
            oldTodo.text = res.data.text;
            console.log(res.data);
            this.type = "add";
            this.selectTask = null;
          })
          .catch(err => {
            console.log(err);
            this.type = "add";
            this.selectTask = null;
          });
      }
    },

    btnClickedHandler(type, task) {
      if (type == "delete") {
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
      } else if (type == "edit") {
        this.type = "edit";
        this.selectTask = task;
      }
    }
  }
};
</script>

<style>
</style>
