<template>
  <h1>Counter</h1>
  <button type="button" @click="add">{{ counter }}</button>
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
