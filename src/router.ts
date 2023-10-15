import AboutPage from './pages/AboutPage.vue'
import BlogPage from './pages/BlogPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import ResumePage from './pages/ResumePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
export const router = createRouter({history: createWebHashHistory(), routes: [
  {path: '/', component: AboutPage},
  {path: '/blog', component: BlogPage},
  {path: '/projects', component: ProjectsPage},
  {path: '/resume', component: ResumePage},
] })