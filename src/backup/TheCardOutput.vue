<template>
  <div id="the-card-output">
    <h2 v-if="success">方程有解</h2>
    <h2 v-else-if="complete">方程无解或有无穷解</h2>
    <h2 v-else>使用说明</h2>
    <div v-if="success">
      <div class="container" v-for="item in items" :key="item.id">
          X<sub>{{ item.id }}</sub> = (<span><span>{{ item.numerator }}</span>
          <span>{{ item.denominator }}</span></span>) =
          {{item.result}}
      </div>
    </div>
    <p v-else-if="complete">可以检查一下有没有输错哦！</p>
    <div v-else id="description">
      <p>1、点击分子、分母即可修改</p>
      <p>2、不兼容上古产品 "IE 浏览器"</p>
      <p>3、为了您和眼睛的身心健康</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp;不建议设置 6 组以上</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCardOutput",
  data() {
    return {
      complete: false,
      success: false,
      items: [
        {
          id: 1,
          result: 0,
          numerator: 0,
          denominator: 1
        },
        {
          id: 2,
          result: 0,
          numerator: 0,
          denominator: 1
        },
        {
          id: 3,
          result: 0,
          numerator: 0,
          denominator: 1
        },
        {
          id: 4,
          result: 0,
          numerator: 0,
          denominator: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}

#the-card-output {
  width: 30%;
  height: 100%;
  float: right;
  overflow: auto;
}

#description {
  text-align: left;
  display: table;
  margin: 0 auto;
}

.container {
  font-size: 20px;
  color: #515151;
}

.container > span {
  font-size: 9px;
  display: inline-block;
}

.container > span > span {
  display: block;
  padding: 0 5px;
  position: relative;
  top: 5px;
}

.container > span > span:first-child {
  border-bottom: 1px solid #515151;
  color: green;
}

.container > span > span:last-child {
  color: tomato;
}
</style>