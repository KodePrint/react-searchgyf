// Import Services
import './PointsLoading.scss';

const PointsLoading = () => {

  return (
    <div className="container">
      <div className="lds-ellipsis">
        <div className='one'></div>
        <div className='two'></div>
        <div className='tree'></div>
        <div className='four'></div>
      </div>
    </div>
  );
}

export default PointsLoading;