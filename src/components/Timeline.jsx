export default function Timeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <article className="timeline__item" key={`${entry.date}-${entry.topic}`}>
          <div className="timeline__date">{entry.date}</div>
          <div className="timeline__content">
            <span className="tag">{entry.level}</span>
            <h3>{entry.topic}</h3>
            <dl>
              <div>
                <dt>Teaching situation</dt>
                <dd>{entry.situation}</dd>
              </div>
              <div>
                <dt>Student reactions</dt>
                <dd>{entry.studentReactions}</dd>
              </div>
              <div>
                <dt>Teacher actions</dt>
                <dd>{entry.teacherActions}</dd>
              </div>
              <div>
                <dt>Personal analysis</dt>
                <dd>{entry.analysis}</dd>
              </div>
              <div>
                <dt>What was learned</dt>
                <dd>{entry.learning}</dd>
              </div>
              <div>
                <dt>Future application</dt>
                <dd>{entry.futureApplication}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}
