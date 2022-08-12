import { defineComponent } from './vendor/vue.esm-browser.js'

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: Number,
  },
  data() {
    return {
      counter: 0,
    }
  },

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="onClick($event)" >{{ count }}</button>`,
  methods: {
    onClick($event) {
      this.counter = this.count
      this.$emit('increase', ++this.counter)
    },
  },
})
