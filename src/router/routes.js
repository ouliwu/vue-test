import Footer from '@/components/Footer'
const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')

export default [
    {
        path: '/',
        redirect: '/home',
        meta: {
            isTabItem: false
        }
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: Home,
            footer: Footer
        },
        meta: {
            isTabItem: true,
            title: '首页',
            icon: '&#xe60b;'
        }
    },
    {
        path: '/mall',
        name: 'mall',
        components: {
            default: Mall,
            footer: Footer
        },
        meta: {
            isTabItem: true,
            title: '商城',
            icon: '&#xe603;'
        }
    },
    {
        path: '/cart',
        name: 'cart',
        components: {
            default: Cart,
            footer: Footer
        },
        meta: {
            isTabItem: true,
            title: '购物车',
            isAuthRequired: true,
            icon: '&#xe607;'
        }
    },
    {
        path: '/mine',
        name: 'mine',
        components: {
            default: Mine,
            footer: Footer
        },
        meta: {
            isTabItem: true,
            title: '我的',
            isAuthRequired: true,
            icon: '&#xe606;'
        }
    }
]
