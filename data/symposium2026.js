/* eslint-disable */

/**
 * Single source of truth for the 18th Annual TAHIT Language Access Symposium.
 * Update this file when speakers, venue, or registration details change —
 * the home page symposium sections read everything from here.
 */

export const symposium2026 = {
  edition: "18th Annual",
  name: "TAHIT Language Access Symposium",
  themeTitle: "Language Access in 2026",
  themeSubtitle: "Where We Stand — Federal Updates & the Road Ahead",
  dateLabel: "Friday, October 2, 2026",
  timeLabel: "8:00 AM",
  // Local start time in Dallas (CDT, UTC-5) used for the countdown.
  startsAt: "2026-10-02T08:00:00-05:00",
  venue: "Dallas Scottish Rite for Children",
  city: "Dallas, Texas",
  registrationUrl:
    "https://www.eventbrite.com/e/18th-annual-tahit-language-access-symposium-dallas-tx-tickets-1986166955831?aff=oddtdtcreator",
  sponsorshipUrl: "/symposium/sponsorship",
  membershipUrl:
    "https://www.memberplanet.com/Groups/GroupJoinLoginNew.aspx?ISPUB=true&invitee=x4ew44166y4do",
  saveTheDateImage: "/img/symposiums/2026/save-the-date.png"
};

/**
 * `spotlight: true` speakers render in the larger two-up layout at the top of
 * the speakers section — these are the two announced on the save-the-date.
 */
export const speakers2026 = [
  {
    slug: "christina-cordero",
    name: "Dr. Christina Cordero",
    credentials: "",
    role: "",
    org: "The Joint Commission",
    session: "Language Access Is Patient Safety: Joint Commission Accreditation 360 Updates",
    objectives: [
      "Identify the key requirements addressing language access for the Joint Commission's accreditation and certification programs.",
      "List at least two strategies to comply with the requirements for providing language services to limited English proficient patients in healthcare settings."
    ],
    spotlight: true
  },
  {
    slug: "bill-rivers",
    name: "Dr. Bill Rivers",
    credentials: "",
    role: "Congressional Advocate",
    org: "",
    session: "Language Access in 2026: Where Do We Stand?",
    objectives: [
      "Understand the legal limits of Executive Orders and federal guidance on language access.",
      "Understand the recent advances by the US Congress in promoting language access at the federal level.",
      "Understand the full range of federal laws and regulations requiring language access."
    ],
    spotlight: true
  },
  {
    slug: "manuel-higginbotham",
    name: "Manuel Higginbotham",
    credentials: "CCHI, LBBP",
    role: "Director of Language Access Services",
    org: "The University of Texas MD Anderson Cancer Center",
    session: "Choosing the Right Path: Advanced Ethical Decision-Making for Healthcare Interpreters",
    sessionNote: "2026 Edition of a multi-part series",
    objectives: [
      "Analyze complex ethical dilemmas in encounters by identifying competing ethical principles and evaluating multiple possible courses of action.",
      "Apply principles of the NCIHC Code of Ethics to real-world clinical scenarios to determine ethically defensible courses of action involving conflicting expectations, incomplete information, or sensitive knowledge.",
      "Articulate and defend ethical decision-making processes during discussion of case studies, strengthening interpreters' confidence in navigating challenging professional situations."
    ]
  },
  {
    slug: "ludmila-golovine",
    name: "Ludmila Golovine",
    credentials: "",
    role: "",
    org: "MasterWord",
    session: "Delivering AI Interpreting Responsibly",
    objectives: [
      "Benchmark AI and hybrid interpreting offerings against the SAFE AI Toolkit's five-checklist framework to identify gaps in organizational readiness, risk management, and setting-specific suitability.",
      "Communicate the value and limitations of AI interpreting solutions transparently to clients.",
      "Apply vendor evaluation and RFP guidance from the SAFE AI Toolkit to assess third-party AI interpreting tools against industry standards for safety, compliance, and language access obligations."
    ]
  },
  {
    slug: "tatiana-gonzalez-cestari",
    name: "Tatiana González-Cestari",
    credentials: "PhD, CHI-Spanish",
    role: "",
    org: "Martti",
    session: "Remote Interpreting in Healthcare: Skills and Protocols",
    objectives: [
      "Identify key differences between face-to-face and remote interpreting skills and protocols.",
      "Learn important fundamental elements of professional etiquette in remote interpreting.",
      "Identify common remote interpreting challenges and strategies for resolving them."
    ]
  },
  {
    slug: "brian-duran",
    name: "Brian Duran",
    credentials: "MA, CHI-Spanish",
    role: "",
    org: "Children's Health",
    session: "Rhetoric in Interpreting for Pediatric Oncology Settings: How We Say It and Why We Say It",
    objectives: [
      "Analyze the role of rhetoric while interpreting in pediatric settings, with particular focus on oncology encounters, by identifying how language choices influence meaning, tone, and patient-provider communication outcomes.",
      "Apply key concepts from the Rhetoric of Health and Medicine — such as Translation Spaces and Translation Moments — to assess interpreter agency and decision-making in real-time medical interactions.",
      "Evaluate the impact of rhetorical strategies on accuracy, clarity, and patient-centered care in oncology settings, with the goal of improving interpreting practice and communication effectiveness."
    ]
  },
  {
    slug: "matthew-dickens",
    name: "Matthew Dickens",
    credentials: "",
    role: "Accessibility and Disability Rights Coordinator",
    org: "Texas Governor's Committee on People with Disabilities",
    session: "Ethics in Health Care: Interpreting for People with Disabilities",
    objectives: [
      "Discover effective communication strategies for interpreting with people that have disabilities.",
      "Unpack common misconceptions and learn how to navigate challenges with confidence.",
      "Explore how culture and disability intersect — and why it matters in health care."
    ]
  },
  {
    slug: "joshua-collier",
    name: "Joshua Collier",
    credentials: "CHW/Instructor",
    role: "",
    org: "Collier Consulting",
    session: "Cross-Training as a CHW: Core Competencies, Certification & Lived Experience",
    objectives: [
      "Name 3 core competencies and 3 skills important to be a successful CHW/Promotor/a de Salud/CHR.",
      "Articulate 1 important difference between certified and uncertified CHWs/Promotores/as de Salud.",
      "Describe 2 options for becoming a certified CHW in Texas and the steps to complete."
    ]
  }
].map((s) => ({
  ...s,
  portrait: `/img/symposiums/2026/speakers/${s.slug}.jpg`,
  flyer: `/img/symposiums/2026/flyers/${s.slug}.png`
}));

export default symposium2026;
