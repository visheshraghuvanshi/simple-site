"use client";
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HeroSection: React.FC = () => {
    const StyledContainer = styled(Container)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
    });

    const StyledTypography = styled(Typography)({
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: '1.2',
        marginBottom: '1.5rem',
        color: '#333',
    });

    const StyledButton = styled(Button)({
        backgroundColor: '#2196f3',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1976d2',
        },
        marginTop: '1.5rem',
        padding: '0.75rem 2rem',
        fontSize: '1.125rem',
        borderRadius: '0.375rem',
    });

    return (
        <div className="bg-gray-50">
            <StyledContainer>
                <StyledTypography variant="h1">
                    Vishesh Kumar Raghuvanshi
                </StyledTypography>
                <Typography variant="body1" color="text.secondary" className="mb-8">
                    Passionate computer science student and web developer
                </Typography>
                <Box>
                    <StyledButton variant="contained" href="/projects">View My Work</StyledButton>
                </Box>
            </StyledContainer>
        </div>
    );
};

export default HeroSection;