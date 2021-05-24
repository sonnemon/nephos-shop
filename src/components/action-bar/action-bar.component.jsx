import classNames from 'classnames';

const ActionBar = ({ step }) => {
  return (
    <div className="action-bar is-centered is-mobile">
      <div className="steps-wrapper">
        <ol className="step-list">
          <li
            className={classNames({
              active: [1, 2, 3, 4].includes(step) ? true : false,
            })}
          />
          <li
            className={classNames({
              active: [2, 3, 4].includes(step) ? true : false,
            })}
          />
          <li
            className={classNames({
              active: [3, 4].includes(step) ? true : false,
            })}
          />
          <li
            className={classNames({
              active: [4].includes(step) ? true : false,
            })}
          />
        </ol>
      </div>
    </div>
  );
};
export default ActionBar;
