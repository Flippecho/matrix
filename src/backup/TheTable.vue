<template>
  <div class="card align-middle box-shadow">
    <div class="card-header"><h1>列主元消去法求解线性方程</h1></div>
    <table class="table table-responsive table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="row in rows" :key="`th-${row.id}`">x<sub>{{ row.id }}</sub></th>
        <th scope="col">b</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in rows" :key="`tr-${row.id}`">
        <th scope="row">{{ row.id }}</th>
        <td v-for="item in row.items" :key="`${row.id}-${item.id}`">
        <span>
          <span contenteditable="true">{{ item.numerator }}</span>
          <span contenteditable="true">{{ item.denominator }}</span>
        </span>
        </td>
        <td>
        <span>
          <span contenteditable="true">{{ row.itemB.numerator }}</span>
          <span contenteditable="true">{{ row.itemB.denominator }}</span>
        </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TheTable",
  data() {
    return {
      count: 4,
      rows: [
        {
          id: 1,
          itemB: {
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
        },
        {
          id: 2,
          itemB: {
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
        },
        {
          id: 3,
          itemB: {
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
        },
        {
          id: 4,
          itemB: {
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
      ]
    }
  },
}
</script>

<style scoped>
.card {
  width: 60vw;
  left: 3vw;
  height: 70vh;
  top: 5vh;
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