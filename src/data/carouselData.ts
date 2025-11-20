export interface CarouselItemData {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

// TODO: these will come from API
export const carouselItems: CarouselItemData[] = [
  {
    id: "item-1",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/690cb15d51c4241fc8be2a3e/Bulgari-Hotel--Ranfushi---Credit-Bulgari-Hotel--Ranfushi/0x0.jpg?format=jpg&height=1125&width=2000",
    altText: "Forbes Travel Guide’s Most Anticipated Hotel Openings Of 2026",
    title: "Forbes Travel Guide’s Most Anticipated Hotel Openings Of 2026",
    description: "Forbes Travel Guide’s Most Anticipated Hotel Openings Of 2026",
    link: "https://www.forbes.com/sites/forbestravelguide/2025/11/09/forbes-travel-guides--most-anticipated-hotel-openings-of-2026/",
  },
  {
    id: "item-2",
    imageUrl: "https://cdn.forbes.sk/uploads/2025/11/MMPhoto_1920px_L-18-e1762417816650.webp?r=eyJ3IjoxMTEwLCJxIjo5MCwicyI6ImpwZyIsImgiOjYyNH0%3D",
    altText: "Cyrrus na Slovensku: Investičný svet sa roky točil okolo pár vyvolených",
    title: "Cyrrus: Na Slovensku sa roky investičný svet točil okolo pár vyvolených",
    description: "My tu hru nehráme, hovorí Dávid Jančiar z Cyrrusu",
    link: "https://www.forbes.sk/cyrrus-na-slovensku-sa-roky-investicny-svet-tocil-okolo-par-vyvolenych-my-tu-hru-nehrame/",
  },
  {
    id: "item-3",
    imageUrl: "https://cdn.forbes.sk/uploads/2025/11/bruce_flatt-e1762676655311.webp?r=eyJ3IjoxMTEwLCJxIjo5MCwicyI6ImpwZyIsImgiOjYyNH0%3D",
    altText: "Investičný gigant tvrdí, že AI nie je bublina",
    title: "Investičný gigant tvrdí, že AI nie je bublina",
    description: "Niektoré krajiny budú mať problém, varuje Bruce Flatt",
    link: "https://www.forbes.sk/investicny-gigant-tvrdi-ze-ai-nie-je-bublina-niektore-krajiny-budu-mat-problem-varuje/",
  },
  {
    id: "item-4",
    imageUrl: "https://static01.nyt.com/images/2025/11/09/us/politics/09dc-investigate-grid-1/09dc-investigate-grid-1-square640-v2.jpg?quality=75&auto=webp",
    altText: "Trump Allies Served With Grand Jury Subpoenas",
    title: "Trump Allies Served With Grand Jury Subpoenas",
    description: "Several close associates of Donald J. Trump received subpoenas in a sprawling federal investigation",
    link: "https://www.nytimes.com/2025/11/09/us/politics/trump-conspiracy-probe-subpoenas.html",
  },
  {
    id: "item-5",
    imageUrl: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2DHZNJDGXY6CTCMZBQB7NVJJGQ_size-normalized.jpg&w=440 400w",
    altText: "States brace for SNAP benefit cuts under Trump",
    title: "States brace for SNAP benefit cuts under Trump",
    description: "States are preparing for potential cuts to food assistance programs",
    link: "https://www.washingtonpost.com/politics/2025/11/09/snap-benefits-states-usda-trump/",
  },
  {
    id: "item-6",
    imageUrl: "https://images.wsj.net/im-86126640?width=700&size=1.499",
    altText: "Trump and Biden Tax Laws Face Uncertain Future",
    title: "Trump and Biden Tax Laws Face Uncertain Future",
    description: "Corporate tax cuts and other provisions are set to expire",
    link: "https://www.wsj.com/politics/policy/trump-biden-tax-laws-corporate-bace4fe8?mod=trending_now_news_4",
  },
];

// Configuration
export const carouselConfig = {
  autoPlaySpeed: 30, // pixels per second
  autoPlayInterval: 16, // milliseconds (60fps)
  itemWidth: 320, // pixels
  itemHeight: 240, // pixels
  gap: 20, // pixels between items
};

