import type { Routes } from '@/@types/routes'
import { lazy } from 'react'

const adminRoute: Routes = [
    {
        key: 'dashboard',
        path: '/admin/dashboard',
        authority: [],
        component: lazy(() => import('@/views/dashboard/Dashboard')),
        meta: {
            layout: 'modern',
        },
    },
]

export default adminRoute
