import { useState, memo, useCallback } from 'react'
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

// Memoized ProductCard component
const ProductCard = memo(({ product }: { product: Product }) => (
    <div className="p-2 transition-shadow hover:shadow-md rounded-md">
        <h2 className="text-xs md:text-base font-semibold mb-2 md:whitespace-nowrap text-gray-800">
            {product.name}
        </h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
    </div>
))

ProductCard.displayName = 'ProductCard'

// Memoized CategorySection component
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
        <div className="min-w-[300px] rounded-lg p-4">
            <div className="flex justify-center items-center">
                <span role="img" aria-label="icon">
                    {icon}
                </span>
                <h2 className="text-sm md:text-lg font-semibold md:whitespace-nowrap text-gray-700 w-full">
                    {title}
                </h2>
            </div>
            {/* Divider */}
            <hr className="border-t border-gray-200 mb-2" />
            <AutoScroll
                items={products}
                overflow="hidden"
                scrollDuration={30} // smaller value for faster scroll
                itemHeight={80}
                containerClassName="space-y-3 w-full max-w-min mx-auto p-4 max-h-[400px]"
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
    ),
)

CategorySection.displayName = 'CategorySection'

const CategoriesWrapper = () => {
    const [products, setProducts] = useState<Product[]>([...INITIAL_PRODUCTS])

    const handleEndReached = useCallback(() => {
        setProducts((prevProducts) => [...INITIAL_PRODUCTS, ...prevProducts])
    }, [])

    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
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
    )
}

export default CategoriesWrapper
