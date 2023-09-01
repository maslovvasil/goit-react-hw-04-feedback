import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ buttons, handleClick }) => (
  <div className={css.buttonsContainer}>
    {Object.keys(buttons).map(button => (
      <button
        key={button}
        className={css.categoryButton}
        type="button"
        onClick={() => handleClick(button)}
      >
        {button}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  buttons: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;