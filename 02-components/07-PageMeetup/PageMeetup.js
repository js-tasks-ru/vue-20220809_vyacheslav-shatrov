import { defineComponent } from './vendor/vue.esm-browser.js'
import UiContainer from './UiContainer.js'
import UiAlert from './UiAlert.js'
import MeetupView from '../06-MeetupView/MeetupView.js'
import { fetchMeetupById } from './meetupService.js'

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: Number,
  },
  data() {
    return {
      meetup: null,
      loading: true,
      error: null,
    }
  },
  watch: {
    meetupId: {
      handler(newId) {
        this.meetup = null
        this.loading = true
        this.error = null
        fetchMeetupById(newId)
          .then((meetup) => {
            this.meetup = meetup
            this.loading = false
          })
          .catch((err) => {
            this.error = 'Test Error'
            this.loading = false
          })
      },
      immediate: true,
    },
  },
  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView v-if="meetup" :meetup="meetup" />
      <ui-container v-if="loading" >
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container>
        <ui-alert v-if="error">{{ error }}</ui-alert>
      </ui-container>
    </div>`,
})
