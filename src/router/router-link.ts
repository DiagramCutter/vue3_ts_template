import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: async () => await import('@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: async () => await import('@/views/About')
  },
  {
    path: '/lottie',
    name: 'Lottie',
    component: async () => await import('@/views/Lottie')
  },
  {
    path: '/text',
    name: 'TextOverflow',
    component: async () => await import('@/views/TextOverflow')
  },
  {
    path: '/higherOrderFunction',
    name: 'HigherOrderFunction',
    component: async () => await import('@/views/HigherOrderFunction')
  },
  {
    path: '/mask',
    name: 'Mask',
    component: async () => await import('@/views/Mask')
  }
]
