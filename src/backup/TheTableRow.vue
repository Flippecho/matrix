<template>
  <tbody>
  <tr v-for="row in rows" :key="`tr-${row.id}`">
    <th scope="row">{{ row.id }}</th>
    <td v-for="item in items" :key="`${row.id}-${item.id}`">
      <span>
        <span contenteditable="true">{{ item.numerator }}</span>
        <span contenteditable="true">{{ item.denominator }}</span>
      </span>
    </td>
    <td>
      <span>
        <span contenteditable="true">{{ itemRight.numerator }}</span>
        <span contenteditable="true">{{ itemRight.denominator }}</span>
      </span>
    </td>
  </tr>
  </tbody>
</template>

<script>
export default {
  name: "TheTableRow",
  props: ['rows'],
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
  }
}
</script>

<style scoped>

</style>