import { defineComponent } from './vendor/vue.esm-browser.js'
import UiAlert from './UiAlert.js'
import UiContainer from './UiContainer.js'
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js'
import MeetupCover from '../03-MeetupCover/MeetupCover.js'
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js'
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js'
import MeetupAgendaItem from '../05-MeetupAgenda/MeetupAgendaItem.js'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupAgenda,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
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
      <MeetupCover :title="meetup.title" :image="meetup.image" />
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="meetup.description"/>
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <template v-if="meetup.agenda.length">
              <MeetupAgenda :agenda="meetup.agenda" />
            </template>
            <ui-alert v-else></ui-alert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <MeetupInfo
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            >
            </MeetupInfo>
          </div>
        </div>
      </ui-container>
    </div>`,
})
