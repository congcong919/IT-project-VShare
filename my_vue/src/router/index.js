// create router for the application
import VueRouter from 'vue-router'

import VShareHomePage from '../components/VShareHomePage.vue'
import VShareProfile from '../components/VShareProfile.vue'
import UploadPage from '../components/UploadPage.vue'
import ManagementSystem from '../components/ManagementSystem.vue'
import VideoPage from '../components/VideoPlay.vue'
import PageP from '../components/PageP'
import SearchPage from '../components/SearchPage'
import ResultPage from '../components/ResultPage'
import TermPage from '../components/TermPage.vue'
import HelpPage from '../components/HelpPage.vue'
import ResultPage2 from '../components/ResultPage2.vue'
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: "/homepage",
        },
        {
            path: "/homepage",
            component: VShareHomePage,
            meta: { title: 'Homepage' }
        },
        {
            path: "/profile",
            component: VShareProfile,
            meta: { title: 'Profile' }
        },
        {
            path: '/upload',
            component: UploadPage,
            meta: { title: 'Upload' }
        },

        {
            path: "/admin",
            component: ManagementSystem,
            meta: { title: 'Administrator' }
        },
        {
            path: "/video",
            component: VideoPage,
            meta: { title: 'Video' }
        },
        // {
        //     path: '/video',
        //     component: VideoPage
        // }
        {
            path: '/Pages',
            component: PageP,
            meta: { title: 'Category' }
        },
        {
            path: '/SearchPage',
            component: SearchPage,
            meta: { title: 'Search' }
        },
        {
            path: '/TermPage',
            component: TermPage,
            meta: { title: 'Term' }
        },
        {
            path: '/HelpPage',
            component: HelpPage,
            meta: { title: 'Help' }
        },
        {
            path: '/ResultPage2',
            component: ResultPage2
        },
        {
            path: '/ResultPage',
            component: ResultPage,
            children: [
                {
                    path: 'ResultPage',
                    component: ResultPage,
                }]
        }
    ]
})

export default router

router.beforeEach((to, from, next) => {
    if (to.path === '/homepage') {
        // if (localStorage.getItem('login') === 'true') {
        //     next()
        // } else {
        //     alert('Please sign in first!')
        // }
        next()
    } else {
        if (localStorage.getItem('Token') !== null) {
            next()
        } else {
            //next()
            next({ path: '/homepage' })
            setTimeout(() => {
                alert('Please sign in first!');
            }, 900);
        }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title
})
