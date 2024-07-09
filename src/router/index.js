import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import JobsPage from '../views/JobsPage.vue';
import JobPage from '../views/JobPage.vue';
import AddJob from "../views/AddJob.vue";
import EditJob from '../views/EditJob.vue'
import NotFoundPage from '@/views/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsPage
    },
    {
      path:"/jobs/:id",
      name:"job",
      component: JobPage
    },
    {
      path:"/jobs/add-job",
      name:"add-job",
      component: AddJob
    },
    {
      path:"/jobs/edit/:id",
      name:"edit-job",
      component: EditJob
    },
    {
      // path: '/:catchAll(.*)',
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage
    },
  ]
})

export default router
