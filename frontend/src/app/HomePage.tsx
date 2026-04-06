import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  FaHeart,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaPeopleCarry,
  FaRegHandshake,
  FaUniversity,
} from 'react-icons/fa';
import { AppCard, AppSection, FeatureCard, HeroBanner } from '@/Components/design-system';
import { HOME_SECTION_IDS } from '@/config/routes';
import { CardCollection, HeroContent, IntroContent, SectionContent } from '@/types/content';
import {
  homePageClasses,
  homePageClosingTitleStyles,
  homePageLongTextStyles,
  homePageQuoteTitleStyles,
  homePageStoryBodyStyles,
  homePageStoryTitleStyles,
  homePageStyles,
} from './HomePage.styles';

const priorityIcons = [<FaRegHandshake key="priority-1" />, <FaHeart key="priority-2" />, <FaPeopleCarry key="priority-3" />];
const actionIcons = [
  <FaHandsHelping key="action-1" />,
  <FaRegHandshake key="action-2" />,
  <FaPeopleCarry key="action-3" />,
  <FaUniversity key="action-4" />,
  <FaHeart key="action-5" />,
  <FaMapMarkedAlt key="action-6" />,
];

type HomePageProps = {
  hero: HeroContent;
  intro: IntroContent;
  priorities: CardCollection;
  actions: CardCollection;
  closing: SectionContent;
};

export default function HomePage({ hero, intro, priorities, actions, closing }: HomePageProps) {
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

      <AppSection
        id={HOME_SECTION_IDS.whoWeAre}
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
      >
        <Grid container spacing={3.5} alignItems="stretch">
          <Grid size={{ xs: 12, md: 7 }}>
            <AppCard className={homePageClasses.storyCard} sx={homePageStyles[homePageClasses.storyCard]} contentSx={{ p: 0 }}>
              <Stack spacing={3}>
                <Typography variant="h3" sx={homePageStoryTitleStyles}>
                  {intro.cardTitle}
                </Typography>
                <Typography color="text.secondary" sx={homePageStoryBodyStyles}>
                  {intro.cardBody}
                </Typography>
                <Box className={homePageClasses.quote} sx={homePageStyles[homePageClasses.quote]}>
                  <Typography variant="h4" sx={homePageQuoteTitleStyles}>
                    {intro.quote}
                  </Typography>
                </Box>
              </Stack>
            </AppCard>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5} height="100%">
              {intro.points.map((point, index) => (
                <AppCard
                  key={point}
                  className={homePageClasses.pointCard}
                  sx={{
                    ...homePageStyles[homePageClasses.pointCard],
                    backgroundColor: index === 1 ? 'secondary.light' : 'background.paper',
                  }}
                >
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {point}
                  </Typography>
                </AppCard>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </AppSection>

      <AppSection
        id={HOME_SECTION_IDS.mission}
        eyebrow={priorities.eyebrow}
        title={priorities.title}
        description={priorities.description}
      >
        <Grid container spacing={3}>
          {priorities.items.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <FeatureCard
                icon={priorityIcons[index]}
                title={item.title}
                description={item.description}
                minHeight={260}
                accent={index === 1 ? 'secondary' : 'primary'}
              />
            </Grid>
          ))}
        </Grid>
      </AppSection>

      <AppSection
        id={HOME_SECTION_IDS.services}
        eyebrow={actions.eyebrow}
        title={actions.title}
        description={actions.description}
      >
        <Grid container spacing={3}>
          {actions.items.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <FeatureCard
                icon={actionIcons[index]}
                title={item.title}
                description={item.description}
                minHeight={225}
                accent={index % 3 === 1 ? 'secondary' : 'primary'}
              />
            </Grid>
          ))}
        </Grid>

        <AppCard
          className={homePageClasses.closingCard}
          sx={homePageStyles[homePageClasses.closingCard]}
          contentSx={{ p: 0, maxWidth: 760 }}
          title={closing.title}
          description={closing.description}
          titleVariant="h3"
          titleSx={homePageClosingTitleStyles}
          descriptionSx={homePageLongTextStyles}
        />
      </AppSection>
    </Stack>
  );
}
