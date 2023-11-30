import { useMediaQuery, useTheme } from '@mui/material';

// Detects if viewport is smaller than @param (=sm)

type SizeParams = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const usePortrait = (size: SizeParams = 'sm'): boolean => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down(size));
};

export default usePortrait;
