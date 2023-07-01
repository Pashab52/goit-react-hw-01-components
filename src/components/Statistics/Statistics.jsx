import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <StatisticsItem label={item.label} percentage={item.percentage} key={item.id} />
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired}).isRequired).isRequired
}