export const manuscriptGapData = [
  {
    author: "New Testament (Multiple Writers)",
    work: "New Testament Canon",
    dateWritten: "50 – 100 AD",
    earliestCopy: "~125 AD (P52)",
    timeGapYears: 30,
    copiesCount: 5856,
    totalLangCopies: 24000,
    reliabilityRating: "UNRIVALED",
    notes: "Over 5,800 Greek manuscripts, plus 18,000+ in Latin, Syriac, Coptic, and Ethiopic. Earliest fragment (P52) within 30-40 years of original composition."
  },
  {
    author: "Homer",
    work: "Iliad",
    dateWritten: "800 BC",
    earliestCopy: "400 BC",
    timeGapYears: 400,
    copiesCount: 1757,
    reliabilityRating: "HIGH (CLASSICAL)",
    notes: "The most abundant classical secular text, yet still has a 400-year gap and fewer than 1/3 the manuscripts of the NT."
  },
  {
    author: "Alexander the Great (Arrian)",
    work: "Anabasis of Alexander",
    dateWritten: "130 AD",
    earliestCopy: "900 AD",
    timeGapYears: 770,
    copiesCount: 20,
    reliabilityRating: "STANDARD CLASSICAL",
    notes: "Primary sources for Alexander (Arrian & Plutarch) wrote 400+ years after his death; earliest surviving manuscripts are 800+ years later."
  },
  {
    author: "Julius Caesar",
    work: "Gallic Wars",
    dateWritten: "50 BC",
    earliestCopy: "900 AD",
    timeGapYears: 950,
    copiesCount: 10,
    reliabilityRating: "STANDARD CLASSICAL",
    notes: "Accepted as reliable historical record of Caesar's campaign, based on just 10 manuscripts dated ~1,000 years after event."
  },
  {
    author: "Tacitus",
    work: "Annals of Imperial Rome",
    dateWritten: "110 AD",
    earliestCopy: "1000 AD",
    timeGapYears: 890,
    copiesCount: 3,
    reliabilityRating: "MODERATE",
    notes: "Main Roman historian for 1st Century emperors. Only 3 partial manuscripts survive."
  },
  {
    author: "Plato",
    work: "Tetralogies (Dialogues)",
    dateWritten: "400 BC",
    earliestCopy: "895 AD",
    timeGapYears: 1295,
    copiesCount: 210,
    reliabilityRating: "MODERATE",
    notes: "Foundation of Western philosophy rests on manuscripts written nearly 1,300 years after Plato died."
  },
  {
    author: "Herodotus",
    work: "Histories",
    dateWritten: "440 BC",
    earliestCopy: "900 AD",
    timeGapYears: 1340,
    copiesCount: 109,
    reliabilityRating: "MODERATE",
    notes: "'Father of History'. 1,300+ year gap between writing and earliest manuscript."
  }
];

export const manuscriptsList = [
  {
    id: "MSS-P52",
    designation: "Papyrus 52 (P52 / Rylands Fragment)",
    date: "~125 AD (100–150 AD)",
    location: "John Rylands Library, Manchester (P.Ryl.Gk.457)",
    provenance: "Fayum, Upper Egypt",
    contents: "Gospel of John 18:31–33 (recto) and 18:37–38 (verso)",
    significance: "The earliest surviving fragment of any New Testament book. Because John was written in Asia Minor (Ephesus) ~90 AD, finding a copied papyrus in remote Egypt by ~125 AD proves John could not have been written in the 2nd century.",
    syllogism: {
      p1: "Skeptical 19th-century scholarship claimed the Gospel of John was a late 2nd-century myth (c. 170–200 AD).",
      p2: "Papyrus 52 was discovered in Upper Egypt and paleographically dated to c. 125 AD.",
      c: "John must have been composed in the 1st century to allow time for writing, copying, and distribution across the Mediterranean."
    },
    primaryTextSnippet: "Recto (John 18:31-33): '...OI IOYDAIOI HMIN OYK EXESTIN APOKTEINAI OYDENA...' (The Jews said, 'It is not lawful for us to put anyone to death')",
    category: "[MANUSCRIPT PRIMER]"
  },
  {
    id: "MSS-1QISA",
    designation: "The Great Isaiah Scroll (1QIsaᵃ)",
    date: "c. 125–100 BC",
    location: "Israel Museum, Jerusalem (Shrine of the Book)",
    provenance: "Cave 1, Qumran (Dead Sea)",
    contents: "Complete 66 chapters of the Book of Isaiah in Hebrew",
    significance: "Predates the oldest previously known Hebrew text (the Aleppo Codex, c. 935 AD) by over 1,000 years. Comparison proved the Jewish scribal transmission was over 95% word-for-word identical over a millennium of copying.",
    syllogism: {
      p1: "Skeptics alleged that the Old Testament text had been corrupted during 1,000 years of medieval copying.",
      p2: "The 1947 discovery of 1QIsaᵃ provided a complete Isaiah manuscript 1,000 years older than any known medieval copy.",
      c: "Textual comparison showed >95% verbatim agreement, with variations consisting almost entirely of minor spelling updates."
    },
    primaryTextSnippet: "Contains Isaiah 53 (Servant Song) word-for-word in 2nd century BC Hebrew.",
    category: "[OLD TESTAMENT FIDELITY]"
  },
  {
    id: "MSS-SINAITICUS",
    designation: "Codex Sinaiticus ( ℵ / 01 )",
    date: "c. 330–360 AD",
    location: "British Library (Add MS 43725) / St. Catherine's Monastery",
    provenance: "Mount Sinai, Egypt",
    contents: "Complete New Testament + Old Testament (Septuagint)",
    significance: "One of the two oldest Great Uncial Bibles. Written on fine parchment in Greek Alexandrian text-type. Essential primary witness for modern critical textual apparatuses (NA28/UBS5).",
    syllogism: {
      p1: "The earliest complete New Testament Bibles were commissioned during the Constantine era (4th century).",
      p2: "Codex Sinaiticus preserves the entire 27-book New Testament intact in Greek.",
      c: "Confirms that by 350 AD, the New Testament canon recognized today was completely solidified."
    },
    primaryTextSnippet: "Written in four columns per page in crisp uncial script without spaces (scriptio continua).",
    category: "[GREAT UNCIAL CODICES]"
  },
  {
    id: "MSS-VATICANUS",
    designation: "Codex Vaticanus ( B / 03 )",
    date: "c. 300–325 AD",
    location: "Vatican Library (Cod. Vat. gr. 1209)",
    provenance: "Rome / Alexandria",
    contents: "Nearly complete Greek Bible (Septuagint + NT)",
    significance: "Widely regarded as the purest witness of the Alexandrian text-type for the Gospels and Acts. Used as the primary base text for Westcott and Hort's 1881 Greek New Testament.",
    syllogism: {
      p1: "Textual critics seek manuscripts closest to the original autographs.",
      p2: "Codex Vaticanus exhibits extraordinarily careful scribal discipline with minimal interpolation.",
      c: "It serves as the gold standard baseline for reconstructive textual criticism."
    },
    primaryTextSnippet: "Includes umlauts (distigmai) in margins added by scribes to indicate textual variants in earlier source papyri.",
    category: "[GREAT UNCIAL CODICES]"
  }
];

