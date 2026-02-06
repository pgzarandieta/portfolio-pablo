import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type CaseStudyFrontmatter = {
  slug: string;
  title: string;
  summary?: string;
  role?: string;
  date?: string;
  stack?: string[];
  tags?: string[];
  metrics?: string[];
  confidentiality?: string;
};

export type CaseStudy = CaseStudyFrontmatter & {
  content: string;
};

const CASE_STUDIES_DIR = path.join(process.cwd(), 'content', 'case-studies');

const isCaseStudyFile = (fileName: string) =>
  fileName.endsWith('.mdx') && !fileName.startsWith('_');

export const getCaseStudies = (): CaseStudy[] => {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CASE_STUDIES_DIR).filter(isCaseStudyFile);

  return files
    .map((fileName) => {
      const fullPath = path.join(CASE_STUDIES_DIR, fileName);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      const frontmatter = data as CaseStudyFrontmatter;
      const slug = frontmatter.slug ?? fileName.replace(/\.mdx$/, '');

      return {
        ...frontmatter,
        slug,
        content,
      };
    })
    .filter((item) => item.slug && item.title);
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | null => {
  const caseStudies = getCaseStudies();
  return caseStudies.find((item) => item.slug === slug) ?? null;
};
