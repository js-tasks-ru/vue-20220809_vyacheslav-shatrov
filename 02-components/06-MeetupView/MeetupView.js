import { defineComponent } from './vendor/vue.esm-browser.js'
import UiAlert from './UiAlert.js'
import UiContainer from './UiContainer.js'
import MeetupCover from '../03-MeetupCover/MeetupCover.js'
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js'
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupAgenda,
    MeetupCover,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <!-- meetup cover-->
      <MeetupCover :title="'some title'" :image="" />
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="meetup.description"/>
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <MeetupAgenda :agenda="'test agenda'" />
            <ui-alert>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
          </div>
        </div>
      </ui-container>
    </div>`,
})
