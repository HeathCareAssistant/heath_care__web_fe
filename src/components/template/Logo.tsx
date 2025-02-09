import classNames from 'classnames'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'

interface LogoProps extends CommonProps {
    type?: 'full' | 'streamline'
    mode?: 'light' | 'dark'
    textColor?: string
    imgClass?: string
    logoWidth?: number | string
    logoHeight?: number | string
}

const LOGO_SRC_PATH = '/img/logo/'

const Logo = (props: LogoProps) => {
    const {
        type = 'full',
        mode = 'light',
        textColor = 'black',
        className,
        imgClass,
        style,
    } = props

    return (
        <div
            className={classNames('logo', className)}
            style={{
                ...style,
            }}
        >
            <div className="flex flex-row justify-center items-center gap-1">
                <img
                    className={classNames('image w-16 h-auto', imgClass)}
                    src={`${LOGO_SRC_PATH}logo-${mode}-${type}.png`}
                    alt={`${APP_NAME} logo`}
                />
                <span className="">|</span>
                <h5 className={`uppercase pl-2 text-${textColor}`}>
                    {APP_NAME}
                </h5>
            </div>
        </div>
    )
}

export default Logo
