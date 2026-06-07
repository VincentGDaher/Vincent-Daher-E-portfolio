export default function ArtefactCard({
  title,
  type,
  description,
  competency,
  reflection,
  linkLabel,
}) {
  return (
    <article className="artefact-card">
      <span className="tag">{type}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="artefact-card__meta">
        <strong>Competency demonstrated</strong>
        <span>{competency}</span>
      </div>
      <div className="artefact-card__meta">
        <strong>Reflection</strong>
        <span>{reflection}</span>
      </div>
      <a href="#contact">{linkLabel}</a>
    </article>
  );
}
