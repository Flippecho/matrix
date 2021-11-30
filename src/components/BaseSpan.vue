<template>
    <span contenteditable="true" @focus="selectText" @input="changeVal($event.target.innerText)">{{currentVal}}</span>
</template>

<script>
export default {
  name: "BaseSpan",
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
    selectText: function () {
      setTimeout(function() {
        document.execCommand('selectAll', false, null)
      }, 0);
    },
    changeVal(val) {
      this.$emit("input", parseInt(val)); // 定义input事件
    }
  }
}
</script>

<style scoped>
span {
  display: block;
  padding: 0 5px;
  position: relative;
  top: 5px;
}

span:first-child {
  border-bottom: 1px solid #515151;
  color: green;
}

span:last-child {
  color: tomato;
}
</style>