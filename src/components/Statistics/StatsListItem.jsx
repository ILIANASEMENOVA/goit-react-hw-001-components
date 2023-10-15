import css from './Statistics.module.css';


export const StatsListItem = ({ dataItem: { label, percentage } }) => {
      const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
    return (
      <li style={{backgroundColor: getRandomHexColor()}} className={css.item} >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
        </li>
    );
}

