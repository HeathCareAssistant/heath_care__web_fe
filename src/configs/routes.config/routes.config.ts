import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import testRoute from './testRoute'
import adminRoute from './admin.route'

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
    // Example purpose only, please remove this line
    // ...testRoute,
    ...adminRoute,
]
