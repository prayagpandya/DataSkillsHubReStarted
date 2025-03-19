import React from 'react';

import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CodeIcon from '@mui/icons-material/Code';
import ExpandIcon from '@mui/icons-material/Expand';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketIcon from '@mui/icons-material/Rocket';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

// Styled Paper component for timeline cards (from the first code)
const TimelineCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  background: '#ffffff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const timelineData = [
  {
    year: '2020',
    title: 'The Spark of Innovation',
    description:
      'Data Skills Hub launched with online Project Management & Data Analysis training, plus Invoice and Billing Software. Our vision: empower through skills and tech.',
    icon: <LightbulbIcon fontSize='large' />, // From the first code
    color: 'primary',
  },
  {
    year: '2021',
    title: 'Expanding Horizons',
    description:
      'Added Product Management, Business Analysis, Digital Marketing, Mobile App & Web Development. First placements in the USA & Canada solidified our vision.',
    icon: <ExpandIcon fontSize='large' />, // From the first code
    color: 'secondary',
  },
  {
    year: '2022',
    title: 'Building a Community',
    description:
      'Introduced Full Stack Web Development, expanded placements, and enhanced Invoice Software. Our vision: unite skills, careers, and tech for a thriving community.',
    icon: <GroupIcon fontSize='large' />, // From the first code
    color: 'success',
  },
  {
    year: '2023',
    title: 'Scaling New Heights',
    description:
      'Thousands trained in our programs, placements soared, and tech services expanded. Our vision: empower globally through scalable education and innovation.',
    icon: <CodeIcon fontSize='large' />, // From the first code
    color: 'warning',
  },
  {
    year: '2024',
    title: 'A Holistic Ecosystem',
    description:
      'AI-enhanced courses, strong placements, and advanced Software Development defined us. Our vision: a seamless ecosystem for skills, careers, and tech solutions.',
    icon: <AutoFixHighIcon fontSize='large' />, // From the first code
    color: 'error',
  },
  {
    year: '2025',
    title: 'The Future Unfolds',
    description:
      'By March 2025, we’ve empowered thousands with skills and jobs, delivering cutting-edge tech. Our vision: transform lives and industries through education & innovation by 2030.',
    icon: <RocketIcon fontSize='large' />, // From the first code
    color: 'info',
  },
];

export default function DataSkillsHubTimeline() {
  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, md: 10 },
        bgcolor: '#f1f1f1', // From the second code
      }}
    >
      <Typography
        variant='h4'
        align='center'
        className='font-semibold'
        sx={{ mb: 5, color: '#333' }} // From the second code
      >
        {/* Rocket icon from the second code */}
        The Journey of Data Skills Hub (2020–2025)
      </Typography>
      <Timeline position='alternate'>
        {' '}
        {/* Layout from the second code */}
        {timelineData.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={index % 2 === 0 ? 'right' : 'left'} // From the second code
            >
              <Typography variant='h6' color='textSecondary'>
                {event.year}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{
                  bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main', // From the second code
                  height: 80,
                }}
              />
              <TimelineDot
                sx={{
                  p: 1.5,
                  bgcolor: `${event.color}.light`, // From the first code
                  color: `${event.color}.main`, // From the first code
                  border: '2px solid', // From the first code
                  borderColor: `${event.color}.main`, // From the first code
                  boxShadow: 3, // From the second code
                }}
              >
                {event.icon}
              </TimelineDot>
              <TimelineConnector
                sx={{
                  bgcolor: index % 2 === 0 ? 'secondary.main' : 'primary.main', // From the second code
                  height: 80,
                }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 3 }}>
              <TimelineCard elevation={0}>
                {' '}
                {/* Using styled TimelineCard from the first code */}
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 600, // From the first code
                    color: '#333', // From the first code
                    mb: 1,
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: '#666', lineHeight: 1.6 }} // From the first code
                >
                  {event.description}
                </Typography>
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
