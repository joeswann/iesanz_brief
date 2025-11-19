import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { LofiCard } from "@/components/lofi/LofiLayouts";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

const newsImage = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: ${spacing(2)};
  background-color: #eee;
`;

interface ChapterGalleryProps {
    gallery: any[];
}

const ChapterGallery: DCI<ChapterGalleryProps> = ({ gallery }) => {
    return (
        <div>
            <TypeHeading level={2}>Gallery</TypeHeading>
            {gallery && gallery.length > 0 ? (
                <div className={grid}>
                    {gallery.map((album: any) => (
                        <LofiCard key={album.id}>
                            <img src={album.image} alt={album.title} className={newsImage} />
                            <TypeHeading level={4}>{album.title}</TypeHeading>
                            <TypeBody color="muted">{album.count} Photos</TypeBody>
                        </LofiCard>
                    ))}
                </div>
            ) : (
                <TypeBody color="muted">No gallery albums.</TypeBody>
            )}
        </div>
    );
};

export default ChapterGallery;
