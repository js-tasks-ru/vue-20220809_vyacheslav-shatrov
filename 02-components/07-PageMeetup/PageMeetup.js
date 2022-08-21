import { defineComponent } from './vendor/vue.esm-browser.js'
import UiContainer from './UiContainer.js'
import UiAlert from './UiAlert.js'
import { fetchMeetupById } from './meetupService.js'

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
  },

  props: {
    meetupId: Number,
  },
  computed: {
    fetchMeetup() {
      return fetchMeetupById(this.meetupId)
    },
  },
  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <div>{{ fetchMeetup.description }}ID</div>
      <ui-container>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container>
        <ui-alert>error</ui-alert>
      </ui-container>
    </div>`,
})
