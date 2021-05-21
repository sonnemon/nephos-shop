import classNames from 'classnames';

const Loader = ({ open = true }) => {
  return (
    <>
      <div
        className={classNames('pageloader is-full', {
          'is-active': open,
        })}
      />
      <div
        className={classNames('infraloader is-full', {
          'is-active': open,
        })}
      />
    </>
  );
};
export default Loader;
