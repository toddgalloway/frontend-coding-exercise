import PropTypes from 'prop-types';
import iconPath from "./icons.svg";
import "./Button.css";

/**
 * <Button
 *   className="MyButton"
 *   onClick={() => console.log('Click')} 
 * />
 *
 * @prop {Function} onClick
 * @prop {mixed} ... All other props will be forwarded to the native DOM button.

 */
export function Button(props) {
  const { className, value, ...otherProps } = props;

  function showInput () {
    alert(value);
  }

  return (
    <button
      type="button"
      className={"Button " + (className || "")}
      onClick={showInput}
      {...otherProps}
    >
      <svg viewBox="0 0 24 24" width="24" height="16">
        <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
      </svg>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};