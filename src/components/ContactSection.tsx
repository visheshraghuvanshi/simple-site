"use client";
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material';

const ContactSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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

    const StyledForm = styled(Box)({
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    });

    const StyledTextField = styled(TextField)({
        width: '100%',
        marginBottom: '1.5rem',
    });

    const StyledButton = styled(Button)({
        backgroundColor: '#2196f3',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1976d2',
        },
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your contact form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="bg-gray-100">
            <StyledContainer>
                <StyledSectionTitle variant="h2">Contact Me</StyledSectionTitle>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledTextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <StyledTextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <StyledTextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <StyledButton type="submit" variant="contained" endIcon={<Send />}>
                        Submit
                    </StyledButton>
                </StyledForm>
            </StyledContainer>
        </div>
    );
};

export default ContactSection;