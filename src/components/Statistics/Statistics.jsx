import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ buttons, total, positivePercentage }) => (
  <>
    <ul>
      {Object.keys(buttons).map(button => (
        <li className={css.statisticsItem} key={button}>
          {button}: {buttons[button]}
        </li>
      ))}
      <li className={css.statisticsItem}>Total: {total}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  buttons: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;