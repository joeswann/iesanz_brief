import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { categories } from "@/data/data.news";

const NewsSidebar: DCI = () => {

    return (
        <SidebarContainer>
            <SidebarSection title="Categories">
                {categories.map((category) => (
                    <SidebarLink key={category} to={`/news?category=${encodeURIComponent(category)}`}>
                        {category}
                    </SidebarLink>
                ))}
            </SidebarSection>
        </SidebarContainer>
    );
};

export default NewsSidebar;
