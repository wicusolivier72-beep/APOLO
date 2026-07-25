export const creedTimelineSteps = [
  {
    year: "30 AD",
    title: "Crucifixion & Resurrection of Jesus",
    description: "Jesus of Nazareth is executed in Jerusalem under Roman Prefect Pontius Pilate. Within days, his followers witness appearances of the risen Christ.",
    phase: "[HISTORICAL EVENT]"
  },
  {
    year: "33–35 AD",
    title: "Creed Received in Jerusalem (Gal 1:18-19)",
    description: "Paul visits Jerusalem 3 years after his conversion to meet Peter and James. He receives the standardized Greek oral creed recorded in 1 Cor 15:3-8 (using rabbinic technical terms 'delivered' [paradidomi] and 'received' [paralambano]).",
    phase: "[FORMAL CREED SHAPED]"
  },
  {
    year: "55 AD",
    title: "1 Corinthians Written by Paul",
    description: "Paul writes 1 Corinthians from Ephesus, quoting the exact creed he received 20 years earlier in Jerusalem: 'For I delivered to you as of first importance what I also received...'",
    phase: "[EPISTOLARY RECORD]"
  }
];

export const minimalFactsData = {
  facts: [
    { id: "F1", code: "FACT 1", label: "Jesus Died by Crucifixion", description: "Jesus died by Roman crucifixion under Pontius Pilate in Jerusalem c. 30 AD." },
    { id: "F2", code: "FACT 2", label: "Disciples' Experiences", description: "Disciples believed they experienced post-crucifixion appearances of Jesus." },
    { id: "F3", code: "FACT 3", label: "Paul's Conversion", description: "Paul (skeptic and violent persecutor) converted due to an appearance of Jesus." },
    { id: "F4", code: "FACT 4", label: "James's Conversion", description: "James (skeptical brother of Jesus) converted due to an appearance of Jesus." },
    { id: "F5", code: "FACT 5", label: "The Empty Tomb", description: "The tomb of Jesus was found empty by female followers (accepted by 75%+ critical scholars)." }
  ],
  hypotheses: [
    {
      name: "Swoon / Apparent Death Theory",
      scores: { F1: false, F2: false, F3: false, F4: false, F5: false },
      critique: "Fails Fact 1 & 2. Roman executioners were professional killers (spear thrust John 19:34). A half-dead, bleeding man crawling out of a tomb would inspire pity, not worship as the victorious Lord of Life."
    },
    {
      name: "Mass Hallucination Theory",
      scores: { F1: true, F2: false, F3: false, F4: false, F5: false },
      critique: "Fails Fact 2, 3, 4, 5. Hallucinations are private, subjective neuro-chemical events in individual minds; groups do not share identical visual, auditory, and tactile hallucinations simultaneously. Does not explain Empty Tomb or Paul's conversion."
    },
    {
      name: "Conspiracy / Disciples Stole Body",
      scores: { F1: true, F2: false, F3: false, F4: false, F5: true },
      critique: "Fails Fact 2, 3, 4. People may die for what they mistakenly believe to be true, but no one willingly dies for a lie they know they fabricated. All apostles suffered torture and martyrdom holding to the resurrection experience."
    },
    {
      name: "Wrong Tomb Theory",
      scores: { F1: true, F2: false, F3: false, F4: false, F5: false },
      critique: "Fails Fact 2, 3, 4. The Sanhedrin and Roman authorities in Jerusalem could have easily produced the body from the real tomb to crush the infant Christian movement immediately."
    },
    {
      name: "Resurrection Hypothesis",
      scores: { F1: true, F2: true, F3: true, F4: true, F5: true },
      critique: "Explanatory Scope & Power: Fully accounts for all 5 scholar-accepted historical facts without arbitrary ad-hoc assumptions."
    }
  ]
};

export const nonChristianHistorians = [
  {
    historian: "Tacitus (c. 56 – 120 AD)",
    work: "Annals of Imperial Rome (Book 15, Chapter 44, c. 116 AD)",
    quote: "Christus, the founder of the name, had undergone the death penalty in the reign of Tiberius, by sentence of the procurator Pontius Pilatus, and the pernicious superstition was checked for a moment, only to break out again not only in Judea...",
    significance: "Secular Roman historian confirms Jesus' execution under Pontius Pilate, timing under Tiberius, and rapid spread of early Christianity."
  },
  {
    historian: "Flavius Josephus (c. 37 – 100 AD)",
    work: "Antiquities of the Jews (Book 20, Chapter 9.1, c. 93 AD)",
    quote: "Festus was now dead, and Albinus was but upon the road; so he assembled the sanhedrin of judges, and brought before them the brother of Jesus, who was called Christ, whose name was James...",
    significance: "Undisputed reference confirming Jesus was known as 'Christ' and had a brother named James who was martyred in Jerusalem c. 62 AD."
  },
  {
    historian: "Pliny the Younger (c. 61 – 113 AD)",
    work: "Letters to Emperor Trajan (Book 10, Letter 96, c. 112 AD)",
    quote: "They were in the habit of meeting on a certain fixed day before it was light, when they sang in alternate verses a hymn to Christ, as to a god, and bound themselves by a solemn oath...",
    significance: "Roman governor confirms early Christians worshipped Jesus as God within 80 years of the crucifixion."
  },
  {
    historian: "Suetonius (c. 69 – 122 AD)",
    work: "Life of Claudius (25.4, c. 121 AD)",
    quote: "Since the Jews constantly made disturbances at the instigation of Chrestus, he expelled them from Rome.",
    significance: "Corroborates Acts 18:2 (Claudius expelling Jews from Rome c. 49 AD over disputes regarding Christ)."
  },
  {
    historian: "Mara Bar-Serapion (c. 73 AD)",
    work: "Syriac Letter to his son in prison",
    quote: "What advantage did the Jews gain from executing their wise King? It was just after that their kingdom was abolished... The wise King did not die for good; he lived on in the teaching he had given.",
    significance: "Pagan Syrian philosopher references the execution of the 'wise King of the Jews' and subsequent destruction of Jerusalem."
  }
];
