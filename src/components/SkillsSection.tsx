"use client";
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

interface Skill {
    title: string;
    progress: number;
}

const skills: Skill[] = [
    { title: 'Java', progress: 90 },
    { title: 'C', progress: 85 },
    { title: 'Python', progress: 80 },
    { title: 'JavaScript', progress: 95 },
    { title: 'React', progress: 92 },
    { title: 'MySQL', progress: 88 },
    { title: 'Git', progress: 90 },
];

const SkillsSection: React.FC = () => {
    const StyledContainer = styled(Container)({
        paddingTop: '4rem',
        paddingBottom: '4rem',
    });

    const StyledSectionTitle = styled(Typography)({
        fontWeight: 700,
        fontSize: '2.25rem',
        marginBottom: '2rem',
        textAlign: 'center',
    });

    const StyledSkillContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '1.5rem',
    });

    const StyledSkillTitle = styled(Typography)({
        fontWeight: 600,
        fontSize: '1.125rem',
        marginBottom: '0.5rem',
    });

    const StyledLinearProgress = styled(LinearProgress)<LinearProgressProps>({
        width: '100%',
        height: '0.5rem',
        borderRadius: '0.25rem',
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#2196f3',
        },
    });

    return (
        <div className="bg-gray-100">
            <StyledContainer>
                <StyledSectionTitle variant="h2">My Skills</StyledSectionTitle>
                <Grid container spacing={4}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledSkillContainer>
                                <StyledSkillTitle>{skill.title}</StyledSkillTitle>
                                <StyledLinearProgress variant="determinate" value={skill.progress} />
                            </StyledSkillContainer>
                        </Grid>
                    ))}
                </Grid>
            </StyledContainer>
        </div>
    );
};

export default SkillsSection;