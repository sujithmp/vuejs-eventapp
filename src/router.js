import {createRouter, createWebHashHistory} from 'vue-router';
import Activity from './components/Activity.vue';
import SignIn from './components/SignIn.vue';
const routes = [
    {
        path:'/',
        component: Activity
    },
    {
        path:'/activity',
        component: Activity
    },
    {
        path:'/sign-in',
        component: SignIn
    }
];
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default  router;