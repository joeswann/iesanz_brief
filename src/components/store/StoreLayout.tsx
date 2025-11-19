import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import LofiBox from "@/components/lofi/LofiBox";
import { storeProducts, productCategories, Product } from "@/data/data.store";
import { useState } from "react";
import { fontSize } from "@/styles/styling";
import { user } from "@/data/data.user";

const styles = css`
  display: grid;
  grid-template-columns: 250rem 1fr;
  gap: 48rem;
  padding-bottom: 48rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 24rem;
  }

  .category-list {
    display: flex;
    flex-direction: column;
    gap: 12rem;

    button {
      ${fontSize(1)}
      text-decoration: none;
      color: var(--foreground);
      padding: 8rem 0;
      border-bottom: 1px solid var(--light-grey);
      background: none;
      border-left: none;
      border-right: none;
      border-top: none;
      text-align: left;
      cursor: pointer;

      &:hover, &.active {
        opacity: 0.7;
        font-weight: bold;
      }
    }
  }

  .product-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    
    .content {
        margin-top: 16rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 8rem;
    }

    .price {
        ${fontSize(1.125)}
        font-weight: bold;
        margin-top: auto;
        padding-top: 16rem;
    }
    
    .member-price {
        color: #d4af37;
        ${fontSize(0.875)}
    }
  }
`;

const ProductCard: DCI<{ product: Product }> = ({ product }) => {
    return (
        <LofiBox className="product-card">
            <LofiImage ratio={1} label={product.imageLabel} />
            <div className="content">
                <div style={{ opacity: 0.6, fontSize: "12rem", textTransform: "uppercase" }}>
                    {product.category}
                </div>
                <LofiHeading level={4}>{product.name}</LofiHeading>
                <p>{product.description}</p>

                <div className="price">
                    ${product.price}
                    {product.memberPrice !== undefined && (
                        <div className="member-price">
                            Member Price: ${product.memberPrice === 0 ? "FREE" : product.memberPrice}
                        </div>
                    )}
                </div>

                <LofiButton variant="secondary">Add to Cart</LofiButton>
            </div>
        </LofiBox>
    )
}

const StoreLayout: DCI = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    const filteredProducts = selectedCategory === "All Products"
        ? storeProducts
        : storeProducts.filter(p => p.category === selectedCategory);

    return (
        <div className={styles}>
            <aside className="sidebar">
                <LofiHeading level={3}>Store Categories</LofiHeading>
                <nav className="category-list">
                    {productCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={selectedCategory === cat ? "active" : ""}
                        >
                            {cat}
                        </button>
                    ))}
                </nav>

                {!user.isLoggedIn && (
                    <LofiBox>
                        <LofiHeading level={4}>Member Discounts</LofiHeading>
                        <p>Login to access exclusive member pricing on publications and events.</p>
                        <LofiButton variant="primary">Login</LofiButton>
                    </LofiBox>
                )}
            </aside>

            <main>
                <div style={{ marginBottom: "32rem", borderBottom: "1px solid var(--foreground)", paddingBottom: "16rem" }}>
                    <LofiHeading level={1}>{selectedCategory}</LofiHeading>
                </div>

                <LofiGrid columns={3}>
                    {filteredProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </LofiGrid>
            </main>
        </div>
    );
};

export default StoreLayout;
