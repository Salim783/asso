import AppCard from '@/Components/design-system/AppCard';
import AppSection from '@/Components/design-system/AppSection';
import { EyebrowSectionContent } from '@/types/content';
import { termsPageBodyStyles, termsPageClasses, termsPageStyles, termsPageTitleStyles } from './TermsPage.styles';

type TermsPageProps = {
  section: EyebrowSectionContent;
  cardTitle: string;
  cardDescription: string;
};

export default function TermsPage({ section, cardTitle, cardDescription }: TermsPageProps) {
  return (
    <AppSection eyebrow={section.eyebrow} title={section.title} description={section.description} align="center">
      <AppCard
        className={termsPageClasses.card}
        sx={termsPageStyles[termsPageClasses.card]}
        align="center"
        title={cardTitle}
        description={cardDescription}
        titleVariant="h3"
        titleSx={termsPageTitleStyles}
        descriptionSx={termsPageBodyStyles}
      />
    </AppSection>
  );
}
