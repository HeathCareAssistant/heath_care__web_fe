import type { NavMode } from '@/@types/theme'
import Dropdown from '@/components/ui/Dropdown'
import navigationConfig from '@/configs/navigation.config'
import {
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from '@/constants/navigation.constant'
import { useTranslation } from 'react-i18next'
import HorizontalMenuDropdownItem from './HorizontalMenuDropdownItem'
import HorizontalMenuItem from './HorizontalMenuItem'

type HorizontalMenuContentWithoutAuthProps = {
    manuVariant: NavMode
}

const HorizontalMenuContentWithoutAuth = ({
    manuVariant,
}: HorizontalMenuContentWithoutAuthProps) => {
    const { t } = useTranslation()

    return (
        <span className="flex items-center">
            {navigationConfig.map((nav) => {
                if (
                    nav.type === NAV_ITEM_TYPE_TITLE ||
                    nav.type === NAV_ITEM_TYPE_COLLAPSE
                ) {
                    return (
                        <Dropdown
                            key={nav.key}
                            trigger="hover"
                            renderTitle={
                                <HorizontalMenuItem
                                    manuVariant={manuVariant}
                                    nav={nav}
                                />
                            }
                        >
                            {nav.subMenu.map((secondarySubNav) =>
                                secondarySubNav.subMenu.length > 0 ? (
                                    <Dropdown.Menu
                                        key={secondarySubNav.key}
                                        title={t(
                                            secondarySubNav.translateKey,
                                            secondarySubNav.title,
                                        )}
                                    >
                                        {secondarySubNav.subMenu.map(
                                            (tertiarySubNav) => (
                                                <HorizontalMenuDropdownItem
                                                    key={tertiarySubNav.key}
                                                    nav={tertiarySubNav}
                                                />
                                            ),
                                        )}
                                    </Dropdown.Menu>
                                ) : (
                                    <HorizontalMenuDropdownItem
                                        key={secondarySubNav.key}
                                        nav={secondarySubNav}
                                    />
                                ),
                            )}
                        </Dropdown>
                    )
                }
                if (nav.type === NAV_ITEM_TYPE_ITEM) {
                    return (
                        <HorizontalMenuItem
                            key={nav.key}
                            isLink
                            nav={nav}
                            manuVariant={manuVariant}
                        />
                    )
                }
                return <></>
            })}
        </span>
    )
}

export default HorizontalMenuContentWithoutAuth
