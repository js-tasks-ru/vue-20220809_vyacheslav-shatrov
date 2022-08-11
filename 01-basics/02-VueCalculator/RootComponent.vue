<template>
  <div class="row">
    <h1>Counter</h1>
    <div class="col">
      <input type="number" v-model="first" />
    </div>

    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
      <label><input type="radio" name="operator" value="sum" v-model="operator" /> ➕</label>
      <label><input type="radio" name="operator" value="subtract" v-model="operator" /> ➖</label>
      <label><input type="radio" name="operator" value="multiply" v-model="operator" /> ✖</label>
      <label><input type="radio" name="operator" value="divide" v-model="operator" /> ➗</label>
    </div>

    <div class="col">
      <input type="number" v-model="second" />
    </div>

    <div class="col">=</div>

    <output class="col">{{ calculate }}</output>
  </div>
</template>

<script>
export default {
  name: 'calculator',
  data: () => ({
    first: 0,
    second: 0,
    result: 0,
    operator: '',
  }),
  computed: {
    calculate() {
      switch (this.operator) {
        case 'sum':
          this.result = this.first + this.second
          break
        case 'subtract':
          this.result = this.first - this.second
          break
        case 'multiply':
          this.result = this.first * this.second
          break
        case 'divide':
          if (this.second !== 0) {
            this.result = this.first / this.second
          } else {
            this.result = 0
          }
          break
      }

      return this.result
    },
  },
}
</script>
