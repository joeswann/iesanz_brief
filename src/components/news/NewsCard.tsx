import { DCI } from "@/types/dci";
import LofiBox from "@/components/lofi/LofiBox";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { NewsItem } from "@/data/data.news";

interface NewsCardProps {
    item: NewsItem;
}

const NewsCard: DCI<NewsCardProps> = ({ item, className }) => {
    return (
        <LofiBox className={className}>
            <div style={{ width: "100%" }}>
                <LofiImage ratio={16 / 9} label={item.imageLabel} />
                <div style={{ marginTop: "16rem" }}>
                    <LofiHeading level={4}>{item.title}</LofiHeading>
                    <div style={{ marginBottom: "8rem", opacity: 0.6 }}>
                        {item.date} • {item.category} {item.chapter ? `(${item.chapter})` : ""}
                    </div>
                    <LofiText lines={3} />
                </div>
            </div>
        </LofiBox>
    );
};

export default NewsCard;
