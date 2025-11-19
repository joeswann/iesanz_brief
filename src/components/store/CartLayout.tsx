import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiButton from "@/components/lofi/LofiButton";
import LofiBox from "@/components/lofi/LofiBox";
import { cart } from "@/data/data.cart";
import { fontSize } from "@/styles/styling";

const styles = css`
  display: grid;
  grid-template-columns: 1fr 350rem;
  gap: 48rem;
  padding-bottom: 64rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 24rem;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24rem;
    border-bottom: 1px solid var(--light-grey);
    
    .details {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .name {
        font-weight: bold;
        ${fontSize(1.125)}
    }

    .meta {
        opacity: 0.6;
        ${fontSize(0.875)}
    }

    .price {
        font-weight: bold;
        ${fontSize(1.125)}
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24rem;
    position: sticky;
    top: 24rem;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    
    &.total {
        font-weight: bold;
        ${fontSize(1.25)}
        border-top: 1px solid var(--foreground);
        padding-top: 16rem;
    }
  }
`;

const CartLayout: DCI = () => {
    // Mocking cart items for display since data.cart.ts structure wasn't fully defined with items in previous steps
    const cartItems = [
        { id: "1", name: "IESANZ Branded Hoodie", variant: "Size L", price: 85, quantity: 1 },
        { id: "2", name: "Lighting Design Guide 2025", variant: "Digital Download", price: 150, quantity: 1 },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const gst = subtotal * 0.1;
    const total = subtotal + gst;

    return (
        <div className={styles}>
            <div className="cart-items">
                <LofiHeading level={1}>Shopping Cart</LofiHeading>

                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="details">
                            <div className="name">{item.name}</div>
                            <div className="meta">{item.variant}</div>
                            <div className="meta">Qty: {item.quantity}</div>
                        </div>
                        <div className="price">${item.price}</div>
                    </div>
                ))}

                <div style={{ marginTop: "24rem" }}>
                    <LofiButton variant="secondary">Continue Shopping</LofiButton>
                </div>
            </div>

            <div className="summary">
                <LofiBox>
                    <LofiHeading level={3}>Order Summary</LofiHeading>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="summary-row">
                        <span>GST (10%)</span>
                        <span>${gst.toFixed(2)}</span>
                    </div>

                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <div style={{ marginTop: "24rem", display: "flex", flexDirection: "column", gap: "12rem" }}>
                        <LofiButton variant="primary">Checkout</LofiButton>
                        <div style={{ textAlign: "center", opacity: 0.6, fontSize: "12rem" }}>
                            Secure checkout powered by Stripe
                        </div>
                    </div>
                </LofiBox>
            </div>
        </div>
    );
};

export default CartLayout;
