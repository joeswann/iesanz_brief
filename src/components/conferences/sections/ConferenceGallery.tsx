import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiImage from "@/components/lofi/LofiImage";
import LofiGrid from "@/components/lofi/LofiGrid";
import { Conference } from "@/data/data.conferences";

const sectionHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
`;

interface ConferenceGalleryProps {
  conf: Conference;
}

const ConferenceGallery: DCI<ConferenceGalleryProps> = ({ conf }) => {
  if (conf.status !== "Past") return null;

  return (
    <section>
      <div className={sectionHeader}>
        <LofiHeading level={2}>Photo Gallery</LofiHeading>
      </div>
      <LofiGrid columns={3}>
        <LofiImage ratio={4 / 3} label="Gallery 1" />
        <LofiImage ratio={4 / 3} label="Gallery 2" />
        <LofiImage ratio={4 / 3} label="Gallery 3" />
      </LofiGrid>
    </section>
  );
};

export default ConferenceGallery;
