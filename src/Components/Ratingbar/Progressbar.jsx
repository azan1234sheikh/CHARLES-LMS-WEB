import React from 'react';
import { Progress } from '@chakra-ui/react'; // Adjust this import according to the UI library you're using

const ProgressBar = ({ barVisible, barValue , ...props }) => {
  return (
    <>
      {barVisible && (
        <Progress
          borderRadius="12px"
          sx={{ '& > div': { bg: {barcolour}} }}
          size="sm"
          value={barValue}
        />
      )}
    </>
  );
};

export default ProgressBar;
