import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import testRoute from './testRoute'

export const publicRoutes: Routes = [
    ...authRoute,
    ...testRoute,
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
        meta: {},
    },
]

export const protectedRoutes = [
    // {
    //     key: 'home',
    //     path: '/home',
    //     component: lazy(() => import('@/views/Home')),
    //     authority: [],
    // },
    // Example purpose only, please remove this line
    // ...testRoute,
]
