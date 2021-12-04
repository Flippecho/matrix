<template>
  <div class="card box-shadow">
    <div class="card-header">
      <h1 v-if="currentStatus.successFlag">方程有解</h1>
      <h1 v-else>使用说明</h1>
    </div>
    <div v-if="currentStatus.successFlag" class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">分数形式</th>
          <th scope="col">小数形式</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in currentResult" :key="item.id">
          <th class="align-middle" scope="row">X<sub>{{ item.id }}</sub></th>
          <td>
            <span>
              <span>{{ item.numerator }}</span>
              <span>{{ item.denominator }}</span>
            </span>
          </td>
          <td class="align-middle">
            {{Math.round(item.numerator / item.denominator * 1000) / 1000}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <ul v-else class="list-group list-group-flush">
      <li class="list-group-item">1、点击分子、分母即可修改</li>
      <li class="list-group-item">2、目前仅支持输入整数</li>
      <li class="list-group-item">3、按下 "F12" 可查看解题过程</li>
      <li class="list-group-item">4、不兼容上古浏览器 "IE"</li>
      <li class="list-group-item">&nbsp; &nbsp; &nbsp;Oops! 他们看不到上面这句话</li>
      <li class="list-group-item">5、为了您和眼睛的身心健康</li>
      <li class="list-group-item">&nbsp; &nbsp; &nbsp;不建议设置超过 8 组数据</li>
      <li class="list-group-item">6、暂未适配移动端</li>
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
      if (this.status) return this.status;
      else return this.initStatus;
    },
    currentResult() {
      if (this.result) return this.result;
      else return this.initResult;
    }
  },
  data() {
    return {
      initStatus: {
        successFlag: false
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
  height: 85vh;
  top: 5vh;
  overflow: auto;
}

td > span {
  font-size: 9px;
  display: inline-block;
}

td > span > span {
  display: block;
  padding: 0 5px;
  position: relative;
  top: 5px;
}

td > span > span:first-child {
  border-bottom: 1px solid #515151;
  color: green;
}

td > span > span:last-child {
  color: tomato;
}
</style>