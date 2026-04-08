import AppCard from '@/Components/design-system/AppCard';
import AppSection from '@/Components/design-system/AppSection';
import { EyebrowSectionContent } from '@/types/content';
import {
  legalMentionsPageBodyStyles,
  legalMentionsPageClasses,
  legalMentionsPageStyles,
  legalMentionsPageTitleStyles,
} from './LegalMentionsPage.styles';

type LegalMentionsPageProps = {
  section: EyebrowSectionContent;
  cardTitle: string;
  cardDescription: string;
};

export default function LegalMentionsPage({
  section,
  cardTitle,
  cardDescription,
}: LegalMentionsPageProps) {
  return (
    <AppSection eyebrow={section.eyebrow} title={section.title} description={section.description} align="center">
      <AppCard
        className={legalMentionsPageClasses.card}
        sx={legalMentionsPageStyles[legalMentionsPageClasses.card]}
        align="center"
        title={cardTitle}
        description={cardDescription}
        titleVariant="h3"
        titleSx={legalMentionsPageTitleStyles}
        descriptionSx={legalMentionsPageBodyStyles}
      />
    </AppSection>
  );
}
