import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '@/utils/hooks/useAuth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()

    const location = useLocation()

    if (!authenticated) {
        const redirectTo =
            location.pathname === '/home'
                ? unAuthenticatedEntryPath
                : `${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`
        return <Navigate replace to={redirectTo} />
    }

    return <Outlet />
}

export default ProtectedRoute
