import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "UIN Sunan Gunung Djati Bandung",
    companyUrl: "https://uinsgd.ac.id",
    companyLogo: "/images/companies/uinsgd.webp",
    positions: [
      {
        id: "1",
        title:
          "Gold Medal at International Invention Competition For Young Moslem Scientists 2024",
        year: "2024",
        employmentType: "Part-time",
        icon: "research",
        description:
          "- Fine-tuned Sentence-BERT model for Islamic domain-specific tasks and got max accuracy 0.839 / 1\n- Scraped 10k+ Islamic websites for the dataset",
        skills: [
          "Machine Learning",
          "Scientific Papers",
          "Project Management",
          "Sentence-Transformers",
        ],
        expanded: true,
      },
      {
        id: "2",
        title: "IT CUP Competition Judges",
        year: "Mar, 2023",
        employmentType: "Part-time",
        description:
          "- Assess the quality of participants' answers\n- Assess the quality of participants' codes\n- Checking the quality of questions",
        skills: [
          "Computer Science",
          "Programming",
          "Judging",
          "Research and Development",
        ],
      },
      {
        id: "3",
        title: "BSO Dimensi Web Committee",
        year: "2022 - 2023",
        employmentType: "Part-time",
        description:
          "- Create and organize materials related to web development\n- Become a speaker for web development materials",
        skills: [
          "Web Development",
          "Public Speaking",
          "Research and Development",
        ],
      },
    ],
  },
  {
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    companyUrl: "https://grow.google/intl/id_id/bangkit/",
    companyLogo: "/images/companies/bangkit.webp",
    positions: [
      {
        id: "4",
        title: "Project Manager of Konektra (Koneksi Tunarungu dan Tunawicara)",
        icon: "idea",
        year: "Nov, 2023 - Dec, 2023",
        employmentType: "Full-time",
        description:
          "- Training the machine learning model to recognize and understand 26 alphabets and over 5 sentences in sign language with an accuracy of approximately 86%\n- Designing business strategies and application models that cover the entire project lifecycle, from development to post-production\n- Compiling comprehensive project documentation, ensuring technical knowledge is well distributed throughout the team",
        skills: [
          "Machine Learning",
          "Web Development",
          "Android Development",
          "Cloud Computing",
          "Tensorflow",
          "Project Management",
        ],
        expanded: true,
      },
      {
        id: "5",
        title: "Machine Learning Student at Bangkit Academy 2023 Batch 2",
        icon: "code",
        year: "2023",
        employmentType: "Full-time",
        description:
          "- Became the top 10% (distinctions graduates) out of more than 5000 participants",
        skills: [
          "Machine Learning",
          "Tensorflow",
          "Deep Learning",
          "Tensorflow",
        ],
        expanded: false,
      },
    ],
  },
  {
    company: "Jabar Digital Service",
    companyUrl: "https://digitalservice.jabarprov.go.id/",
    companyLogo: "/images/companies/jds.webp",
    positions: [
      {
        id: "6",
        title: "Awardee of Jabar Coding Camp",
        icon: "code",
        year: "Aug, 2021 - Sep, 2021",
        employmentType: "Part-time",
        description:
          "- Became top 8 out of more than 100 participants\n- Building a Full-Stack application using React Native",
        skills: ["React Native", "Javascript", "Mobile Development"],
        expanded: false,
      },
    ],
  },
  {
    company: "SMAN 1 Sindang",
    companyLogo: "/images/companies/sasi.webp",
    positions: [
      {
        id: "7",
        title: "Leader of TERABYTE",
        icon: "idea",
        year: "2019 - 2022",
        employmentType: "Full-time",
        description:
          "Terabyte is a student organization that focuses on journalism and technology. Working together with the student council to provide quality information related to SMAN 1 Sindang to the public. We also participate in covering and documenting various events at the school. In addition, we also work for:\n- Created and maintained the official school website\n- Controlled and managed the school's official social media (Youtube: SMAN 1 Sindang, Instagram: @sman1sindang)\n- Managed school digital magazine Aspirasi Sasi",
        skills: ["Web Development", "Social Media Management", "Documentation"],
        expanded: false,
      },
    ],
  },
];
