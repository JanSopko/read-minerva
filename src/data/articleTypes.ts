export enum SectionItemType {
  Heading1 = "Heading1",
  Heading2 = "Heading2",
  TextParagraph = "TextParagraph",
  Image = "Image",
}

export interface TextStyle {
  font?: string;
  fontSize?: string;
  color?: string;
}

export interface ImageDimensions {
  x: number;
  y: number;
}

export interface Heading1Item {
  type: SectionItemType.Heading1;
  text: string;
  style?: TextStyle | null;
}

export interface Heading2Item {
  type: SectionItemType.Heading2;
  text: string;
  style?: TextStyle | null;
}

export interface TextParagraphItem {
  type: SectionItemType.TextParagraph;
  text: string;
  style?: TextStyle | null;
}

export interface ImageItem {
  type: SectionItemType.Image;
  source: string;
  dimensions?: ImageDimensions | null;
}

export type SectionItem =
  | Heading1Item
  | Heading2Item
  | TextParagraphItem
  | ImageItem;

export interface ArticleSection {
  id: string;
  items: SectionItem[];
}

export interface Article {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  sections: ArticleSection[];
}

export const mockArticles: Article[] = [
  {
    id: "article-1",
    title: "How AI Is Reshaping the Future of Digital Publishing",
    source: "Forbes",
    publishedAt: "2026-04-01T09:00:00Z",
    sections: [
      {
        id: "a1-section-1",
        items: [
          {
            type: SectionItemType.Heading1,
            text: "The Dawn of Intelligent Content",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Artificial intelligence is no longer a futuristic concept confined to research labs. It has become an integral part of how publishers create, distribute, and monetize content. From automated article summarization to personalized reading recommendations, AI tools are transforming every stage of the publishing pipeline.",
          },
          {
            type: SectionItemType.Image,
            source:
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            dimensions: { x: 800, y: 450 },
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Major publishers like The New York Times, The Washington Post, and Bloomberg have invested heavily in AI-driven newsrooms. These investments are paying off — reader engagement is up, production costs are down, and the speed of breaking news coverage has increased dramatically.",
          },
        ],
      },
      {
        id: "a1-section-2",
        items: [
          {
            type: SectionItemType.Heading2,
            text: "What This Means for Readers",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "For the average reader, the impact is subtle but significant. AI algorithms now curate personalized feeds that surface articles aligned with individual interests, reading history, and even time-of-day preferences. The result is a more engaging and relevant reading experience.",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "However, this personalization comes with important questions about editorial independence, filter bubbles, and the role of human judgment in journalism. Industry leaders are actively working on frameworks to balance algorithmic efficiency with journalistic integrity.",
          },
          {
            type: SectionItemType.Image,
            source:
              "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800",
          },
          {
            type: SectionItemType.Heading2,
            text: "Looking Ahead",
            style: { color: "#2563eb" },
          },
          {
            type: SectionItemType.TextParagraph,
            text: 'As we move into 2027 and beyond, the convergence of AI, augmented reality, and subscription-based models will likely redefine what it means to "read" an article. Publishers who adapt early will thrive; those who resist may find themselves left behind in an increasingly competitive landscape.',
          },
        ],
      },
    ],
  },
  {
    id: "article-2",
    title: "The Rise of Subscription-Based Media in Europe",
    source: "The Economist",
    publishedAt: "2026-03-28T14:30:00Z",
    sections: [
      {
        id: "a2-section-1",
        items: [
          {
            type: SectionItemType.Heading1,
            text: "A Continent Embraces Paid Journalism",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Across Europe, readers are increasingly willing to pay for quality journalism. From Scandinavia to the Mediterranean, subscription models are replacing the advertising-dependent business models that dominated the industry for decades. The shift reflects a growing recognition that reliable reporting has tangible value.",
          },
          {
            type: SectionItemType.Image,
            source:
              "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800",
            dimensions: { x: 800, y: 533 },
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Norway leads the pack, with over 45% of adults now paying for at least one digital news subscription. Sweden, Finland, and the Netherlands are not far behind. Even in Southern Europe, where free content culture once seemed unshakeable, publishers are reporting double-digit growth in paid subscribers.",
          },
        ],
      },
      {
        id: "a2-section-2",
        items: [
          {
            type: SectionItemType.Heading2,
            text: "What Drives the Willingness to Pay?",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Several factors converge to explain this trend. Trust in traditional media remains relatively high in many European countries compared to other regions. EU regulations around data privacy have also weakened the targeted advertising model, making subscription revenue more attractive for publishers.",
          },
          {
            type: SectionItemType.Image,
            source:
              "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800",
          },
          {
            type: SectionItemType.Heading2,
            text: "Challenges Ahead",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Despite encouraging numbers, the European subscription market faces real obstacles. Subscription fatigue is a growing concern — consumers already juggle multiple streaming, music, and software subscriptions. Publishers must continuously demonstrate value to avoid churn.",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "There is also the question of accessibility. If quality journalism sits entirely behind paywalls, how does the public square function? Several European publishers are experimenting with hybrid models that keep breaking news free while reserving in-depth analysis for subscribers.",
          },
        ],
      },
    ],
  },
  {
    id: "article-3",
    title: "Why Readers Are Returning to Long-Form Journalism",
    source: "The New York Times",
    publishedAt: "2026-03-15T11:00:00Z",
    sections: [
      {
        id: "a3-section-1",
        items: [
          {
            type: SectionItemType.Heading1,
            text: "The Quiet Renaissance of Deep Reading",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "In an era of 280-character posts and 60-second videos, an unexpected counter-trend is emerging: readers are spending more time with long-form articles than they have in years. Industry data shows that average reading time for articles over 2,000 words has increased by 34% since 2024.",
          },
          {
            type: SectionItemType.Image,
            source:
              "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
            dimensions: { x: 800, y: 534 },
          },
          {
            type: SectionItemType.TextParagraph,
            text: "The reasons are multifaceted. Growing distrust of social media feeds has pushed readers toward sources they perceive as more thorough and credible. Meanwhile, a new generation of newsletter writers and independent journalists has proven that depth and nuance can thrive in digital formats.",
          },
        ],
      },
      {
        id: "a3-section-2",
        items: [
          {
            type: SectionItemType.Heading2,
            text: "The Economics of Depth",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Long-form content is also proving its worth commercially. Publishers report that long-form articles drive significantly higher subscription conversions than short news pieces. Readers who engage with a 3,000-word investigative piece are three times more likely to subscribe than those who only skim headlines.",
          },
          {
            type: SectionItemType.Image,
            source:
              "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
          },
          {
            type: SectionItemType.Heading2,
            text: "What Publishers Are Doing Differently",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "Smart publishers are investing in presentation as much as prose. Interactive graphics, embedded audio narrations, and carefully designed reading experiences are turning long articles into immersive journeys. The goal is not just to inform but to create moments of focused attention in an otherwise fragmented media landscape.",
          },
          {
            type: SectionItemType.TextParagraph,
            text: "The message is clear: quality content, given the right format and context, still commands attention. The challenge for the industry is to make the economics of deep reporting sustainable — and early signs suggest that readers are willing to fund the journalism they value.",
          },
        ],
      },
    ],
  },
];
