<template>
  <span>
    <span contenteditable="true" @focus="selectText"></span>
    <span contenteditable="true" @focus="selectText"></span>
  </span>
</template>

<script>
export default {
  name: "BaseFraction",
  props: {
    value: {
      type: Number // 定义value属性
    }
  },
  methods: {
    selectText: function () {
      setTimeout(function() {
        document.execCommand('selectAll', false, null)
      }, 0);
    }
  }
}
</script>

<style scoped>

</style>