export interface CartItem {
    id: string;
    name: string;
    variant: string;
    price: number;
    quantity: number;
}

export const cartItems: CartItem[] = [
    { id: "1", name: "IESANZ Branded Hoodie", variant: "Size L", price: 85, quantity: 1 },
    { id: "2", name: "Lighting Design Guide 2025", variant: "Digital Download", price: 150, quantity: 1 },
];

export const cart = {
    items: cartItems
};
