import { injectReducer } from '@/store'
import reducer from './store'

injectReducer('productDetail', reducer)

const ProductDetail = () => {
    return <div>ProductDetail</div>
}
export default ProductDetail
