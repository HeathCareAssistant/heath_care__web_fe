import type { Drug } from '@/@types/drug'
import { apiGetDrug } from '@/services/DrugService'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const SLICE_NAME = 'productDetail'

export type PRODUCT_DETAIL_STATE = {
    loading: boolean
    error: {
        code: number
        message: string
    }
    product: {
        productDetail: Drug
    }
}

export const INITIAL_PRODUCTS = {
    loading: false,
    selectedProduct: null,
    error: {
        code: null,
        message: '',
    },
    product: {
        productDetail: {} as Drug,
    },
}

export const getProductDetail = createAsyncThunk(
    `${SLICE_NAME}/getProductDetail`,
    async (id: string) => {
        const res = await apiGetDrug('thuoc', id)
        return res.data
    },
)

export const productDetailSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState: INITIAL_PRODUCTS,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        clearError: (state) => {
            state.error = {
                code: null,
                message: '',
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(getProductDetail.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.loading = false
            state.product.productDetail = action.payload
        })
        builder.addCase(getProductDetail.rejected, (state) => {
            state.loading = false
        })
    },
})

export const { clearError, setError, setSelectedProduct } =
    productDetailSlice.actions
export default productDetailSlice.reducer
