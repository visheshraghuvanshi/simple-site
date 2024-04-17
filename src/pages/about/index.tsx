import React from 'react';
import { Box, Grid, Typography, Avatar, Chip, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { GitHub, Email, Description } from '@mui/icons-material';
import Layout from "../layout";

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <Box p={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                            <Avatar src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg" alt="Vishesh Kumar" sx={{ width: 150, height: 150 }} />
                            <Typography variant="h5" mt={2}>
                                Vishesh Kumar
                            </Typography>
                            <Box mt={1} display="flex" flexDirection="column" alignItems="center">
                                <center>
                                    <Box>
                                        <Chip
                                            icon={<Email />}
                                            label="visheshkumarraghuvanshi@gmail.com"
                                            clickable
                                            component="a"
                                            href="mailto:visheshkumarraghuvanshi@gmail.com"
                                        />
                                        <br></br>
                                        <Chip
                                            icon={<GitHub />}
                                            label="github.com/visheshraghuvanshi"
                                            clickable
                                            component="a"
                                            href="https://github.com/visheshraghuvanshi"
                                        />
                                        <br></br>
                                        <br></br>
                                        <Chip
                                            icon={<Description />}
                                            label="Resume"
                                            clickable
                                            component="a"
                                            href="/resume.pdf"
                                        />
                                    </Box>
                                </center>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box>
                            <Typography variant="h4" mb={2}>
                                Education
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Chip label="2020 - 2024" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Sushila Devi Bansal College of Engineering, Indore"
                                        secondary="CSE | CGPA: 8.17"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Chip label="2019 - 2020" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Kendriya Vidyalaya Mhow"
                                        secondary="AISSCE (Class XII), Aggregate: 87.4%"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Chip label="2017 - 2018" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Kendriya Vidyalaya Mhow"
                                        secondary="AISSE (Class X), Aggregate: 82%"
                                    />
                                </ListItem>
                            </List>
                            <Typography variant="h4" mb={2} mt={4}>
                                Skills
                            </Typography>
                            <Box display="flex" flexWrap="wrap" gap={1}>
                                <Chip label="Java" />
                                <Chip label="C" />
                                <Chip label="Python" />
                                <Chip label="JavaScript" />
                                <Chip label="React" />
                                <Chip label="MySQL" />
                                <Chip label="Git" />
                            </Box>
                            <Typography variant="h4" mb={2} mt={4}>
                                Projects
                            </Typography>
                            <Box>
                                <Typography variant="h5" mb={1}>
                                    Excellence Study
                                    <Chip label="Jan'24" size="small" sx={{ ml: 2 }} />
                                    <Link href="https://github.com/visheshraghuvanshi/excellence-study" target="_blank" rel="noopener noreferrer">
                                        <Chip label="GitHub" size="small" sx={{ ml: 2 }} />
                                    </Link>
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    Excellence Study is an all-in-one online learning platform that provides access to quality educational resources including articles, courses, videos and more.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Built an all-in-one learning platform (React, Firebase, GraphQL) offering a comprehensive library of educational resources (articles, courses, videos)."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Utilized GraphQL to efficiently fetch articles from Hashnode, providing users a dynamic and up-to-date learning experience."
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box mt={4}>
                                <Typography variant="h5" mb={1}>
                                    Chatify
                                    <Chip label="Jun'23" size="small" sx={{ ml: 2 }} />
                                    <Link href="https://github.com/visheshraghuvanshi/chatify" target="_blank" rel="noopener noreferrer">
                                        <Chip label="GitHub" size="small" sx={{ ml: 2 }} />
                                    </Link>
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    Chatify is a real-time chat application built with React and Firebase. It allows users to create accounts, login, and start chatting with other users in real-time.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Developed a real-time chat application (React & Firebase) enabling user accounts, login, and real-time chat with a user-friendly interface."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Leveraged Firebase for authentication and Firestore for real-time messaging."
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box mt={4}>
                                <Typography variant="h5" mb={1}>
                                    Doubt Solving Portal (DSP)
                                    <Chip label="Dec'22" size="small" sx={{ ml: 2 }} />
                                    <Link href="https://github.com/visheshraghuvanshi/dsp" target="_blank" rel="noopener noreferrer">
                                        <Chip label="GitHub" size="small" sx={{ ml: 2 }} />
                                    </Link>
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    DSP (Doubt Solving Portal) is a web application built using PHP and MySQL. It provides a platform for students to ask questions, get answers from faculty members, and engage in collaborative learning. The project aims to facilitate knowledge sharing and provide a seamless experience for users.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Developed a web application (PHP & MySQL) facilitating student-faculty interaction through Q&A and collaborative learning."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Utilized MySQL database for managing categories, questions, answers, and user information."
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                            <Typography variant="h4" mb={2} mt={4}>
                                Awards/Certifications
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Python for Data Science (NPTEL)"
                                        secondary="Dec'22 | Silver Medal"
                                    />
                                    <Chip
                                        label="Certificate"
                                        clickable
                                        component="a"
                                        href="https://media.licdn.com/dms/image/C4D22AQFf8tBUTTpjyg/feedshare-shrink_800/0/1665811443229?e=1716422400&v=beta&t=lQ2GS9viIDV8ExJK7hyWw4cF_21wfrrODRgZfve9dik"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<Description />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="SQL (SoloLearn)"
                                        secondary="Dec'22"
                                    />
                                    <Chip
                                        label="Certificate"
                                        clickable
                                        component="a"
                                        href="https://www.sololearn.com/Certificate/CT-8UIDGWUL/pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<Description />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="SQL Basics (HackerRank)"
                                        secondary="Mar'23"
                                    />
                                    <Chip
                                        label="Certificate"
                                        clickable
                                        component="a"
                                        href="https://www.hackerrank.com/certificates/01c5ee523753"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<Description />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="SQL Intermediate (HackerRank)"
                                        secondary="Mar'23"
                                    />
                                    <Chip
                                        label="Certificate"
                                        clickable
                                        component="a"
                                        href="https://www.hackerrank.com/certificates/c168670a37b5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<Description />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Java Basics (HackerRank)"
                                        secondary="Mar'23"
                                    />
                                    <Chip
                                        label="Certificate"
                                        clickable
                                        component="a"
                                        href="https://www.hackerrank.com/certificates/7729385bb33d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<Description />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Programming Basics (IITBOMBAYX)"
                                        secondary="May'22 | Grade: A+"
                                    />
                                    <Chip
                                        label="Certificate"
                                        clickable
                                        component="a"
                                        href="https://certificate.iitbombayx.in/downloads/ef579ada82934c428dffc2135aa1c718/Certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        icon={<Description />}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="BGI Coderz 2k22"
                                        secondary="May'22 | Position: 2nd | Place: Sushila Devi Bansal College of Engineering"
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default AboutPage;