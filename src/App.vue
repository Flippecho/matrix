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
  color: #3C374A;
  background-image: linear-gradient(transparent 98%, #BDBDBD 98%),
  linear-gradient(to right, transparent 98%, #BDBDBD 98%);
  background-size: 30px 30px;
  background-repeat: repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: hidden;
}
</style>
