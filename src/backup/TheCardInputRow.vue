<template>
  <div class="the-card-input-row">
    <span class="container" v-for="item in items" :key="`${test2}-${item.id}`">
      (<span>
        <span contenteditable="true">{{item.numerator}}</span>
        <span contenteditable="true">{{item.denominator}}</span>
      </span>) X<sub>{{item.id}}</sub> {{ item.id===count ? '=' : '+' }}
    </span>
    <span class="container">
      (<span>
        <span contenteditable="true">{{itemRight.numerator}}</span>
      <span contenteditable="true">{{itemRight.denominator}}</span>
      </span>)
    </span>
  </div>
</template>

<script>

export default {
  name: "TheCardInputRow",
  data() {
    return {
      count: 4,
      itemRight: {
        numerator: 0,
        denominator: 1
      },
      items: [
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
        },
        {
          id: 4,
          numerator: 0,
          denominator: 1
        }
      ]
    }
  },
  props: ['test','test2'],
  watch: {
    test (newV, oldV){
      console.log('旧行数:',oldV, '新行数',newV, '旧列数：',this.count);
      while(this.count < newV) {
        this.addItem();
      }
      while(this.count > newV) {
        this.removeItem();
      }
      console.log('新列数：' , this.count)
    }
  },
  methods: {
    addItem: function () {
      this.items.push(
          {
            id: this.count+1,
            numerator: 0,
            denominator: 1
          }
      );
      this.count++;
    },
    removeItem: function () {
      this.items.pop();
      if(this.count > 0) this.count--;
    }
  }
}
</script>

<style scoped>

.the-card-input-row {
  margin-top: 7px;
}

.container {
  font-size: 21px;
  color: #515151;
  white-space: nowrap;
  overflow-y: scroll;
}

.container > span {
  font-size: 11px;
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