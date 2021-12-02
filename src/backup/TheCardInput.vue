<template>
  <div id="the-card-input">
    <h2>请在下方输入线性方程组后点击"开始解题"按钮</h2>
    <div id="container">
        <the-card-input-row :test="count" :test2="row.id" v-for="row in rows" :key="row.id"/>
    </div>
    <div id="control-panel">
      <BaseButton content="增加一组" @click.native="addRow" style="background: #94C35C"></BaseButton>
      <BaseButton content="删除一组" @click.native="removeRow" style="background:#DC6561;"></BaseButton>
      <span id="info" style="background:#DFAA3F;">
        <span>快速调整为 </span>
        <span contenteditable="true">{{count}}</span>
        <span> 组</span>
      </span>
      <button class="btn-go"
              data-content-default="开始解题"
              data-content-spinning="稍等片刻">
      </button>
    </div>
  </div>
</template>

<script>
import TheCardInputRow from "@/backup/TheCardInputRow";
import BaseButton from "@/components/BaseButton";

export default {
  name: "TheCardInput",
  components: {
    BaseButton,
    TheCardInputRow
  },
  data() {
    return {
      count: 4,
      rows: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ]
    }
  },
  methods: {
    addRow: function () {
      this.rows.push(
          {
            id: this.count+1
          }
      );
      this.$nextTick(()=>{this.count++});
    },
    removeRow: function () {
      this.rows.pop();
      if(this.count > 0) this.count--;
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

#the-card-input {
  width: 70%;
  height: 100%;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  border-style: dotted;
  border-width: 0 2px 0 0;
}

h2 {
  height: 2rem;
  margin: 1rem;
}

#container {
  width: 100%;
  margin: 0;
  height: calc(100% - 6rem);
  overflow: auto;
}

#control-panel {
  height: 3rem;
  margin: 1rem;
  bottom: 1rem;
  white-space: nowrap;
  overflow: auto;
}

#info {
  font-weight: 700;
  font-size: 1rem;
  border: none;
  outline: none;
  min-width: 150px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #FFFFFF;
  letter-spacing: 2px;
  width: auto;
  padding: 11px;
  border: 0;
  border-radius: 7px;
  margin-left: 21px;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8) inset,
  1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.btn-go {
  background-color: #4D79C2;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  outline: none;
  min-width: 150px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #FFFFFF;
  letter-spacing: 2px;
  width: auto;
  padding: 11px;
  border: 0;
  border-radius: 7px;
  margin-left: 21px;
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8) inset,
  1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
.btn-go:before {
  content: attr(data-content-default);
}
.btn-go:active {
  -webkit-animation: spinner 200ms infinite linear;
  animation: spinner 200ms infinite linear;
}
.btn-go:active:before {
  content: attr(data-content-spinning);
}
@-webkit-keyframes spinner {
  from {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: rotateX(0) rotateY(-360deg);
  }
  to {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: rotateX(360deg) rotateY(-360deg);
  }
}
@keyframes spinner {
  from {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: rotateX(0) rotateY(-360deg);
  }
  to {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: rotateX(360deg) rotateY(-360deg);
  }
}
</style>