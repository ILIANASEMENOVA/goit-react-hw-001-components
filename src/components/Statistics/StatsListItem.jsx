import { getRandomHexColor } from 'helpers/getRandomHexColor';
import css from './Statistics.module.css';

export const StatsListItem = ({ dataItem: { label, percentage } }) => {
  return (
    <li style={{ backgroundColor: getRandomHexColor() }} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
