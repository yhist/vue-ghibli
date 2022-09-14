import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
const router = createRouter({
  history : createWebHistory(),
  routes : [
    {
      path : '/',
      redirect : '/home'
    },
    {
      // 웹 브라우저 주소 표시줄에 명시
      path: '/home',
      // RouterView에 보여질 컴포넌트페이지
      component: HomeView
    },
    {
      path : '/detail/:id',
      component: DetailView
      
    }
  ]
});
export default router