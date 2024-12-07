
import AddToCart from '@/components/AddToCart';
import Image from 'next/image';

const products = [
    {
        id: 1,
        name: 'French Timex',
        price: 95.00,
        imageUrl: 'https://readymadeui.com/images/watch1.webp',
    },
    {
        id: 2,
        name: 'Echo Elegance',
        price: 20.00,
        imageUrl: 'https://readymadeui.com/images/product14.webp',
    },
    {
        id: 3,
        name: 'Acer One 14 AMD',
        price: 400.00,
        imageUrl: 'https://readymadeui.com/images/laptop4.webp',
    },
    {
        id: 4,
        name: 'Irish Cream Dream',
        price: 11.00,
        imageUrl: 'https://readymadeui.com/images/watch4.webp',
    },
    {
        id: 5,
        name: 'Luxury desk clock',
        price: 90.00,
        imageUrl: 'https://readymadeui.com/images/coffee7.webp',
    },
    {
        id: 6,
        name: 'Smart Watch',
        price: 110.00,
        imageUrl: 'https://readymadeui.com/images/watch7.webp',
    },
    {
        id: 7,
        name: 'Creative Wall Clock',
        price: 50.00,
        imageUrl: 'https://readymadeui.com/images/watch8.webp',
    },
    {
        id: 8,
        name: 'ASUS Vivobook 15',
        price: 450.00,
        imageUrl: 'https://readymadeui.com/images/laptop2.webp',
    },
    {
        id: 9,
        name: 'French Timex',
        price: 95.00,
        imageUrl: 'https://readymadeui.com/images/watch3.webp',
    },
    {
        id: 10,
        name: 'Echo Elegance',
        price: 20.00,
        imageUrl: 'https://readymadeui.com/images/product14.webp',
    },
    {
        id: 11,
        name: 'Acer One 14 AMD',
        price: 400.00,
        imageUrl: 'https://readymadeui.com/images/laptop4.webp',
    },
    {
        id: 12,
        name: 'Irish Cream Dream',
        price: 11.00,
        imageUrl: 'https://readymadeui.com/images/watch5.webp',
    },
];

const ProductsPage = () => {
    return (
        <div className="font-sans bg-gray-50 px-4 pt-8 pb-16">
            <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
                <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-3 shadow-sm rounded-md hover:-translate-y-2 transition-all"
                        >
                            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={200}
                                    height={130}
                                    className="h-full w-5/6 mx-auto block object-contain"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
                                <div className='flex mt-4 items-center justify-between'>
                                    <h4 className="text-base text-blue-600 font-bold mt-2">Rs.{product.price}</h4>
                                    {/* add to cart button */}

                                    <AddToCart product={product} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
