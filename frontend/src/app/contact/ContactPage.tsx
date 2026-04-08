import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import AppCard from '@/Components/design-system/AppCard';
import AppSection from '@/Components/design-system/AppSection';
import FeatureCard from '@/Components/design-system/FeatureCard';
import { CardItem, EyebrowSectionContent } from '@/types/content';
import {
  contactPageBodyStyles,
  contactPageClasses,
  contactPageIframeStyles,
  contactPageStyles,
  contactPageTitleStyles,
} from './ContactPage.styles';

const contactIcons: ReactNode[] = [<FaPhone key="contact-1" />, <FaEnvelope key="contact-2" />, <FaMapMarkerAlt key="contact-3" />];

type ContactPageProps = {
  section: EyebrowSectionContent;
  infos: CardItem[];
  commitments: CardItem[];
  supportTitle: string;
  supportDescription: string;
  mapTitle: string;
};

export default function ContactPage({
  section,
  infos,
  commitments,
  supportTitle,
  supportDescription,
  mapTitle,
}: ContactPageProps) {
  return (
    <AppSection eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <Grid container spacing={3.5} sx={{ alignItems: 'stretch' }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3} sx={{ height: '100%' }}>
            <AppCard
              className={contactPageClasses.introCard}
              sx={contactPageStyles[contactPageClasses.introCard]}
              contentSx={{ p: 0 }}
              title={supportTitle}
              description={supportDescription}
              titleVariant="h3"
              titleSx={contactPageTitleStyles}
              descriptionSx={contactPageBodyStyles}
              contentSpacing={2}
            />
            <Grid container spacing={2.25}>
              {infos.map((item, index) => (
                <Grid key={item.title} size={{ xs: 12 }}>
                  <FeatureCard
                    icon={contactIcons[index]}
                    title={item.title}
                    description={item.description}
                    minHeight={150}
                    accent={index === 1 ? 'secondary' : 'primary'}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <AppCard
            className={contactPageClasses.mapCard}
            sx={contactPageStyles[contactPageClasses.mapCard]}
            contentSx={{ p: 0, height: '100%' }}
          >
            <Box
              component="iframe"
              title={mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.224305658459!2d2.2978!3d48.8584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b57f755623%3A0x1c665cc088ea6c5e!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1582712651990!5m2!1sfr!2sfr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={contactPageIframeStyles}
            />
          </AppCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {commitments.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <AppCard
              className={contactPageClasses.commitmentCard}
              sx={{
                ...contactPageStyles[contactPageClasses.commitmentCard],
                backgroundColor: index === 1 ? 'secondary.light' : 'background.paper',
              }}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </AppSection>
  );
}
