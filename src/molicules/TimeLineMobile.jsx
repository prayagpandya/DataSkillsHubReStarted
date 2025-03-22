import React, { useEffect, useState } from 'react';

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

// Styled Paper component for timeline cards
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
    icon: <LightbulbIcon fontSize='large' />,
    color: 'primary',
  },
  {
    year: '2021',
    title: 'Expanding Horizons',
    description:
      'Added Product Management, Business Analysis, Digital Marketing, Mobile App & Web Development. First placements in the USA & Canada solidified our vision.',
    icon: <ExpandIcon fontSize='large' />,
    color: 'secondary',
  },
  {
    year: '2022',
    title: 'Building a Community',
    description:
      'Introduced Full Stack Web Development, expanded placements, and enhanced Invoice Software. Our vision: unite skills, careers, and tech for a thriving community.',
    icon: <GroupIcon fontSize='large' />,
    color: 'success',
  },
  {
    year: '2023',
    title: 'Scaling New Heights',
    description:
      'Thousands trained in our programs, placements soared, and tech services expanded. Our vision: empower globally through scalable education and innovation.',
    icon: <CodeIcon fontSize='large' />,
    color: 'warning',
  },
  {
    year: '2024',
    title: 'A Holistic Ecosystem',
    description:
      'AI-enhanced courses, strong placements, and advanced Software Development defined us. Our vision: a seamless ecosystem for skills, careers, and tech solutions.',
    icon: <AutoFixHighIcon fontSize='large' />,
    color: 'error',
  },
  {
    year: '2025',
    title: 'The Future Unfolds',
    description:
      'By March 2025, we’ve empowered thousands with skills and jobs, delivering cutting-edge tech. Our vision: transform lives and industries through education & innovation by 2030.',
    icon: <RocketIcon fontSize='large' />,
    color: 'info',
  },
];

export default function DataSkillsHubTimelineMobile() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 0, md: 10 }, // Remove padding on mobile for left edge alignment
        bgcolor: '#f1f1f1',
      }}
    >
      <Typography
        variant='h4'
        align='center'
        className='font-semibold'
        sx={{ mb: 5, color: '#333' }}
      >
        The Journey of Data Skills Hub (2020–2025)
      </Typography>
      <Timeline
        position={isMobile ? 'right' : 'alternate'}
        sx={{
          // On mobile, push timeline to the left edge
          ...(isMobile && {
            '& .MuiTimelineItem-root': {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              '&:before': { display: 'none' }, // Remove default padding/spacing
            },
            '& .MuiTimelineSeparator-root': {
              flex: '0 0 auto',
              mr: 2, // Space between timeline and content
            },
            '& .MuiTimelineContent-root': {
              flex: 1,
              pr: 2, // Padding on the right for mobile
            },
          }),
        }}
      >
        {timelineData.map((event, index) => (
          <TimelineItem key={index}>
            {/* Show year on opposite side only on large screens */}
            {!isMobile && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0', maxWidth: '100px' }}
                align={index % 2 === 0 ? 'right' : 'left'}
              >
                <Typography variant='h6' color='textSecondary'>
                  {event.year}
                </Typography>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineConnector
                sx={{
                  bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                  height: { xs: 40, md: 80 },
                }}
              />
              <TimelineDot
                sx={{
                  p: 1.5,
                  bgcolor: `${event.color}.light`,
                  color: `${event.color}.main`,
                  border: '2px solid',
                  borderColor: `${event.color}.main`,
                  boxShadow: 3,
                }}
              >
                {event.icon}
              </TimelineDot>
              <TimelineConnector
                sx={{
                  bgcolor: index % 2 === 0 ? 'secondary.main' : 'primary.main',
                  height: { xs: 40, md: 80 },
                }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 3 }}>
              <TimelineCard elevation={0}>
                {/* Show year above title on mobile */}
                {isMobile && (
                  <Typography variant='h6' color='textSecondary' sx={{ mb: 1 }}>
                    {event.year}
                  </Typography>
                )}
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 600,
                    color: '#333',
                    mb: 1,
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: '#666', lineHeight: 1.6 }}
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
