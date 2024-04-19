"use client";
import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const NotFoundPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="background.default"
      px={isMobile ? 2 : 0}
    >
      <Typography
        variant={isMobile ? 'h3' : 'h1'}
        color="black"
        mb={isMobile ? 1 : 2}
      >
        404
      </Typography>
      <Typography
        variant={isMobile ? 'body1' : 'h5'}
        color="text.secondary"
        mb={isMobile ? 2 : 4}
        textAlign="center"
        maxWidth="500px"
      >
        Oops! The page you&#39;re looking for doesn&#39;t exist. It might have been moved or deleted.
      </Typography>
      <Link href="/" passHref>
        <Button
          variant="contained"
          color="primary"
          size={isMobile ? 'small' : 'medium'}
          disableElevation
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;