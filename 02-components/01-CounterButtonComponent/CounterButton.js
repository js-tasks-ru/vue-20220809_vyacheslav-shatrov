import { defineComponent } from './vendor/vue.esm-browser.js'

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: Number,
  },
  emits: ['update:value', 'increase'],

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `
    <button 
      type="button" 
      :value="count" 
      @click="this.$emit('increase', count)"
    >
      {{ count }}
    </button>
  `,
})
