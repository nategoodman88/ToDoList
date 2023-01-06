<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="row justify-left">
        <q-input dark outlined v-model="todoTask" label="Input Task">
          <template v-slot:append>
            <q-btn round dense flat icon="add" @click="addItem" label />
          </template>
        </q-input>
      </div>
    </q-card-section>

    <q-card-section v-if="todoList.length > 0">
      <div
        class="row justify-left"
        v-for="(item, index) in todoList"
        :key="index"
      >
        <div class="col-8 q-py-md">
          {{ item.value }}
        </div>
        <div class="col-auto q-py-md">
          <q-btn round dense flat icon="done" @click="clearItem" label />
        </div>
      </div>
    </q-card-section>

    <q-card-section v-else>
      <div class="row justify-left">
        <div class="col-8 q-py-md">
          <div class="text-h5">List is empty...</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      todoTask: "",
      todoList: [],
    };
  },

  methods: {
    currentItemAlreadyExists() {
      let itemAlreadyExists = false;
      this.todoList.forEach((itemInList) => {
        if (itemInList.value === this.todoTask) {
          itemAlreadyExists = true;
        }
      });
      return itemAlreadyExists;
    },
    addItem() {
      if (!this.currentItemAlreadyExists()) {
        this.todoList.push({ value: this.todoTask });
        this.$q.notify({
          message: "Task added!",
        });
      } else {
        this.$q.notify({
          message: "This task is already in the list!",
        });
      }
    },
    clearItem() {
      this.todoList.pop({ value: this.todoTask });
      this.$q.notify({
        message: "Task completed!",
      });
    },
  },
});
</script>
