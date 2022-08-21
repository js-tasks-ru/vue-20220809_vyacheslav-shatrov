import { defineComponent } from './vendor/vue.esm-browser.js'

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: String,
    place: String,
    date: Number,
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatAsISODate(date)">{{ formatAsLocalDate(date) }}</time>
      </li>
    </ul>`,
  methods: {
    formatAsLocalDate(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    formatAsISODate(timestamp) {
      return new Date(timestamp).toISOString().split('T')[0]
    },
  },
})
