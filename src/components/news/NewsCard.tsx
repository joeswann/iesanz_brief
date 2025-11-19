import { DCI } from "@/types/dci";
import LofiBox from "@/components/lofi/LofiBox";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { NewsItem } from "@/data/data.news";
import { css } from "@linaria/core";

interface NewsCardProps {
    item: NewsItem;
}

const cardContainer = css`
    width: 100%;
`;

const cardContent = css`
    margin-top: 16rem;
`;

const cardMeta = css`
    margin-bottom: 8rem;
    opacity: 0.6;
`;

const NewsCard: DCI<NewsCardProps> = ({ item, className }) => {
    return (
        <LofiBox className={className}>
            <div className={cardContainer}>
                <LofiImage ratio={16 / 9} label={item.imageLabel} />
                <div className={cardContent}>
                    <LofiHeading level={4}>{item.title}</LofiHeading>
                    <div className={cardMeta}>
                        {item.date} • {item.category} {item.chapter ? `(${item.chapter})` : ""}
                    </div>
                    <LofiText lines={3} />
                </div>
            </div>
        </LofiBox>
    );
};

export default NewsCard;
