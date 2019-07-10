<template>
  <div class="shopcar-container">
    购物车
    <button @click="show">点击</button>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";

export default {
  data() {
    return {};
  },
  methods: {
    show() {
      MessageBox({
        title: "打扰了",
        message: "Are you sure?",
        showCancelButton: true
      });
    }
  }
};
</script>

