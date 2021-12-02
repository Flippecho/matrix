
<template>
  <div>
    <button @click="changeVal(-1)">-1</button>
    <span>{{currentVal}}</span>
    <button @click="changeVal(1)">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number // 定义value属性
    }
  },
  data() {
    return {
      currentVal: this.value
    };
  },
  methods: {
    changeVal(val) {
      this.currentVal += parseInt(val);
      this.$emit("input", this.currentVal); // 定义input事件
    }
  }
};
</script>