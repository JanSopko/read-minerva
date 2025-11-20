export interface FAQItem {
  question: string;
  answer: string;
}

export type Language = "en" | "sk" | "cz";

export const FAQ_DATA: Record<Language, FAQItem[]> = {
  en: [
    {
      question: "What is Minerva?",
      answer:
        "Minerva is a digital reading platform that gives you unlimited access to a wide range of magazines and newspapers from around the world, and all in one place.",
    },
    {
      question: "How does Minerva work?",
      answer:
        "Once you sign up, you can explore thousands of publications directly through the Minerva app or website. Simply browse, search, and start reading instantly.",
    },
    {
      question: "What kind of content can I find on Minerva?",
      answer:
        "Minerva offers a wide selection of magazines and newspapers across categories such as news, lifestyle, business, technology, fashion, travel, and more.",
    },
    {
      question: "Can I read offline?",
      answer:
        "Yes! You can enjoy reading offline without an internet connection.",
    },
    {
      question: "On which devices can I use Minerva?",
      answer:
        "Minerva works on smartphones, tablets, and desktop computers. You can also sync your reading across multiple devices.",
    },
    {
      question: "How much does Minerva cost?",
      answer:
        "We offer a subscription model for monthly and yearly fees. Please check out our Plan & Pricing section for the latest offers.",
    },
    {
      question: "Can I share my subscription?",
      answer:
        "Yes, depending on the plan you choose, you may be able to share your Minerva subscription with family members.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! New users can start with a free trial to explore the platform before committing to a subscription.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime in your account settings. Once canceled, you will still have access until the end of your billing cycle.",
    },
    {
      question: "Which languages are available?",
      answer:
        "Minerva is working to support multiple languages, depending on the publication. At the moment, you can read in Slovak and Czech languages.",
    },
    {
      question: "Can I use Minerva abroad?",
      answer:
        "Yes, Minerva can be accessed anywhere in the world. Some regional restrictions may apply depending on publishers.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "If you need help, visit our Contact us section or let us know what you have on mind on our live chat. Our support team is here to assist you.",
    },
  ],
  sk: [
    {
      question: "Čo je Minerva?",
      answer:
        "Minerva je digitálna čitateľská platforma, ktorá vám poskytuje neobmedzený prístup k širokému spektru časopisov a novín z celého sveta, a to všetko na jednom mieste.",
    },
    {
      question: "Ako Minerva funguje?",
      answer:
        "Po registrácii môžete preskúmať tisíce publikácií priamo cez aplikáciu Minerva alebo webovú stránku. Jednoducho prehľadávajte, vyhľadávajte a začnite čítať okamžite.",
    },
    {
      question: "Aký druh obsahu môžem nájsť na Minerva?",
      answer:
        "Minerva ponúka široký výber časopisov a novín v kategóriách ako správy, životný štýl, podnikanie, technológie, móda, cestovanie a ďalšie.",
    },
    {
      question: "Môžem čítať offline?",
      answer:
        "Áno! Môžete si užívať čítanie offline bez internetového pripojenia.",
    },
    {
      question: "Na ktorých zariadeniach môžem používať Minerva?",
      answer:
        "Minerva funguje na smartfónoch, tabletoch a stolných počítačoch. Môžete tiež synchronizovať svoje čítanie naprieč viacerými zariadeniami.",
    },
    {
      question: "Koľko stojí Minerva?",
      answer:
        "Ponúkame predplatné za mesačné a ročné poplatky. Pozrite si našu sekciu Plány a ceny pre najnovšie ponuky.",
    },
    {
      question: "Môžem zdieľať svoje predplatné?",
      answer:
        "Áno, v závislosti od plánu, ktorý si vyberiete, môžete zdieľať svoje predplatné Minerva s rodinnými príslušníkmi.",
    },
    {
      question: "Je k dispozícii bezplatná skúška?",
      answer:
        "Áno! Noví používatelia môžu začať s bezplatnou skúškou, aby preskúmali platformu pred záväzkom k predplatnému.",
    },
    {
      question: "Ako zruším svoje predplatné?",
      answer:
        "Svoje predplatné môžete zrušiť kedykoľvek v nastaveniach účtu. Po zrušení budete mať stále prístup do konca fakturačného cyklu.",
    },
    {
      question: "Ktoré jazyky sú k dispozícii?",
      answer:
        "Minerva pracuje na podpore viacerých jazykov v závislosti od publikácie. Momentálne môžete čítať v slovenčine a češtine.",
    },
    {
      question: "Môžem používať Minerva v zahraničí?",
      answer:
        "Áno, Minerva je dostupná kdekoľvek vo svete. Môžu sa uplatniť niektoré regionálne obmedzenia v závislosti od vydavateľov.",
    },
    {
      question: "Ako kontaktujem zákaznícku podporu?",
      answer:
        "Ak potrebujete pomoc, navštívte našu sekciu Kontaktujte nás alebo nám dajte vedieť, čo máte na mysli v našom živom chate. Náš tím podpory je tu, aby vám pomohol.",
    },
  ],
  cz: [
    {
      question: "Co je Minerva?",
      answer:
        "Minerva je digitální čtenářská platforma, která vám poskytuje neomezený přístup k široké škále časopisů a novin z celého světa, a to vše na jednom místě.",
    },
    {
      question: "Jak Minerva funguje?",
      answer:
        "Po registraci můžete prozkoumat tisíce publikací přímo prostřednictvím aplikace Minerva nebo webové stránky. Jednoduše procházejte, vyhledávejte a začněte číst okamžitě.",
    },
    {
      question: "Jaký druh obsahu najdu na Minerva?",
      answer:
        "Minerva nabízí široký výběr časopisů a novin v kategoriích jako zprávy, životní styl, podnikání, technologie, móda, cestování a další.",
    },
    {
      question: "Mohu číst offline?",
      answer: "Ano! Můžete si užívat čtení offline bez internetového připojení.",
    },
    {
      question: "Na kterých zařízeních mohu používat Minerva?",
      answer:
        "Minerva funguje na chytrých telefonech, tabletech a stolních počítačích. Můžete také synchronizovat své čtení napříč více zařízeními.",
    },
    {
      question: "Kolik stojí Minerva?",
      answer:
        "Nabízíme předplatné za měsíční a roční poplatky. Podívejte se na naši sekci Plány a ceny pro nejnovější nabídky.",
    },
    {
      question: "Mohu sdílet své předplatné?",
      answer:
        "Ano, v závislosti na plánu, který si vyberete, můžete sdílet své předplatné Minerva s rodinnými příslušníky.",
    },
    {
      question: "Je k dispozici bezplatná zkušební verze?",
      answer:
        "Ano! Noví uživatelé mohou začít s bezplatnou zkušební verzí, aby prozkoumali platformu před závazkem k předplatnému.",
    },
    {
      question: "Jak zruším své předplatné?",
      answer:
        "Své předplatné můžete zrušit kdykoli v nastavení účtu. Po zrušení budete mít stále přístup do konce fakturačního cyklu.",
    },
    {
      question: "Které jazyky jsou k dispozici?",
      answer:
        "Minerva pracuje na podpoře více jazyků v závislosti na publikaci. V současné době můžete číst ve slovenštině a češtině.",
    },
    {
      question: "Mohu používat Minerva v zahraničí?",
      answer:
        "Ano, Minerva je dostupná kdekoli ve světě. Mohou se uplatnit některá regionální omezení v závislosti na vydavatelích.",
    },
    {
      question: "Jak kontaktuji zákaznickou podporu?",
      answer:
        "Pokud potřebujete pomoc, navštivte naši sekci Kontaktujte nás nebo nám dejte vědět, co máte na mysli v našem živém chatu. Náš tým podpory je zde, aby vám pomohl.",
    },
  ],
};

