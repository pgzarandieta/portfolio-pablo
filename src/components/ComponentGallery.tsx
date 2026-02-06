import Button from './Button';
import Card from './Card';
import Section from './Section';
import Tag from './Tag';

export default function ComponentGallery() {
  return (
    <Section eyebrow="System" title="UI Components">
      <div className="stack">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag>Systems</Tag>
          <Tag>Platform</Tag>
          <Tag>CM</Tag>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Case Study"
            description="Customer-side requirements, UAT, training."
            tags={['CM', 'UAT']}
          />
          <Card
            title="Platform"
            description="Self-hosted services with automation."
            tags={['DevOps', 'Agents']}
          />
        </div>
      </div>
    </Section>
  );
}
