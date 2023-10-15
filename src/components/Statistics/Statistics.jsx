import css from './Statistics.module.css';
import { StatsListItem } from './StatsListItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}

      <ul className={css.statList}>
        {stats.map(item => (
          <StatsListItem key={item.id} dataItem={item} />
        ))}
      </ul>
    </section>
  );
};
