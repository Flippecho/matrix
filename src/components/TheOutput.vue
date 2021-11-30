<template>
  <div class="card box-shadow">
    <div class="card-header">
      <h1 v-if="currentStatus.success">方程有解</h1>
      <h1 v-else-if="currentStatus.complete">方程无解或有无穷解</h1>
      <h1 v-else>使用说明</h1>
    </div>
    <ul v-if="currentStatus.success" class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in currentResult" :key="item.id">
        X<sub>{{ item.id }}</sub> = (<span><span>{{ item.numerator }}</span>
        <span>{{ item.denominator }}</span></span>) =
        {{ item.numerator / item.denominator }}
      </li>
      <li class="list-group-item"></li>
    </ul>
    <ul v-else-if="currentStatus.complete" class="list-group list-group-flush">
      <li class="list-group-item" style="text-align: center">可以检查一下有没有输错哦！</li>
      <li class="list-group-item"></li>
    </ul>
    <ul v-else class="list-group list-group-flush">
      <li class="list-group-item">1、点击分子、分母即可修改</li>
      <li class="list-group-item">2、按下 "F12" 可查看解题过程</li>
      <li class="list-group-item">3、不兼容上古浏览器 "IE"</li>
      <li class="list-group-item">&nbsp; &nbsp; &nbsp;Oops! 他们看不到上面这句话</li>
      <li class="list-group-item">4、为了您和眼睛的身心健康</li>
      <li class="list-group-item">&nbsp; &nbsp; &nbsp;不建议设置超过 8 组数据</li>
      <li class="list-group-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheCardOutput",
  props: ['status', 'result'],
  computed: {
    currentStatus() {
      if(this.status) return this.status;
      else return this.initStatus;
    },
    currentResult() {
      if(this.result) return this.result;
      else return this.initResult;
    }
  },
  data() {
    return {
      initStatus: {
        success: false,
        complete: false
      },
      initResult: [
        {
          id: 1,
          numerator: 0,
          denominator: 1
        },
        {
          id: 2,
          numerator: 0,
          denominator: 1
        },
        {
          id: 3,
          numerator: 0,
          denominator: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  float: right;
  width: 20vw;
  right: 5vw;
  height: 80vh;
  top: 5vh;
  overflow: auto;
}

.list-group {
  text-align: left;
}

li > span {
  font-size: 9px;
  display: inline-block;
}

li > span > span {
  display: block;
  padding: 0 5px;
  position: relative;
  top: 5px;
}

li > span > span:first-child {
  border-bottom: 1px solid #515151;
  color: green;
}

li > span > span:last-child {
  color: tomato;
}
</style>