<template>
  <div class="container">
    <div class="form-group">
      <input type="search" v-model="pattern" />
    </div>
    <ul v-for="email of selectedEmails" :key="email[0]">
      <li :class="{marked: email[1]}">{{ email[0] }}</li>
    </ul>
  </div>
</template>

<script>
import { emails } from './data'

export default {
  name: 'markedList',
  data: () => ({
    pattern: ''
  }),
  computed: {
    selectedEmails() {
      return emails.map((email) => [
        email, 
        email.includes(this.pattern) && this.pattern
      ])
    },
  },
}
</script>
