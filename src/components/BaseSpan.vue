<template>
    <span contenteditable="true"
          @focus="selectText"
          @input="changeVal($event.target)"
          @blur="checkFocus($event.target)">{{currentVal}}</span>
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
      currentVal: this.value,
      focusFlag: false
    };
  },
  methods: {
    selectText: function () {
      setTimeout(function() {
        document.execCommand('selectAll', false, null)
      }, 0);
    },
    alert(message, type) {
      let wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      document.getElementById('liveAlertPlaceholder').append(wrapper);
    },
    checkFocus(target) {
      if(this.focusFlag=== true) target.focus();
    },
    changeVal(target) {
      let val = target.innerText.replace(/\s*/g,"");
      document.getElementById('liveAlertPlaceholder').innerHTML="";
      if(val.match(/^-?[0-9]*$/)) {
        this.focusFlag = false;
        this.$emit("input", parseInt(val.replace(/\s*/g,""))); // 定义input事件
      }
      else {
        this.focusFlag = true;
        this.alert("你当前输入的是" + val +", 请输入一个整数！", 'danger');
        setTimeout(function() {
          document.execCommand('selectAll', false, null)
        }, 0);
      }
      this.$emit('changeFocusFlag', this.focusFlag)
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