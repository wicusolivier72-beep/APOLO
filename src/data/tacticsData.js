export const columboQuestions = [
  {
    step: "01",
    title: "Gathering Information",
    questionText: "What do you mean by that?",
    purpose: "Clarifies ambiguous terms, defines key concepts, and prevents talking past each other.",
    exampleClaim: "Skeptic says: 'The Bible is full of contradictions!'",
    recommendedResponse: "'What do you mean by contradiction? Which specific passage or two verses are you referring to?'",
    tacticalTip: "Never attempt to defend a claim until the critic explicitly defines their terms and specific verses."
  },
  {
    step: "02",
    title: "Shifting the Burden of Proof",
    questionText: "How did you come to that conclusion?",
    purpose: "Places the burden of proof back on the person making the claim, requiring them to provide evidence.",
    exampleClaim: "Skeptic says: 'Jesus never even existed; he was made up by the Romans.'",
    recommendedResponse: "'That's an interesting claim! How did you come to that conclusion? What ancient Roman or Jewish primary sources led you to that view?'",
    tacticalTip: "Remember: 'He who asserts must prove.' You don't have to disprove every wild assertion; ask for their evidence first."
  },
  {
    step: "03",
    title: "Using Questions to Make a Point",
    questionText: "Have you considered how [X] applies to [Y]?",
    purpose: "Guides the conversation constructively to expose flaws in logic without being argumentative or offensive.",
    exampleClaim: "Skeptic says: 'Science is the only way to discover truth.'",
    recommendedResponse: "'Have you considered whether that statement itself was discovered using a scientific experiment, or is it a philosophical assumption?'",
    tacticalTip: "Soft hands, hard arguments. Use gentle inquiry to let the truth expose self-defeating logic."
  }
];

export const selfRefutingStatements = [
  {
    statement: "There is no absolute truth.",
    refutationQuestion: "Is that statement absolutely true?",
    explanation: "If the statement is true, then absolute truth exists (making it false). If it is false, then absolute truth exists.",
    category: "[EPISTEMOLOGY]"
  },
  {
    statement: "You shouldn't judge anyone's views.",
    refutationQuestion: "Aren't you judging my view right now?",
    explanation: "The speaker is passing judgment on your judgment, violating their own moral rule against judging.",
    category: "[MORAL RELATIVISM]"
  },
  {
    statement: "Science is the only valid way to know anything.",
    refutationQuestion: "Can you prove that statement using a scientific experiment?",
    explanation: "Scientism is a philosophical premise about science, not a scientific testable fact. Thus, by its own standard, it cannot be known to be true.",
    category: "[SCIENTISM]"
  },
  {
    statement: "You can only trust things that can be empirically verified.",
    refutationQuestion: "Can that statement itself be empirically verified in a lab?",
    explanation: "Empiricism fails its own verification criterion.",
    category: "[EMPIRICISM]"
  },
  {
    statement: "All moral rules are cultural fabrications; nothing is objectively right or wrong.",
    refutationQuestion: "Was the Holocaust or slavery objectively wrong, or just a matter of cultural preference?",
    explanation: "Shows that moral relativism collapses when confronted with egregious, real-world evil.",
    category: "[ETHICS]"
  },
  {
    statement: "No one can know anything for certain.",
    refutationQuestion: "Are you certain about that?",
    explanation: "Claiming certainty about the impossibility of certainty is self-defeating.",
    category: "[SKEPTICISM]"
  }
];

export const conversationScenarios = [
  {
    id: "SCEN-01",
    title: "The Telephone Game Objection",
    opponentQuote: "The Bible was translated over thousands of years like a game of telephone; we have no idea what the original said.",
    columboStep1: "'What do you mean by game of telephone? Are you under the impression modern Bibles are translated from medieval translations?'",
    columboStep2: "'How did you come to that conclusion? Have you studied textual criticism and early papyrus manuscripts like P52 or P66?'",
    factPayload: "Modern Bibles are translated directly from 5,800+ early Greek manuscripts (some within 30-40 years of original writing), completely bypassing middle translations."
  },
  {
    id: "SCEN-02",
    title: "The Pagan Copycat Claim",
    opponentQuote: "Jesus was just a copy of Mithra and Horus invented by Roman emperor Constantine at Nicaea.",
    columboStep1: "'What primary ancient source or Egyptian text mentions Horus being born of a virgin or crucified?'",
    columboStep2: "'How did you come to that conclusion? What ancient Roman document indicates Constantine created Jesus' deity?'",
    factPayload: "Horus was born of Isis (not virgin), decapitated, and not crucified. Mithra emerged from a rock. Council of Nicaea (325 AD) voted 316-2 on Arianism; canon lists predated Nicaea by 150+ years."
  }
];
