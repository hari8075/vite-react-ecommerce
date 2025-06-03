import { CircleLoader } from 'react-spinners';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <CircleLoader
        color="#00BFFF"
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loading;
