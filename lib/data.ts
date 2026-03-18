// ─── Edit this file to update all portfolio content ───────────────────────

export const profile = {
  name: "Zhuoyang (Ellen) Li",
  title: "PhD Student| HCI Researcher",
  affiliation: "Department of Industrial Design, Eindhoven University of Technology",
  email: "z.li7@tue.nl",
  shortBio: "PhD student at the Department of Industrial Design at Eindhoven University of Technology. My research focuses on personalized healthcare technology design. Feel free to contact me.",
  avatar: "/avatar.jpg",
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=pFr4MykAAAAJ&hl=en" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ellenli2000" },
  ],
};

export const aboutMe = `I am a PhD student at the **Department of Industrial Design** at **Eindhoven University of Technology (TU/e)**, supervised by [Dr. Daniel Tetteroo](https://www.tue.nl/en/research/researchers/daniel-tetteroo) and [Dr. Maarten Houben](https://www.tue.nl/en/research/researchers/maarten-houben). Before my PhD, I worked as a research assistant at the **BiWell Lab** at City University of Hong Kong, supervised by [Dr. Yuhan Luo](https://yuhanlolo.github.io/me/), and as a part-time research assistant supervised by [Dr. Can Liu](https://sweb.cityu.edu.hk/canliu/index.html). 

During my time at BiWell Lab, my research focused on supporting individuals' **mental well-being** through LLM-powered **conversational user interfaces**. Building on this, my current PhD research investigates the design of **personalized healthcare technology** for the elderly living with **chronic conditions** and their caregivers.`;

export type ResearchProject = {
  title: string;
  description: string;
};

export const researchProjects: ResearchProject[] = [
  {
    title: "(Meta-)Designing for Temporal Experiences in Chronic Healthcare Technologies",
    description: "Chronic healthcare is often a prolonged and demanding process in which patients, caregivers, and healthcare systems enact and experience time in different ways. By foregrounding temporality (i.e., the experience of time), my PhD research aims to inform the design of personalized healthcare technologies. Relevant research output: [P1](https://ellenli2000.github.io/paper/P1.pdf)",
  },
];

export const news: { date: string; text: string }[] = [
  { date: "Apr 2026", text: "Attending CHI'26 in Barcelona 🌅" },
  { date: "Apr 2025", text: "Attending CHI'25 in Yokohama 🌸" },
  { date: "Dec 2024", text: "Invited Talk at China-Netherlands Design Research Doctoral Forum 🙌" },
  { date: "May 2024", text: "Attending CHI'24 in Hawaii 🏄‍♀️" },
  { date: "Jul 2023", text: "Attending CUI'23 in Eindhoven 🌷" },
];

export const travels: { date: string; place: string }[] = [
  { date: "Apr 2026", place: "Barcelona — CHI'26" },
];

export type Publication = {
  id: string;
  year: number;
  title: string;
  authors: string;
  venue: string;
  type: "full" | "lbw" | "workshop";
  tags: string[];
  award?: string;
  pdf?: string;
  doi?: string;
  video?: string;
  thumbnail?: string;
};

