import type { ContentModel } from '../../content/schema';

import site from '../../content/site.json';
import profiles from '../../content/profiles.json';
import experience from '../../content/experience.json';
import projects from '../../content/projects.json';
import skills from '../../content/skills.json';
import education from '../../content/education.json';
import contact from '../../content/contact.json';

const content: ContentModel = {
  site,
  profiles,
  experience,
  projects,
  skills,
  education,
  contact,
};

export default content;
