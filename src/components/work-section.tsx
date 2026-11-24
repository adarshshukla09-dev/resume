import type { workExperience } from "@/db/schema";

type Work = typeof workExperience.$inferSelect;

interface WorkSectionProps {
  data: Work[];
}

export default function WorkSection({ data }: WorkSectionProps) {
  if (!data.length) return null;

  return (
    <div className="flex flex-col gap-8">
      {data.map((work) => (
        <div key={work.id}>
          {/* Move your existing work experience card JSX here */}

          <h3 className="font-semibold">{work.title}</h3>

          <p className="text-muted-foreground">{work.company}</p>

          <p className="text-sm text-muted-foreground">
            {work.startDate} - {work.endDate || "Present"}
          </p>

          <p className="text-sm">{work.description}</p>
        </div>
      ))}
    </div>
  );
}
