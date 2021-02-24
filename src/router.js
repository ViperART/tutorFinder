import { createRouter, createWebHistory } from 'vue-router'
import TutorDetail from './pages/coaches/TutorDetail'
import TutorsList from './pages/coaches/TutorsList'
import TutorRegistration from './pages/coaches/TutorRegistration'
import ContactTutor from './pages/requests/ContactTutor'
import RequestsReceived from './pages/requests/RequestsReceived'
import NotFound from './pages/NotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/tutors'},
    { path: '/tutors', component: TutorsList},
    {
      path: '/tutors/:id',
      component: TutorDetail,
      children: [
        { path: 'contact', component: ContactTutor } // /coaches/1/contact
      ]
    },
    { path: '/register', component: TutorRegistration},
    { path: '/requests', component: RequestsReceived},
    { path: '/:notFound(.*)', component: NotFound},
  ]
});

export default router;