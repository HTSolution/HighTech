type ServiceDeliverableCardProps = {
  title: string;
  description: string;
  deliverables: [string, string, string];
};

export default function ServiceDeliverableCard({
  title,
  description,
  deliverables,
}: ServiceDeliverableCardProps) {
  return (
    <article className="h-full rounded-[2rem] bg-white border border-gray-100 p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300">
      <h3 className="text-2xl font-semibold tracking-tight text-brand-dark">{title}</h3>
      <p className="mt-3 text-brand-gray text-sm leading-relaxed">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-brand-dark" aria-label={`Deliverable ${title}`}>
        {deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span aria-hidden="true" className="text-brand-blue font-bold mt-[1px]">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
