import { useState, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AutoScroll from '@/components/shared/AutoScroll'

interface Product {
    name: string
    description: string
}

// Constants
const INITIAL_PRODUCTS: Product[] = [
    { name: 'Phòng tế thấp - H1', description: 'Category 1' },
    { name: 'Usarmicin', description: 'Category 2' },
    { name: 'Nasalis', description: 'Category 3' },
    { name: 'Kedermfaa', description: 'Category 4' },
    { name: 'Lumbirotine', description: 'Category 5' },
    { name: 'Acemetin', description: 'Category 6' },
    { name: 'Ezeytine', description: 'Category 7' },
    { name: 'Atorvastatin 20 mg', description: 'Category 8' },
    { name: 'Young II Captopril', description: 'Category 9' },
    { name: 'Fumafer B9 Corbiere', description: 'Category 10' },
]

const CATEGORIES = [
    {
        id: 'new',
        title: 'Thuốc mới lưu hành',
        icon: '👤',
    },
    {
        id: 'updated',
        title: 'Thuốc mới thay đổi/bổ sung',
        icon: '⭐',
    },
    {
        id: 'removed',
        title: 'Thuốc mới rút số đăng ký',
        icon: '⛔',
    },
]

// Memoized ProductCard component with enhanced responsiveness
const ProductCard = memo(({ product }: { product: Product }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`/product_detail/${product.name}`)
    }

    return (
        <div
            className="p-3 transition-all duration-300 hover:shadow-sm rounded-lg bg-white md:text-nowrap cursor-pointer"
            onClick={handleCardClick}
        >
            <h2 className="text-xs sm:text-sm md:text-base font-semibold mb-2 line-clamp-2 text-gray-800">
                {product.name}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                {product.description}
            </p>
        </div>
    )
})

ProductCard.displayName = 'ProductCard'

// Memoized CategorySection component with improved layout
const CategorySection = memo(
    ({
        title,
        icon,
        products,
        onEndReached,
    }: {
        title: string
        icon: string
        products: Product[]
        onEndReached: () => void
    }) => (
        <div className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 bg-gray-50 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 px-2 mb-3">
                <span role="img" aria-label="icon" className="text-xl">
                    {icon}
                </span>
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 truncate">
                    {title}
                </h2>
            </div>
            <div className="bg-white rounded-lg shadow-inner">
                <AutoScroll
                    items={products}
                    overflow="hidden"
                    scrollDuration={30}
                    itemHeight={80}
                    containerClassName="space-y-3 w-full p-3 max-h-[60vh]"
                    onEndReached={onEndReached}
                >
                    {products.map((product, index) => (
                        <ProductCard
                            key={`${product.name}-${index}`}
                            product={product}
                        />
                    ))}
                </AutoScroll>
            </div>
        </div>
    ),
)

CategorySection.displayName = 'CategorySection'

const CategoriesWrapper = () => {
    const [products, setProducts] = useState<Product[]>([...INITIAL_PRODUCTS])

    const handleEndReached = useCallback(() => {
        setProducts((prevProducts) => [...INITIAL_PRODUCTS, ...prevProducts])
    }, [])

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CATEGORIES.map((category) => (
                    <CategorySection
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        products={products}
                        onEndReached={handleEndReached}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoriesWrapper
