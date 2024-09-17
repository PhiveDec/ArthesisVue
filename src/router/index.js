import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import GalleryPage from '@/components/pages/GalleryPage.vue'
import EventsPage from '@/components/pages/EventsPage.vue'
import AuthPage from '@/components/pages/AuthPage.vue'
import UserAlbumsPage from '@/components/pages/UserAlbumsPage.vue'
import AlbumPage from '@/components/pages/AlbumPage.vue'
import EventPage from '@/components/pages/EventPage.vue'
import StudioPage from '@/components/pages/StudioPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/studio',
    name: 'studio',
    component: StudioPage
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage
  },
  {
    path: '/events',
    name: 'events',
    component: EventsPage
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventPage
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserAlbumsPage
  },
  {
    path: '/album/:id',
    name: 'album',
    component: AlbumPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
