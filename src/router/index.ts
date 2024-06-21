import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: () => import('@/views/EvaluationView.vue')
    },
    {
      path: '/person',
      name: 'Person',
      component: () => import('@/views/PersonView.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('@/views/ProjectView.vue')
    },
    {
      path: '/time-tracking',
      name: 'Time tracking',
      component: () => import('@/views/TimeTrackingView.vue')
    }
  ]
});

export default router;
