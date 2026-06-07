export default function ResearchCard({ title, concept, classroomLink }) {
  return (
    <article className="research-card">
      <h3>{title}</h3>
      <p>{concept}</p>
      <span>{classroomLink}</span>
    </article>
  );
}