export const textualVariantsData = [
  {
    id: "VAR-MARK16",
    passage: "Mark 16:9–20 (The Long Ending)",
    manuscriptsMissing: ["Codex Sinaiticus (ℵ)", "Codex Vaticanus (B)", "Sinaitic Syriac", "Codex Bobbiensis"],
    manuscriptsIncluding: ["Codex Alexandrinus (A)", "Codex Bezae (D)", "Majority Text (Byzantine)"],
    earlyFathersNotes: "Eusebius of Caesarea (c. 325 AD) and Jerome (c. 400 AD) explicitly note that almost all accurate Greek copies of Mark ended at 16:8 ('for they were afraid').",
    scholarConsensus: "Added in the early 2nd century to harmonize Mark's abrupt ending with Matthew, Luke, and John resurrection accounts.",
    theologicalImpact: "ZERO essential Christian doctrines are affected. The resurrection is attested in Mark 16:6 ('He has risen! He is not here'), as well as Matthew 28, Luke 24, John 20, and 1 Cor 15.",
    interactiveGreek: {
      standard: "Mark 16:8: ...εφοβουντο γαρ. (For they were afraid.) [END OF MARK IN SINAITICUS]",
      addedVariant: "Mark 16:9: Αναστας δε πρωι πρωτη σαββατου εφανη πρωτον Μαρια τη Μαγδαληνη... (Now when he arose early on the first day of the week, he appeared first to Mary Magdalene...)"
    }
  },
  {
    id: "VAR-JOHN7",
    passage: "John 7:53–8:11 (Pericope Adulterae / Woman Caught in Adultery)",
    manuscriptsMissing: ["P66 (c. 200 AD)", "P75 (c. 225 AD)", "Codex Sinaiticus", "Codex Vaticanus"],
    manuscriptsIncluding: ["Codex Bezae (5th C.)", "Latin Vulgate", "Later Byzantine MSS"],
    earlyFathersNotes: "Not quoted by any Greek Father for the first 800 years. Placed at various locations in different MSS (after John 7:36, John 21:25, or Luke 21:38 in Family 13).",
    scholarConsensus: "An authentic early oral tradition about Jesus recorded elsewhere, which was inserted into John by later scribes.",
    theologicalImpact: "Contains a beautiful reflection of Jesus' mercy and holiness, but should not be used as a primary prooftext for doctrine due to its textual history.",
    interactiveGreek: {
      standard: "John 7:52: ...εγειρεται. (No prophet arises out of Galilee.) -> John 8:12: Παλιν ουν αυτοις ελαλησεν ο Ιησους... (Again Jesus spoke to them...)",
      addedVariant: "John 8:1-11 inserted between 7:52 and 8:12 in later Latin/Byzantine tradition."
    }
  },
  {
    id: "VAR-1TIM316",
    passage: "1 Timothy 3:16 (God vs He who was Revealed)",
    manuscriptsMissing: ["Original Sinaiticus (ΟΣ)", "Codex Vaticanus", "Codex Ephraemi Rescriptus"],
    manuscriptsIncluding: ["Later correctors of Sinaiticus", "Byzantine Textus Receptus"],
    earlyFathersNotes: "Greek text originally read 'ΟΣ' (He who was revealed in the flesh). A later scribe added a horizontal stroke and line above, turning ΟΣ into ΘΣ (Short for ΘΕΟΣ / GOD).",
    scholarConsensus: "Original reading was 'ΟΣ' ('He who...'), referring to an early Christological hymn.",
    theologicalImpact: "Negligible. The deity of Christ is asserted in dozens of undisputed passages (John 1:1, Titus 2:13, Romans 9:5, Colossians 2:9, Philippians 2:6).",
    interactiveGreek: {
      standard: "ΟΣ ΕΦΑΝΕΡΩΘΗ ΕΝ ΣΑΡΚΙ (He who was revealed in the flesh)",
      addedVariant: "ΘΣ (ΘΕΟΣ) ΕΦΑΝΕΡΩΘΗ ΕΝ ΣΑΡΚΙ (God was revealed in the flesh)"
    }
  }
];
