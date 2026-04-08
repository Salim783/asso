import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image, { StaticImageData } from 'next/image';
import img1 from '@/assets/donsFonds.jpg';
import img2 from '@/assets/donVet.jpg';
import img3 from '@/assets/donsAlim.jpg';
import img4 from '@/assets/donEcole.jpeg';
import AppCard from '@/Components/design-system/AppCard';
import AppSection from '@/Components/design-system/AppSection';
import HeroBanner from '@/Components/design-system/HeroBanner';
import { CardItem, HeroContent, SectionContent } from '@/types/content';
import {
  moroccoPageBodyStyles,
  moroccoPageCardTitleStyles,
  moroccoPageClasses,
  moroccoPageClosingBodyStyles,
  moroccoPageClosingTitleStyles,
  moroccoPageStyles,
} from './MoroccoPage.styles';

const images: StaticImageData[] = [img1, img2, img3, img4];

type MoroccoPageProps = {
  hero: HeroContent;
  section: SectionContent;
  actions: CardItem[];
  closing: SectionContent;
};

export default function MoroccoPage({ hero, section, actions, closing }: MoroccoPageProps) {
  return (
    <Stack spacing={0}>
      <HeroBanner
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryAction={hero.primaryAction}
        secondaryAction={hero.secondaryAction}
        highlights={hero.highlights}
        stats={hero.stats}
        asideTitle={hero.asideTitle}
        asideDescription={hero.asideDescription}
      />

      <AppSection title={section.title} description={section.description}>
        <Grid container spacing={3}>
          {actions.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <AppCard
                className={moroccoPageClasses.card}
                sx={moroccoPageStyles[moroccoPageClasses.card]}
                media={
                  <Box className={moroccoPageClasses.imageWrap} sx={moroccoPageStyles[moroccoPageClasses.imageWrap]}>
                    <Image
                      src={images[index]}
                      alt={item.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                }
                title={item.title}
                description={item.description}
                titleVariant="h4"
                titleSx={moroccoPageCardTitleStyles}
                descriptionSx={moroccoPageBodyStyles}
              />
            </Grid>
          ))}
        </Grid>

        <AppCard
          className={moroccoPageClasses.closingCard}
          sx={moroccoPageStyles[moroccoPageClasses.closingCard]}
          contentSx={{ p: 0, maxWidth: 760 }}
          title={closing.title}
          description={closing.description}
          titleVariant="h3"
          titleSx={moroccoPageClosingTitleStyles}
          descriptionSx={moroccoPageClosingBodyStyles}
        />
      </AppSection>
    </Stack>
  );
}
