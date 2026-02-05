export type Link = {
  label: string;
  url: string;
};

export type Profile = {
  id: string;
  title: string;
  summary: string;
  focus: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  highlights: string[];
  caseStudySlug?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Education = {
  id: string;
  institution: string;
  program: string;
  focus?: string;
  end: string;
  highlights: string[];
};

export type Contact = {
  email: string;
  phone?: string;
  location?: string;
  links: Link[];
};

export type SiteMeta = {
  name: string;
  tagline: string;
  location: string;
  links: Link[];
};

export type ContentModel = {
  site: SiteMeta;
  profiles: Profile[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  contact: Contact;
};
