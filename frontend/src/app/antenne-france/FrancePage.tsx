import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { GiClothes, GiHotMeal, GiMusicalNotes } from 'react-icons/gi';
import AppCard from '@/Components/design-system/AppCard';
import AppSection from '@/Components/design-system/AppSection';
import FeatureCard from '@/Components/design-system/FeatureCard';
import HeroBanner from '@/Components/design-system/HeroBanner';
import { CardItem, HeroContent, SectionContent } from '@/types/content';
import {
  francePageClasses,
  francePageClosingBodyStyles,
  francePageClosingTitleStyles,
  francePageStyles,
} from './FrancePage.styles';

const actionIcons = [<GiHotMeal key="france-1" />, <GiClothes key="france-2" />, <GiMusicalNotes key="france-3" />];

type FrancePageProps = {
  hero: HeroContent;
  section: SectionContent;
  actions: CardItem[];
  closing: SectionContent;
};

export default function FrancePage({ hero, section, actions, closing }: FrancePageProps) {
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
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <FeatureCard
                icon={actionIcons[index]}
                title={item.title}
                description={item.description}
                minHeight={250}
                accent={index === 1 ? 'secondary' : 'primary'}
              />
            </Grid>
          ))}
        </Grid>

        <AppCard
          className={francePageClasses.closingCard}
          sx={francePageStyles[francePageClasses.closingCard]}
          contentSx={{ p: 0, maxWidth: 720 }}
          title={closing.title}
          description={closing.description}
          titleVariant="h3"
          titleSx={francePageClosingTitleStyles}
          descriptionSx={francePageClosingBodyStyles}
        />
      </AppSection>
    </Stack>
  );
}