export const publications: Publication[] = [
  {
    id: "C4",
    year: 2026,
    title: "Privacy Control in Conversational LLM Platforms: A Walkthrough Study",
    authors: "**Zhuoyang Li**, Yanlai Wu, Yao Li, Xinning Gui, Yuhan Luo",
    venue: "CHI'26",
    type: "full",
    tags: ["Usable Privacy", "LLM", "Conversational User Interface"],
    pdf: "paper/C4.pdf",
    thumbnail: "/thumbnails/C4.png",
    video: "",
  },
  {
    id: "J4",
    year: 2025,
    title: "How Can Chatbots Comfort Humans? Exploring the Effects of Emoji and Identity Cues in Emotional Support",
    authors: "Yu-li Liu, Chuling Song, Dongpeng Huang, Xun Liu, **Zhuoyang Li**, Bo Hu",
    venue: "International Journal of Human-Computer Interaction (IJHCI)",
    type: "full",
    tags: ["Chatbot", "Emotional Support"],
    doi: "https://doi.org/10.1080/10447318.2025.2598675",
    pdf: "paper/J4.pdf",
    thumbnail: "/thumbnails/J4.png",
  },
  {
    id: "J3",
    year: 2025,
    title: "Design Exploration of AI-Assisted Personal Affective Physicalization",
    authors: "Ruishan Wu, **Zhuoyang Li**, Charles Perin, Sheelagh Carpendale, Can Liu",
    venue: "IEEE Computer Graphics and Applications",
    type: "full",
    tags: ["Physicalization", "GenAI", "Affective Computing"],
    award: "🌟 Highlighted Paper",
    doi: "https://doi.org/10.1109/MCG.2025.3614686",
    pdf: "paper/J3.pdf",
    thumbnail: "/thumbnails/J3.png",
  },
  {
    id: "J2",
    year: 2025,
    title: '"This is Human Intelligence Debugging Artificial Intelligence": Examining How People Prompt GPT in Seeking Mental Health Support',
    authors: "**Zhuoyang Li**\\*, Zihao Zhu\\*, Xinning Gui, Yuhan Luo",
    venue: "International Journal of Human-Computer Studies (IJHCS)",
    type: "full",
    tags: ["Mental Health", "LLM", "Prompting"],
    doi: "https://doi.org/10.1016/j.ijhcs.2025.103555",
    pdf: "paper/J2.pdf",
    thumbnail: "/thumbnails/J2.png",
  },
  {
    id: "C3",
    year: 2025,
    title: "Reflecting Upon The Setbacks in Designing Personal Informatics Systems: A Critical Review of Empirical Studies",
    authors: "Yuhan Luo, Xinning Gui, Xianghua (Sharon) Ding, Xi Zheng, Rie Helene (Lindy) Hernandez, **Zhuoyang Li**, Qiurong Song",
    venue: "DIS'25",
    type: "full",
    tags: ["Personal Informatics", "Review"],
    doi: "https://doi.org/10.1145/3715336.3735746",
    pdf: "paper/C3.pdf",
    thumbnail: "/thumbnails/C3.png",
  },
  {
    id: "C2",
    year: 2025,
    title: "Customizing Emotional Support: How Do Individuals Construct and Interact With LLM-Powered Chatbots",
    authors: "Xi Zheng, **Zhuoyang Li**, Xinning Gui, Yuhan Luo",
    venue: "CHI'25",
    type: "full",
    tags: ["Emotional Support", "LLM", "Customization", "Chatbot"],
    doi: "https://doi.org/10.1145/3706598.3713453",
    pdf: "paper/C2.pdf",
    thumbnail: "/thumbnails/C2.png",
  },
  {
    id: "C1",
    year: 2024,
    title: "StayFocused: Examining the Effects of Reflective Prompts and Chatbot Support on Compulsive Smartphone Use",
    authors: "**Zhuoyang Li**\\*, Minhui Liang\\*, Ray LC, Yuhan Luo",
    venue: "CHI'24",
    type: "full",
    tags: ["Smartphone Addiction", "Persuasive Technology", "Chatbot", "Reflection"],
    pdf: "paper/C1.pdf",
    doi: "https://doi.org/10.1145/3613904.3642479",
    thumbnail: "/thumbnails/C1.png",
    video: "https://www.youtube.com/watch?feature=shared&v=EtLGQ-s0UxE",
  },
  {
    id: "J1",
    year: 2022,
    title: "Effects of personalization and source expertise on users' health beliefs and usage intention toward health chatbots: Evidence from an online experiment",
    authors: "Yu-li Liu, Wenjia Yan, Bo Hu, **Zhuoyang Li**, Yik Ling Lai",
    venue: "DIGITAL HEALTH",
    type: "full",
    tags: ["Health Chatbot", "Personalization", "Health Belief Model"],
    doi: "https://doi.org/10.1177/20552076221129718",
    pdf: "paper/J1.pdf",
    thumbnail: "/thumbnails/J1.png",
  },
  {
    id: "EA2",
    year: 2025,
    title: "Rambler in the Wild: A Diary Study of LLM-Assisted Writing With Speech",
    authors: "Xuyu Yang\\*, Wengxi Li\\*, Mathew Lee, **Zhuoyang Li**, J.D. Zamfirescu-Pereira, Can Liu",
    venue: "CHI'25",
    type: "lbw",
    tags: ["Writing", "LLM", "Speech"],
    award: "🏅 Honorable Mention",
    doi: "https://doi.org/10.1145/3706599.3706676",
    pdf: "paper/EA2.pdf",
    thumbnail: "/thumbnails/EA2.png",
  },
  {
    id: "EA1",
    year: 2023,
    title: "Exploring Design Opportunities for Reflective Conversational Agents to Reduce Compulsive Smartphone Use",
    authors: "**Zhuoyang Li**\\*, Minhui Liang\\*, Trung Hai Le, Ray LC, Yuhan Luo",
    venue: "CUI'23",
    type: "lbw",
    tags: ["Conversational Agents", "Prompting", "Smartphone Addiction"],
    doi: "https://doi.org/10.1145/3571884.3604305",
    pdf: "paper/EA1.pdf",
    thumbnail: "/thumbnails/EA1.png",
  },
  {
    id: "P1",
    year: 2026,
    title: "Understanding Temporal Tensions in Informal Care for AI Design",
    authors: "**Zhuoyang Li**, Maarten Houben, Daniel Tetteroo",
    venue: "CHI'26 Workshop: Toward Relationship-Centered Care with AI",
    type: "workshop",
    tags: ["Informal Care", "Temporality", "Design"],
    award: "🌟 Highlighted Paper",
    pdf: "paper/P1.pdf",
  },
];

