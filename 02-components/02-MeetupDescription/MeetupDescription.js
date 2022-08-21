import { defineComponent } from './vendor/vue.esm-browser.js'

export default defineComponent({
  name: 'MeetupDescription',
  template: `<p class="meetup-description">{{ desc }}</p>`,
  props: {
    description: String,
  },
  computed: {
    desc() {
      return this.description
    },
  },
})
