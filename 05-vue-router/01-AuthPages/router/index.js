import { createRouter, createWebHistory } from 'vue-router'
import { PageIndex } from '@views/PageIndex'

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      component: PageIndex,
    },
  ],
})
