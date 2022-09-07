import { createRouter, createWebHistory } from 'vue-router'
import BookHomepage from '@/components/book.vue'
import BooklistPage from '@/components/book-list.vue'

const routes = [
    {
        path: '/',
        name: 'BookHomepage',
        component: BookHomepage
    },
    {
        path: '/boollist/:title',
        name: 'BooklistPage',
        component: BooklistPage
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router