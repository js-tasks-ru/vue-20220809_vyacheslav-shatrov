import { defineComponent } from './vendor/vue.esm-browser.js'

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: Number,
  },
  emits: ['update:value'],

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `
    <button 
      type="button" 
      :count="count" 
      @click="this.$emit('update:value', 42)"
    >
      {{ count }}ff
    </button>
  `,
})
