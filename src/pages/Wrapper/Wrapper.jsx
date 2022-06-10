import WrapperStyle from './styles.module.css';

const Wrapper = ({ children }) => {
  return (
    <div className={WrapperStyle.wrapper}>
      {children}
    </div>
  );
}

export default Wrapper;