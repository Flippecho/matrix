<template>
  <div id="card" class="box-shadow">
    <h1>列主元消去法求解线性方程</h1>
    <div id="container">
      <TheCardInput/>
      <TheCardOutput/>
    </div>
  </div>
</template>

<script>
import TheCardInput from "@/backup/TheCardInput";
import TheCardOutput from "@/backup/TheCardOutput";
export default {
  name: "TheCard",
  components: {TheCardOutput, TheCardInput}
}
</script>

<style scoped src="../../public/box-shadow.css"/>
<style scoped>
/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}

#card {
  background: #FFFFFF;
  overflow: hidden;
  width: 80vw;
  left: 10vw;
  height: 80vh;
  top: 5vh;
  border-radius: 21px;
}

h2 {
  width: 100%;
}

#container {
  height: calc(100% - 100px)
}
</style>