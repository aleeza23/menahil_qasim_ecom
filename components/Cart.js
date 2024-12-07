'use client';
import { useCart } from '@/hook/CartContext';
import Link from 'next/link';
import React from 'react';

const Cart = ({ setIsCartOpen }) => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    const generateWhatsAppMessage = () => {
        const itemsList = cart
            .map(item => `• ${item.name} (Quantity: ${item.quantity})`)
            .join('\n');

        return encodeURIComponent(`
*New Order:*

*Items:*
${itemsList}
*Subtotal: Rs. ${subtotal}*
`);
    };

    // Ensure price and quantity are numbers
    const parsePrice = (price) => parseFloat(price) || 0;
    const parseQuantity = (quantity) => parseInt(quantity) || 0;

    const subtotal = cart.reduce((total, product) => total + parsePrice(product.price) * parseQuantity(product.quantity), 0);

    return (
        <div className="fixed inset-0 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] font-sans">
            <div className="w-full max-w-md bg-white shadow-lg relative ml-auto h-screen">
                <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
                    <div className="flex items-center gap-4 text-gray-800">
                        <h3 className="text-2xl font-bold flex-1">Shopping cart</h3>
                        <svg onClick={() => setIsCartOpen(false)} xmlns="http://www.w3.org/2000/svg" className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div className="space-y-4 mt-12">
                        {cart.length === 0 ? <p className=" text-gray-500 font-light text-md text-center">CART IS EMPTY</p> : cart.map((product, index) => (
                            <div key={index}>
                                <div key={index} className="grid grid-cols-3 items-start gap-4">
                                    <div className="col-span-2 flex items-start gap-4">
                                        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                            <img src={product.imageUrl} className="w-full h-full object-contain" alt={product.name} />
                                        </div>

                                        <div className="flex flex-col">
                                            <h3 className="text-base max-sm:text-sm font-bold text-gray-800">{product.name}</h3>
                                            <p className="text-xs font-semibold text-gray-500 mt-0.5">Price: Rs.{parsePrice(product.price)}</p>


                                            <button type="button" className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0" onClick={() => removeFromCart(product.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                </svg>
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>

                                    <div className="ml-auto">
                                        <h4 className="text-lg max-sm:text-base font-bold text-gray-800">Rs.{(parsePrice(product.price) * parseQuantity(product.quantity))}</h4>
                                        <div className="flex items-center mt-2">
                                            <button type="button" className="px-2 py-1 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md" onClick={() => decreaseQuantity(product.id)}>
                                                -
                                            </button>
                                            <span className="mx-2">{parseQuantity(product.quantity)}</span>
                                            <button type="button" className="px-2 py-1 border border-gray-500 text-gray-800 text-xs bg-transparent rounded-md" onClick={() => increaseQuantity(product.id)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-gray-300 mt-3" />
                            </div>
                        ))}

                    </div>
                </div>

                <div className="p-6 absolute bottom-0 w-full border-t bg-white">
                    <ul className="text-gray-800 divide-y">
                        <li className="flex flex-wrap gap-4 text-lg font-bold">Subtotal <span className="ml-auto">PKR {subtotal.toFixed(2)}</span></li>
                    </ul>
                    <Link href={`https://wa.me/03115917071?text=${generateWhatsAppMessage()}`} className="mt-6 text-sm font-semibold px-6 py-3 w-full bg-black hover:bg-opacity-80 text-white text-center rounded-md flex gap-2 items-center justify-center">PLACE ORDER</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
