import WrapperStyle from './styles.module.scss';

const Wrapper = ({ children }) => {
  return (
    <div className={WrapperStyle.wrapper}>
      <div className={WrapperStyle.gosth}></div>
      {children}
    </div>
  );
}

export default Wrapper;