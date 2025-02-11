import Loading from '@/components/shared/Loading'
import {
    LAYOUT_TYPE_BLANK,
    LAYOUT_TYPE_CLASSIC,
    LAYOUT_TYPE_DECKED,
    LAYOUT_TYPE_MODERN,
    LAYOUT_TYPE_SIMPLE,
    LAYOUT_TYPE_STACKED_SIDE,
} from '@/constants/theme.constant'
import { useAppSelector } from '@/store'
import useAuth from '@/utils/hooks/useAuth'
import useDirection from '@/utils/hooks/useDirection'
import useLocale from '@/utils/hooks/useLocale'
import { lazy, Suspense, useMemo } from 'react'

const layouts = {
    [LAYOUT_TYPE_CLASSIC]: lazy(() => import('./ClassicLayout')),
    [LAYOUT_TYPE_MODERN]: lazy(() => import('./ModernLayout')),
    [LAYOUT_TYPE_STACKED_SIDE]: lazy(() => import('./StackedSideLayout')),
    [LAYOUT_TYPE_SIMPLE]: lazy(() => import('./SimpleLayout')),
    [LAYOUT_TYPE_DECKED]: lazy(() => import('./DeckedLayout')),
    [LAYOUT_TYPE_BLANK]: lazy(() => import('./BlankLayout')),
}

const AuthLayout = lazy(() => import('./AuthLayout'))

const Layout = () => {
    const layoutType = useAppSelector((state) => state.theme.layout.type)
    const { authenticated } = useAuth()

    useDirection()
    useLocale()

    const AppLayout = useMemo(() => {
        // if (
        //     layoutType === LAYOUT_TYPE_BLANK ||
        //     layoutType === LAYOUT_TYPE_MODERN
        // ) {
        //     return layouts[layoutType]
        // }

        if (!authenticated && layoutType === LAYOUT_TYPE_SIMPLE) {
            return layouts[layoutType]
        }

        return authenticated ? layouts[layoutType] : AuthLayout
    }, [layoutType, authenticated])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-screen items-center justify-center">
                    {' '}
                    {/* Center the loading */}
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout />
        </Suspense>
    )
}

export default Layout
