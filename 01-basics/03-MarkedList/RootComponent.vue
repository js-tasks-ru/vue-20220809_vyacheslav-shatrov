<template>
  <div class="container">
    <div class="form-group">
      <input type="search" v-model="pattern" />
    </div>
    <ul v-for="email of selectedEmails">
      <li :class="email[1] ? 'marked' : ''">{{ email[0] }}</li>
    </ul>
  </div>
</template>

<script>
import { emails } from './data'

export default {
  name: 'markedList',
  data: () => ({
    pattern: '',
    selected: false,
  }),
  computed: {
    selectedEmails() {
      return emails.map((email) => [email, (this.selected = email.includes(this.pattern) && this.pattern)])
    },
  },
}
</script>
