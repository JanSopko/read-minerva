"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import HoverCard from "@/components/HoverCard";
import styles from "./page.module.css";

// Job Category Enum
export enum JobCategory {
  MARKETING = "Marketing",
  IT = "IT",
  SALES = "Sales",
  FINANCE = "Finance",
}

// Job Position Interface
export interface JobPosition {
  id: string;
  title: string;
  category: JobCategory;
  description: string;
  location: string;
  salary: string;
}

// Mock job positions (will be replaced with API data later)
const mockJobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Senior Marketing Manager",
    category: JobCategory.MARKETING,
    description: "Lead our marketing initiatives and drive brand growth across multiple channels.",
    location: "Bratislava, Slovakia",
    salary: "€4,000 - €6,000",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    category: JobCategory.IT,
    description: "Build and maintain scalable web applications using modern technologies.",
    location: "Remote",
    salary: "€3,500 - €5,500",
  },
  {
    id: "3",
    title: "Sales Representative",
    category: JobCategory.SALES,
    description: "Connect with potential clients and grow our customer base.",
    location: "Prague, Czech Republic",
    salary: "€2,500 - €4,000",
  },
  {
    id: "4",
    title: "Financial Analyst",
    category: JobCategory.FINANCE,
    description: "Analyze financial data and provide insights for strategic decisions.",
    location: "Bratislava, Slovakia",
    salary: "€2,800 - €4,200",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    category: JobCategory.IT,
    description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
    location: "Remote",
    salary: "€4,000 - €6,000",
  },
  {
    id: "6",
    title: "Content Marketing Specialist",
    category: JobCategory.MARKETING,
    description: "Create engaging content that resonates with our audience.",
    location: "Bratislava, Slovakia",
    salary: "€2,200 - €3,500",
  },
];

export default function Career() {
  const { t } = useLanguage();
  const imageUrl = ""; // Placeholder for future image
  
  // Category filter state - all enabled by default
  const [categoryFilters, setCategoryFilters] = useState<Record<JobCategory, boolean>>({
    [JobCategory.MARKETING]: true,
    [JobCategory.IT]: true,
    [JobCategory.SALES]: true,
    [JobCategory.FINANCE]: true,
  });

  // Toggle category filter
  const toggleCategory = (category: JobCategory) => {
    setCategoryFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Filter job positions based on active categories
  const filteredJobs = mockJobPositions.filter(
    (job) => categoryFilters[job.category]
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          {t.career.titleLine1}
          <br />
          <span className={styles.highlight}>{t.career.titleHighlight}</span> {t.career.titleLine2}
        </h1>
        <p className={styles.subtitle}>{t.career.subtitle}</p>

        {/* Two Column Section */}
        <div className={styles.twoColumnSection}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={t.career.imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderIcon}>👥</span>
                <p className={styles.placeholderText}>{t.career.imagePlaceholder}</p>
              </div>
            )}
          </div>

          {/* Right Column - Text Content */}
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>
              {t.career.sectionTitle}
            </h2>
            <p className={styles.sectionText}>
              {t.career.sectionText}
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsHeader}>{t.career.benefitsHeader}</h2>
          <h3 className={styles.benefitsSubheader}>{t.career.benefitsSubheader}</h3>

          <div className={styles.benefitsGrid}>
            {/* Benefit 1 */}
            <HoverCard className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <span className={styles.benefitIcon}>⚖️</span>
              </div>
              <h4 className={styles.benefitTitle}>{t.career.benefits.workLife}</h4>
              <p className={styles.benefitDescription}>{t.career.benefits.workLifeDesc}</p>
            </HoverCard>

            {/* Benefit 2 */}
            <HoverCard className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <span className={styles.benefitIcon}>📈</span>
              </div>
              <h4 className={styles.benefitTitle}>{t.career.benefits.growth}</h4>
              <p className={styles.benefitDescription}>{t.career.benefits.growthDesc}</p>
            </HoverCard>

            {/* Benefit 3 */}
            <HoverCard className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <span className={styles.benefitIcon}>🏖️</span>
              </div>
              <h4 className={styles.benefitTitle}>{t.career.benefits.paidTime}</h4>
              <p className={styles.benefitDescription}>{t.career.benefits.paidTimeDesc}</p>
            </HoverCard>
          </div>
        </div>

        {/* Open Job Positions Section */}
        <div className={styles.jobsSection}>
          <h2 className={styles.jobsHeader}>{t.career.jobsHeader}</h2>

          {/* Category Filter Buttons */}
          <div className={styles.categoryFilters}>
            {Object.values(JobCategory).map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  categoryFilters[category] ? styles.active : ""
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Job Positions Grid */}
          <div className={styles.jobsGrid}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <HoverCard key={job.id} className={styles.jobCard}>
                  <div className={styles.jobCardHeader}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <span className={styles.jobCategory}>{job.category}</span>
                  </div>
                  <p className={styles.jobDescription}>{job.description}</p>
                  <div className={styles.jobDetails}>
                    <div className={styles.jobDetail}>
                      <span className={styles.jobDetailIcon}>📍</span>
                      <span className={styles.jobDetailText}>{job.location}</span>
                    </div>
                    <div className={styles.jobDetail}>
                      <span className={styles.jobDetailIcon}>💰</span>
                      <span className={styles.jobDetailText}>{job.salary}</span>
                    </div>
                  </div>
                  <button className={styles.applyButton}>
                    {t.career.applyNow}
                  </button>
                </HoverCard>
              ))
            ) : (
              <p className={styles.noJobs}>{t.career.noJobs}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

