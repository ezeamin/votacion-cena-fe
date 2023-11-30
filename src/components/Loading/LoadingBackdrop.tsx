import { Backdrop } from '@mui/material';

import { useLoading } from '@/store/useLoading';

import './index.css';

const LoadingBackdrop = () => {
  const { isLoading } = useLoading();

  return (
    <Backdrop sx={{ color: '#fff', zIndex: 99999999 }} open={!!isLoading}>
      <div>
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube" />
          <div className="sk-cube2 sk-cube" />
          <div className="sk-cube4 sk-cube" />
          <div className="sk-cube3 sk-cube" />
        </div>
      </div>
    </Backdrop>
  );
};
export default LoadingBackdrop;
