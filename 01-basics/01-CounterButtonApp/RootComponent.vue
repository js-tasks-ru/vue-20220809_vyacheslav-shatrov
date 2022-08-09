<template>
  <div>
    <h1>Counter</h1>
    <button type="button" @click="add">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data: () => ({
    counter: 0,
  }),
  methods: {
    add() {
      this.counter++
    },
  },
}
</script>
