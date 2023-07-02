import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css'
import {getRandomHexColor} from '../utils/getRandomHexColor'

export function StatisticsItem({ label, percentage }) {
  return (
    <li
      style={{
        backgroundColor: getRandomHexColor(),
      }}
      className={css.item}
    >
      <span className={css.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}