import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiBox from "@/components/lofi/LofiBox";
import { cart } from "@/data/data.cart";
import { fontSize } from "@/styles/styling";

const layoutContainer = css`
  display: grid;
  grid-template-columns: 1fr 350rem;
  gap: 48rem;
  padding-bottom: 64rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const cartItemsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

const cartItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24rem;
  border-bottom: 1px solid var(--light-grey);
`;

const itemDetails = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const itemName = css`
  font-weight: bold;
  ${fontSize(1.125)}
`;

const itemMeta = css`
  opacity: 0.6;
  ${fontSize(0.875)}
`;

const itemPrice = css`
  font-weight: bold;
  ${fontSize(1.125)}
`;

const summaryContainer = css`
  display: flex;
  flex-direction: column;
  gap: 24rem;
  position: sticky;
  top: 24rem;
`;

const summaryRow = css`
  display: flex;
  justify-content: space-between;
`;

const totalRow = css`
  font-weight: bold;
  ${fontSize(1.25)}
  border-top: 1px solid var(--foreground);
  padding-top: 16rem;
`;

const continueShopping = css`
  margin-top: 24rem;
`;

const checkoutActions = css`
  margin-top: 24rem;
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

const secureCheckout = css`
  text-align: center;
  opacity: 0.6;
  font-size: 12rem;
`;

const CartLayout: DCI = () => {
    const cartItems = cart.items;

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const gst = subtotal * 0.1;
    const total = subtotal + gst;

    return (
        <div className={layoutContainer}>
            <div className={cartItemsContainer}>
                <LofiHeading level={1}>Shopping Cart</LofiHeading>

                {cartItems.map(item => (
                    <div key={item.id} className={cartItem}>
                        <div className={itemDetails}>
                            <div className={itemName}>{item.name}</div>
                            <div className={itemMeta}>{item.variant}</div>
                            <div className={itemMeta}>Qty: {item.quantity}</div>
                        </div>
                        <div className={itemPrice}>${item.price}</div>
                    </div>
                ))}

                <div className={continueShopping}>
                    <LofiButton variant="secondary">Continue Shopping</LofiButton>
                </div>
            </div>

            <div className={summaryContainer}>
                <LofiBox>
                    <LofiHeading level={3}>Order Summary</LofiHeading>

                    <div className={summaryRow}>
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className={summaryRow}>
                        <span>GST (10%)</span>
                        <span>${gst.toFixed(2)}</span>
                    </div>

                    <div className={cx(summaryRow, totalRow)}>
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <div className={checkoutActions}>
                        <LofiButton variant="primary">Checkout</LofiButton>
                        <div className={secureCheckout}>
                            Secure checkout powered by Stripe
                        </div>
                    </div>
                </LofiBox>
            </div>
        </div>
    );
};

export default CartLayout;
