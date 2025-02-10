import { combineReducers } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import reducers, { SLICE_NAME, type PRODUCT_DETAIL_STATE } from './ProductDetailSlice'

import type { RootState } from '@/store'
import type { TypedUseSelectorHook } from 'react-redux'

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: PRODUCT_DETAIL_STATE
        }
    }
> = useSelector

export { useAppDispatch } from '@/store'
export * from './ProductDetailSlice'
export default reducer
