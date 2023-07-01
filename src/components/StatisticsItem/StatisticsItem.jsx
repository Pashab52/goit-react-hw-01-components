import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css'

export function StatisticsItem({ label, percentage }) {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}