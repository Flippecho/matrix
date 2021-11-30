<template>
  <div class="card align-middle box-shadow">
    <div class="card-header"><h1>列主元消去法求解线性方程</h1></div>
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" v-for="row in rows" :key="`th-${row.id}`">x<sub>{{ row.id }}</sub></th>
          <th scope="col">b</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in rows" :key="`tr-${row.id}`">
          <th class="align-middle" scope="row">{{ row.id }}</th>
          <td v-for="item in row.items" :key="`${row.id}-${item.id}`">
            <span>
              <BaseSpan v-model="item.numerator"></BaseSpan>
              <BaseSpan v-model="item.denominator"></BaseSpan>
            </span>
          </td>
          <td>
            <span>
              <BaseSpan v-model="row.itemB.numerator">{{ row.itemB.numerator }}</BaseSpan>
              <BaseSpan v-model="row.itemB.denominator">{{ row.itemB.numerator }}</BaseSpan>
            </span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="control-panel">
      <BaseButton content="增加一组" @click.native="addRow" style="background: #94C35C"></BaseButton>
      <BaseButton content="删除一组" @click.native="removeRow" style="background:#DC6561;"></BaseButton>
      <button class="btn-spin"
              @click="calculate"
              data-content-default="开始解题"
              data-content-spinning="稍等片刻">
      </button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import BaseSpan from "@/components/BaseSpan";