export const cv = {
  education: [
    { degree: "Ph.D. Industrial Design", institution: "Eindhoven University of Technology", period: "Feb 2025 – Now" },
    { degree: "Research Assistant", institution: "City University of Hong Kong", period: "Sep 2023 – Jan 2025" },
    { degree: "M.Sc. Communication Science", institution: "University of Amsterdam", period: "Aug 2022 – Jun 2023" },
    { degree: "B.A. Media and Communication", institution: "City University of Hong Kong", period: "Aug 2018 – Jun 2022" },
  ],
  research: [
    { role: "Research Assistant", org: "BiWell Lab, City University of Hong Kong", supervisor: "Dr. Yuhan Luo", supervisorUrl: "https://yuhanlolo.github.io/me/", period: "Jul 2022 – Jan 2025" },
    { role: "Part-time Research Assistant", org: "City University of Hong Kong", supervisor: "Dr. Can Liu", supervisorUrl: "https://sweb.cityu.edu.hk/canliu/index.html", period: "Oct 2024 – Jan 2025" },
    { role: "Student Research Assistant (Part-time)", org: "City University of Hong Kong", supervisor: "Prof. Yu-li Liu", supervisorUrl: "https://scholars.cityu.edu.hk/en/persons/yuli-liu(cb5a972e-b906-4c9a-8966-2d04034e50f0).html", period: "Oct 2020 – Sep 2022" },
  ],
  service: [
    { role: "Associate Chair (AC)", detail: "[CHI LBW](https://chi2025.acm.org/for-authors/late-breaking-work/) 2025, [Pervasive Health Late Track](https://pervasivehealth.eai-conferences.org/2025/) 2025" },
    { role: "Reviewer", detail: "[DIS Pictorials](https://dis.acm.org/2026/pictorials/) 2026, [CHI](https://chi2026.acm.org/) 2024–2026, [CSCW](https://cscw.acm.org/2025/) 2024–2025, [Chinese CHI](https://ichec.icachi.org/25/) 2025, [CHI PLAY](https://chiplay.acm.org/2024/) 2024" },
    { role: "Student Volunteer Chair", detail: "[GBA Pre-CHI](https://gbahci.com/prechi2025/) 2025"},
  ],
  work: [
    { role: "Account Executive Intern", org: "BlueCurrent (Hong Kong)", orgUrl: "https://bluecurrentgroup.com.hk/", period: "Mar 2022 – Jun 2022" },
    { role: "Digital Advertising Specialist Intern", org: "BlueFocus (Beijing)", orgUrl: "https://en.bluefocus.com/", period: "Jun 2021 – Sep 2021" },
    { role: "Content Management Intern", org: "Bytedance (Tianjin)", orgUrl: "https://www.bytedance.com/en/", period: "Apr 2020 – Aug 2020" },
  ],
};

export type TeachingItem = {
  title: string;
  role: string;
  period: string;
  thumbnail?: string;
};

export const teaching: TeachingItem[] = [
  {
    title: "Exploring Intertemporal Self-talk through TimeMirror (DDM140 Research Methods)",
    role: "Teaching Assistant - Developed semi-finished research prototype TimeMirror for students to customize and conduct their research based on it.",
    period: "2026 Spring",
    thumbnail: "/thumbnails/TimeMirror.png",
  },
  {
    title: "Designing Companion Robot for Older Adults (DPM120 Project 2: Design Research)",
    role: "Expert - Provided feedback on students' research projects",
    period: "2026 Spring",
    thumbnail: "/thumbnails/Silvec.png",
  },
  {
    title: "Exploring Temporality in Care Home (DPM120 Project 2: Design Research/DPB390 Final Bachelors' Project)",
    role: "Expert - Provided feedback on students' research projects",
    period: "2026 Spring, 2025 Fall",
    thumbnail: "/thumbnails/Squad1.png",
  },
];
