import {
    LAYOUT_TYPE_BLANK
} from '@/constants/theme.constant'
import { useAppSelector } from '@/store'
import View from '@/views'
import Side from './Side'

const AuthLayout = () => {
    const layoutType = useAppSelector((state) => state.theme.layout.type)
    console.log("🚀 ~ AuthLayout ~ layoutType:", layoutType)

    return (
        <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
            {layoutType === LAYOUT_TYPE_BLANK ? (
                <View />
            ) : (
                <Side>
                    <View />
                </Side>
            )}
        </div>
    )
}

export default AuthLayout