export default {
  name: "TheInputTable",
  components: {BaseSpan, BaseButton},
  data() {
    return {
      count: 3,
      currentStatus: {
        complete: false,
        success: false
      },
      result: [],
      rows: [
        {
          id: 1,
          count: 3,
          itemB: {
            numerator: 6,
            denominator: 1
          },
          items: [
            {
              id: 1,
              numerator: 1,
              denominator: 1
            },
            {
              id: 2,
              numerator: 2,
              denominator: 1
            },
            {
              id: 3,
              numerator: 3,
              denominator: 1
            }
          ]
        },
        {
          id: 2,
          count: 3,
          itemB: {
            numerator: 12,
            denominator: 1
          },
          items: [
            {
              id: 1,
              numerator: 3,
              denominator: 1
            },
            {
              id: 2,
              numerator: 4,
              denominator: 1
            },
            {
              id: 3,
              numerator: 5,
              denominator: 1
            }
          ]
        },
        {
          id: 3,
          count: 3,
          itemB: {
            numerator: 18,
            denominator: 1
          },
          items: [
            {
              id: 1,
              numerator: 5,
              denominator: 1
            },
            {
              id: 2,
              numerator: 6,
              denominator: 1
            },
            {
              id: 3,
              numerator: 7,
              denominator: 1
            }
          ]
        }
      ]
    }
  },
  methods: {
    addRow() {
      this.count++;
      this.rows.push(
          {
            id: this.count,
            count: 0,
            itemB: {
              numerator: 0,
              denominator: 1
            },
            items: []
          }
      );
      this.$nextTick(() => {
        this.addItem()
      });
    },
    removeRow() {
      if (this.count > 0) {
        this.rows.pop();
        this.count--;
        this.removeItem();
      }
    },
    addItem() {
      for (let i = 0; i < this.count - 1; i++) {
        this.rows[i].count++;
        this.rows[i].items.push(
            {
              id: this.count,
              numerator: 0,
              denominator: 1
            }
        );
      }
      var obj = this.rows[this.count - 1];
      for (let i = 0; i < this.count; i++) {
        obj.count++;
        obj.items.push(
            {
              id: obj.count,
              numerator: 0,
              denominator: 1
            }
        )
      }
    },
    removeItem() {
      for (let i = 0; i < this.count; i++) {
        this.rows[i].items.pop();
        this.rows[i].count--;
      }
    },
    changeStatus() {
      this.$emit('changeStatus', this.currentStatus);
    },
    changeResult() {
      this.$emit('changeResult', this.result);
    },
    calculate() {
      //辗转相除法求最大公约数
      function getGCD(a, b) {
        return b ? getGCD(b, a % b) : a;
      }

      //负数始终体现在分子上
      function adjustNegative(fraction) {
        const numerator = fraction.numerator;
        const denominator = fraction.denominator;

        if (numerator < 0 && denominator < 0) {
          return {
            numerator: Math.abs(numerator),
            denominator: Math.abs(denominator),
          };
        } else if (numerator < 0 || denominator < 0) {
          return {
            numerator: -Math.abs(numerator),
            denominator: Math.abs(denominator),
          };
        }

        return fraction;
      }

      //化简成标准形式
      function adjustFraction(fraction) {
        const numerator = fraction.numerator;
        const denominator = fraction.denominator;

        return adjustNegative(
            {
              numerator: numerator / getGCD(numerator, denominator),
              denominator: denominator / getGCD(numerator, denominator)
            }
        )
      }

      //加法运算
      function fractionAddition(fractionA, fractionB) {
        const numeratorA = fractionA.numerator;
        const denominatorA = fractionA.denominator;
        const numeratorB = fractionB.numerator;
        const denominatorB = fractionB.denominator;

        return adjustFraction(
            {
              numerator: numeratorA * denominatorB + numeratorB * denominatorA,
              denominator: denominatorA * denominatorB
            }
        )
      }

      //减法运算
      function fractionSubtraction(fractionA, fractionB) {
        const numeratorA = fractionA.numerator;
        const denominatorA = fractionA.denominator;
        const numeratorB = fractionB.numerator;
        const denominatorB = fractionB.denominator;

        return adjustFraction(
            {
              numerator: numeratorA * denominatorB - numeratorB * denominatorA,
              denominator: denominatorA * denominatorB
            }
        )
      }

      //乘法运算
      function fractionMultiplication(fractionA, fractionB) {
        const numeratorA = fractionA.numerator;
        const denominatorA = fractionA.denominator;
        const numeratorB = fractionB.numerator;
        const denominatorB = fractionB.denominator;

        return adjustFraction({
          numerator: numeratorA * numeratorB,
          denominator: denominatorA * denominatorB
        })
      }

      //除法运算
      function fractionDivision(fractionA, fractionB) {
        const numeratorA = fractionA.numerator;
        const denominatorA = fractionA.denominator;
        const numeratorB = fractionB.numerator;
        const denominatorB = fractionB.denominator;

        return adjustFraction(
            {
              numerator: numeratorA * denominatorB,
              denominator: denominatorA * numeratorB
            }
        )
      }

      //分数转小数并保留三位
      function fractionToDecimal(fraction) {
        const numerator = fraction.numerator;
        const denominator = fraction.denominator;

        return Math.round(numerator / denominator * 1000) / 1000
      }

      //打印增广矩阵
      function printEquation(arr) {
        const n = arr.length;
        let table = {};
        for (let i = 0; i < n; i++) {
          let row = {};
          for (let j = 0; j < n; j++) {
            row[`x` + (j + 1)] = fractionToDecimal(arr[i][j]);
          }
          row['b'] = fractionToDecimal(arr[i][n]);
          table[`#` + (i + 1)] = row;
        }
        console.table(table);
      }

      //初始化
      let arr = [],
          n = this.count;
      //清除 console
      console.clear();
      //清除 result[]
      this.result = [];

      //将数据拷贝到的数组(i行j列)
      for (let i = 0; i < n; i++) {
        //存放第i行的数据
        let row = [];
        for (let j = 0; j < this.count; j++) {
          row.push({
            numerator: this.rows[i].items[j].numerator,
            denominator: this.rows[i].items[j].denominator
          });
        }
        row.push({
          numerator: this.rows[i].itemB.numerator,
          denominator: this.rows[i].itemB.denominator
        });
        arr.push(row);
      }

      console.log("初始增广矩阵为:");
      printEquation(arr);
      console.log("");

      // 每一列都要选主元
      for (let i = 0; i < n; i++) {
        //存储当前列的值为小数（绝对值）
        let tmp = [],
            str = "";
        for (let j = i; j < n; j++) {
          tmp.push(Math.abs(fractionToDecimal(arr[j][i])));
          str = str + " " + fractionToDecimal(arr[j][i]);
        }
        console.log("第", i + 1, "列的元素有:", str);
        //查找当前列最大值
        let max = Math.max.apply(null, tmp);
        let max_index = tmp.indexOf(max) + i;
        console.log("最大值为:", max, "下标为：", max_index + 1);
        //非奇异输出"无解或有无穷解"
        if (max === 0) {
          console.log("");
          console.log("矩阵非奇异,该方程无解或有无穷解");
          this.currentStatus.complete = true;
          this.changeStatus();
          return;
        }
        //交换两行
        else if (max_index !== i) {
          [arr[i], arr[max_index]] = [arr[max_index], arr[i]];
          console.log("交换第", i + 1, "行和第", max_index + 1, "行:");
          printEquation(arr);
        } else {
          console.log("不需要交换");
        }
        // 每一行都要消元
        for (let j = i + 1; j < n; j++) {
          //求解m
          let m = fractionDivision(arr[j][i], arr[i][i]);
          console.log("第", j, "行的 m 为:", fractionToDecimal(m));
          arr[j][i].numerator = 0;
          arr[j][i].denominator = 1;
          //每一行的每一个都要消元
          for (let k = i + 1; k <= n; k++) {
            const jk = arr[j][k], ik = arr[i][k];
            arr[j][k] = fractionSubtraction(jk, fractionMultiplication(m, ik));
          }
          console.log("第", j, "行消元后方程变为:");
          printEquation(arr);
        }
        console.log("");
      }

      console.log("最终增广矩阵化简为:");
      printEquation(arr);

      //回带求解 x
      console.log("\n\n\n开始求解 x \n\n");
      for (let i = n; i >= 1; i--) {
        let x = arr[i - 1][n];
        console.log("第", i, "行的 x 初始值(b)为: " + fractionToDecimal(x));

        for (let j = i + 1; j <= n; j++) {
          let aij = arr[i - 1][j - 1],
              xj = this.result[j - i - 1];
          console.log("第", j, "列的 a 为: " + fractionToDecimal(aij));
          console.log("第", j, "列的 x 为: " + fractionToDecimal(xj));
          x = fractionSubtraction(x, fractionMultiplication(aij, xj));
          console.log("减去后 x 变为: " + fractionToDecimal(x));
        }
        let aii = arr[i - 1][i - 1];
        x = fractionDivision(x, aii);
        console.log("解得第", i, "行的 x 为: " + fractionToDecimal(x) + '\n\n');
        this.result.unshift(x);
      }

      //输出最终结果
      let list = {};
      console.log("解得 x 的值如下表");
      for (let i = 0; i < n; i++) {
        list[`x` + (i + 1)] = fractionToDecimal(this.result[i]);
        //输出时需要添加 id
        this.result[i].id = i + 1;
      }
      console.table(list);
      console.log(this.result);

      this.currentStatus.success = true;
      this.currentStatus.complete = true;
      this.changeResult();
      this.changeStatus();
      return;
    }
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 60vw;
  left: 5vw;
  height: 80vh;
  top: 5vh;
}

#control-panel {
  margin-top: 1em;
  margin-bottom: 1em;
}

td {
  font-size: 21px;
  color: #515151;
  white-space: nowrap;
  overflow: auto;
}

td > span {
  font-size: 11px;
  display: inline-block;
}
</style>