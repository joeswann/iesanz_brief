import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import LofiBox from "@/components/lofi/LofiBox";
import { storeProducts, Product } from "@/data/data.store";
import { useState } from "react";
import { fontSize } from "@/styles/styling";
import SidebarLayout from "@/components/layout/SidebarLayout";
import StoreSidebar from "./StoreSidebar";

const productCard = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const productContent = css`
  margin-top: 16rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8rem;
`;

const productPrice = css`
  ${fontSize(1.125)}
  font-weight: bold;
  margin-top: auto;
  padding-top: 16rem;
`;

const memberPrice = css`
  color: #d4af37;
  ${fontSize(0.875)}
`;

const mainHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--foreground);
  padding-bottom: 16rem;
`;

const ProductCard: DCI<{ product: Product }> = ({ product }) => {
    return (
        <LofiBox className={productCard}>
            <LofiImage ratio={1} label={product.imageLabel} />
            <div className={productContent}>
                <div style={{ opacity: 0.6, fontSize: "12rem", textTransform: "uppercase" }}>
                    {product.category}
                </div>
                <LofiHeading level={4}>{product.name}</LofiHeading>
                <p>{product.description}</p>

                <div className={productPrice}>
                    ${product.price}
                    {product.memberPrice !== undefined && (
                        <div className={memberPrice}>
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
        <SidebarLayout
            sidebar={
                <StoreSidebar
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            }
        >
            <main>
                <div className={mainHeader}>
                    <LofiHeading level={1}>{selectedCategory}</LofiHeading>
                </div>

                <LofiGrid columns={3}>
                    {filteredProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </LofiGrid>
            </main>
        </SidebarLayout>
    );
};

export default StoreLayout;
