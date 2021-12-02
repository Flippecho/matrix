<template>
  <div id="app">
    <TheInput @changeStatus="changeStatus" @changeResult="changeResult"/>
    <TheOutput :status="status" :result="result"/>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheInput from "@/components/TheInput";
import TheOutput from "@/components/TheOutput";

export default {
  name: 'App',
  components: { TheInput, TheOutput, TheFooter},
  data() {
    return {
      status: {},
      result: []
    }
  },
  methods: {
    changeStatus(status) {
      this.status = status;
    },
    changeResult(result) {
      this.result = result;
    }
  }
}
</script>
<style>

#app {
  height: 100vh;
  overflow: hidden;
}
</style>
