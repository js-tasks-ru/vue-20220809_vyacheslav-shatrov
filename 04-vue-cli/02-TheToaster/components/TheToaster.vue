<template>
  <div class="toasts">
    <div v-for="toast in toastsArr" :key="toast.date" class="toast" :class="toast.class">
      <ui-icon class="toast__icon" :icon="toast.icon" />
      <span>{{toast.message + ' ' + toast.date}}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToaster',

  components: { UiIcon },
  data() {
    return {
      toastsArr: [],
    }
  },
  computed: {
    showToasts() {
      return this.toastsArr
    }
  },
  methods: {
    success(message, date) {
      this.toastsArr.push({
        show: true,
        class: 'toast_success',
        icon: 'check-circle',
        message: message,
        date
      })
    },
    error(message, date) {
      this.toastsArr.push({
        show: true,
        class: 'toast_error',
        icon: 'alert-circle',
        message: message,
        date
      })
    },
    delete(date) {
      this.toastsArr = this.toastsArr.filter(toast => toast.date !== date)
    }
  }
}
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
