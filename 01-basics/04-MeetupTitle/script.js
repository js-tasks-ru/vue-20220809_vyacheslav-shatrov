import { createApp } from 'vue'
import RootComponent from './RootComponent'

const API_URL = 'https://course-vue.javascript.ru/api'

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return response.json().then((error) => {
        throw error
      })
    }
  })
}

// Требуется создать Vue приложение
createApp(RootComponent).mount('#app')
