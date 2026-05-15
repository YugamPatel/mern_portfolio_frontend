/*
 * eduAndWorkData — Education & Work Experience Content
 *
 * Data shape:
 *   name      — institution or company name
 *   role      — degree title or job title
 *   type      — sub-label shown as a small badge (e.g. work term, program type)
 *   location  — city / country
 *   date      — date range string
 *   iconType  — "university" | "school" | "work" (drives the header icon)
 *   bullets   — array of achievement / responsibility strings
 *   stack     — (work only) array of technology strings shown as tags
 */

export const eduAndWorkData = {
  education: [
    {
      name: "University of Manitoba",
      role: "B.Sc. Computer Science",
      type: "Co-op Program",
      location: "Winnipeg, MB",
      date: "Sep 2022 – Aug 2027 (Expected)",
      iconType: "university",
      bullets: [
        "Enrolled in the Co-op stream, integrating four paid industry work terms with full-time coursework",
        "Relevant courses: Algorithms & Data Structures, Software Engineering, Operating Systems, Databases, Human-Computer Interaction",
        "Exploring distributed systems, machine learning, and full-stack web development as focus areas",
      ],
    },
    {
      name: "Green Valley High School",
      role: "High School Diploma",
      type: "Grades 11 – 12",
      location: "Gujarat, AB",
      date: "2019 – 2021",
      iconType: "school",
      bullets: [
        "Graduated with honours; strong academic performance in Physics, Chemistry, and Mathematics",
        "Developed analytical and problem-solving foundations that directly underpin software engineering work",
      ],
    },
    {
      name: "Bharatiya Vidya Bhavan's",
      role: "Secondary Education",
      type: "Grades 1 – 10",
      location: "Gujarat, India",
      date: "2009 – 2019",
      iconType: "school",
      bullets: [
        "Built a broad academic foundation across sciences, mathematics, languages, and humanities",
        "Cultivated intellectual curiosity and disciplined study habits over a decade of structured education",
      ],
    },
  ],

  work: [
    {
      name: "KGS Group",
      role: "Software Developer Co-op",
      type: "Work-Term 2  ·  Part-time",
      location: "Winnipeg, MB",
      date: "Jan 2026 – Aug 2026",
      iconType: "work",
      bullets: [
        "Building a large-scale internal RAG system to process and query 100TB+ of business documents (PDFs, Word, Excel) stored on Synology NAS",
        "Designed a Python/FastAPI ingestion pipeline for preprocessing, chunking, and semantic document indexing",
        "Implemented vector search using Qdrant and BGE-M3 embedding models for high-quality contextual retrieval",
        "Orchestrated services with ASP.NET Core, React/Vite, and MySQL; containerized via Docker with Kubernetes deployments",
        "Integrated Azure Entra ID authentication and CI/CD pipelines for secure access and automated build/test/deploy flows",
      ],
      stack: ["Python", "FastAPI", "Qdrant", "ASP.NET Core", "React", "Docker", "Kubernetes", "Azure"],
    },
    {
      name: "Varian · Siemens Healthineers",
      role: "Software Developer Co-op",
      type: "Work-Term 1",
      location: "Remote — Winnipeg, MB",
      date: "Sep 2025 – Dec 2025",
      iconType: "work",
      bullets: [
        "Contributed features and defect fixes to the ARIA Cloud oncology EMR and treatment management platform",
        "Improved clinical medication sorting logic and resolved UI/validation issues across Angular and C# layers",
        "Built custom Roslyn code analyzers and linters to enforce consistent coding standards across the monorepo",
        "Supported Agile delivery through story estimation, code reviews, unit testing, and production-ready validation",
      ],
      stack: ["C#", ".NET Core", "Angular", "SQL Server", "Azure", "Azure DevOps"],
    },
  ],
};
