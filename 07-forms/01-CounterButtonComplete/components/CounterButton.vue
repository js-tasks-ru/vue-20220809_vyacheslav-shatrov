<template>
  <button @click="increment" >{{ countValue }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      countValue: this.count
    }
  },
  emits: ['update:count'],
  watch: {
    count() {
      this.countValue = this.count
    }
  },
  methods: {
    increment() {
      this.countValue++
      this.$emit('update:count', this.countValue)
    }
  }
};
</script>
