<template>
  <div>
    <label v-for="n in 5" :key="n">
      <input type="radio" name="meetupId" :value="n" v-model="meetupId" />
      {{ n }}
    </label>

    <hr />
    <h3>{{ meetupTitle }}</h3>
  </div>
</template>

<script>
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

export default {
  name: 'meetUpTitle',
  data: () => ({
    meetupId: 0,
    meetupTitle: '',
  }),
  watch: {
    async meetupId(value) {
      try {
        const meetupData = await fetchMeetupById(value)
        this.meetupTitle = meetupData.title
      } catch (err) {
        console.log(err.message)
      }
    },
  },
}
</script>
