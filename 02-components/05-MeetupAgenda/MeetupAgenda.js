import { defineComponent } from './vendor/vue.esm-browser.js'
import MeetupAgendaItem from './MeetupAgendaItem.js'

export default defineComponent({
  name: 'MeetupAgenda',

  props: {
    agenda: Array,
  },
  components: {
    MeetupAgendaItem,
  },
  template: `
    <ul class="agenda">
      <li v-for="item of agenda" class="agenda__item">
        <!-- meetup agenda item -->
        <MeetupAgendaItem :agenda-item="item" />
      </li>
    </ul>`,
  data() {
    return {}
  },
})
