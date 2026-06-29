import {
    createContext,
    useEffect,
    useMemo,
    useState
} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {

        const stored = localStorage.getItem("cart");

        return stored ? JSON.parse(stored) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]);

    const addToCart = (productId, quantity = 1) => {

        setCart(prev => {

            const existing = prev.find(
                item => item.productId === productId
            );

            if (existing) {

                return prev.map(item =>
                    item.productId === productId
                        ? {
                            ...item,
                            quantity: item.quantity + quantity
                        }
                        : item
                );

            }

            return [
                ...prev,
                {
                    productId,
                    quantity
                }
            ];

        });

    };

    const increaseQuantity = (productId) => {

        setCart(prev =>
            prev.map(item =>
                item.productId === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );

    };

    const decreaseQuantity = (productId) => {

        setCart(prev =>
            prev
                .map(item =>
                    item.productId === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter(item => item.quantity > 0)
        );

    };

    const removeItem = (productId) => {

        setCart(prev =>
            prev.filter(
                item => item.productId !== productId
            )
        );

    };

    const clearCart = () => {

        setCart([]);

    };

    const cartCount = useMemo(() => {

        return cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    }, [cart]);

    const value = {

        cart,

        cartCount,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeItem,

        clearCart

    };

    return (

        <CartContext.Provider value={value}>

            {children}

        </CartContext.Provider>

    );

};