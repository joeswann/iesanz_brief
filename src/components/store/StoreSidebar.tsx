import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { productCategories } from "@/data/data.store";
import { user } from "@/data/data.user";
import LofiBox from "@/components/lofi/LofiBox";
import LofiHeading from "@/components/lofi/LofiHeading";
import { LofiButton } from "@/components/lofi/LofiButton";

interface StoreSidebarProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const StoreSidebar: DCI<StoreSidebarProps> = ({ selectedCategory, onSelectCategory }) => {
    return (
        <SidebarContainer>
            <SidebarSection title="Store Categories">
                {productCategories.map((cat) => (
                    <SidebarLink
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        isActive={selectedCategory === cat}
                    >
                        {cat}
                    </SidebarLink>
                ))}
            </SidebarSection>

            {!user.isLoggedIn && (
                <LofiBox>
                    <LofiHeading level={4}>Member Discounts</LofiHeading>
                    <p>Login to access exclusive member pricing on publications and events.</p>
                    <LofiButton variant="primary">Login</LofiButton>
                </LofiBox>
            )}
        </SidebarContainer>
    );
};

export default StoreSidebar;
