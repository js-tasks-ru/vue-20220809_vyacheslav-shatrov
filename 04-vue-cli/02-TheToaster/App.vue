<template>
  <div>
    <the-toaster ref="toaster" />

    <p>
      <button type="button" @click="handleSuccessClick">Add Success Message</button>
      <button type="button" @click="handleErrorClick">Add Error Message</button>
    </p>
  </div>
</template>

<script>
import TheToaster from './components/TheToaster.vue';

export default {
  name: 'App',

  components: { TheToaster },

  methods: {
    handleSuccessClick() {
      this.toastCreated('success')
    },

    handleErrorClick() {
      this.toastCreated('error')
    },
    toastCreated(message) {
      const created = new Date().toLocaleTimeString()
      this.$refs.toaster[message](message[0].toUpperCase() + message.slice(1), created);
      setTimeout(() => {
        this.$refs.toaster.delete(created)
      }, 4999)
    }
  }
};
</script>
