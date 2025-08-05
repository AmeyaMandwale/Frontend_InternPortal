import React from 'react';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { 
  Box, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent, 
  Paper, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  GroupWork as GroupWorkIcon,
  Star as StarIcon
} from '@mui/icons-material';
import ArgonBox from 'components/ArgonBox';

function Activity() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const steps = [
    {
      label: 'Skill Gap Analysis',
      description: 'AI compares your current skills vs industry-standard full-stack job descriptions',
      content: (
        <Paper elevation={0} sx={{ p: 2, mb: 2, backgroundColor: '#f5f5f5' }}>
          <Typography variant="body1" paragraph>
            Based on your profile, our analysis shows:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'success.main' }}>
                <CheckCircleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Skills You Have
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="React" color="success" variant="outlined" />
                <Chip label="Node.js" color="success" variant="outlined" />
                <Chip label="JavaScript" color="success" variant="outlined" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'warning.main' }}>
                <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Skills To Learn
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Docker" color="warning" />
                <Chip label="CI/CD" color="warning" />
                <Chip label="PostgreSQL" color="warning" />
                <Chip label="TypeScript" color="warning" />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
           { "You know React and Node.js but are missing Docker, CI/CD, and PostgreSQL. Learn those next."}
          </Typography>
        </Paper>
      )
    },
    {
      label: 'Personalized Learning Roadmap',
      description: '6-12 month plan to become job-ready',
      content: (
        <Box sx={{ mb: 2 }}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Month 1-2</Typography>
              <Typography color="text.secondary">Frontend Core</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="HTML, CSS (Flexbox, Grid), JavaScript ES6+" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="React fundamentals + Hooks" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Build 2 small projects (e.g., Weather App, To-Do App)" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Month 3-4</Typography>
              <Typography color="text.secondary">Backend Core</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Node.js, Express.js" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="REST APIs" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="MongoDB / PostgreSQL" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="JWT & Session Authentication" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Month 5-6</Typography>
              <Typography color="text.secondary">Full Stack Projects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Build a full-stack app (e.g., Blog, Task Manager)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="GitHub repo with README + Live Link" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Month 7-8</Typography>
              <Typography color="text.secondary">Advanced Concepts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="TypeScript" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Docker basics" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="GitHub Actions / CI-CD" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Deploy apps on Vercel/Render/Heroku/AWS" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Month 9-10</Typography>
              <Typography color="text.secondary">Portfolio + Resume</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Host portfolio site" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Showcase 3+ projects (frontend, backend, fullstack)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Write technical blogs (optional, bonus for credibility)" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Month 11-12</Typography>
              <Typography color="text.secondary">Job Preparation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Solve DSA questions on Leetcode/CodeStudio" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Mock Interviews" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Apply for internships or entry-level roles" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      )
    },
    {
      label: 'Project Recommendations',
      description: 'Hands-on projects to build your portfolio',
      content: (
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    <StarIcon />
                  </Avatar>
                  <Typography variant="h6">Clone Projects</Typography>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Netflix Clone" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Trello Clone" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Medium Clone" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                    <GroupWorkIcon />
                  </Avatar>
                  <Typography variant="h6">Team Project</Typography>
                </Box>
                <Typography variant="body2" paragraph>
                  Collaborate using GitHub and Kanban (simulate real job environment)
                </Typography>
                <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                  Find Teammates
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                    <BuildIcon />
                  </Avatar>
                  <Typography variant="h6">Capstone Project</Typography>
                </Box>
                <Typography variant="body2" paragraph>
                  Full-featured Full Stack Project with:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="Authentication" size="small" />
                  <Chip label="Dashboard" size="small" />
                  <Chip label="Data Visualization" size="small" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )
    },
    {
      label: 'Course & Resource Suggestions',
      description: 'Based on your budget and learning style',
      content: (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Free Resources
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="info" />
              </ListItemIcon>
              <ListItemText 
                primary="FrontendMentor.io" 
                secondary="Frontend challenges with solutions" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="info" />
              </ListItemIcon>
              <ListItemText 
                primary="CS50" 
                secondary="Harvard's Introduction to Computer Science" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="info" />
              </ListItemIcon>
              <ListItemText 
                primary="Node.js Docs" 
                secondary="Official documentation with examples" 
              />
            </ListItem>
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" gutterBottom>
            Paid Courses
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Udemy: MERN Stack Course by Angela Yu" 
                secondary="Comprehensive full-stack development course" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Udemy: MERN Stack Course by Jonas Schmedtmann" 
                secondary="Project-based learning approach" 
              />
            </ListItem>
          </List>
        </Box>
      )
    }
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox
  sx={{
    maxWidth: '100%',
    px: 3,
    position: 'relative',         // ✅ added
    zIndex: 1201,                 // ✅ added
    backgroundColor: '#fff'       // ✅ added
  }}
>
  <Typography variant="h4" gutterBottom sx={{ mt: 2, mb: 4 }}>
    Your Personalized Learning Roadmap
  </Typography>

  <Stepper activeStep={activeStep} orientation="vertical" sx={{ mb: 4 }}>
    {steps.map((step, index) => (
      <Step key={step.label}>
        <StepLabel
          optional={
            index === steps.length - 1 ? (
              <Typography variant="caption">Last step</Typography>
            ) : null
          }
          sx={{
            '& .MuiStepLabel-label': {
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }
          }}
        >
          {step.label}
          <Typography variant="body2" color="text.secondary">
            {step.description}
          </Typography>
        </StepLabel>
        <StepContent>
          {step.content}
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={() => setActiveStep(activeStep + 1)}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
              <Button
                disabled={index === 0}
                onClick={() => setActiveStep(activeStep - 1)}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>
    ))}
  </Stepper>

  {activeStep === steps.length && (
    <Paper square elevation={0} sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h5" gutterBottom>
        {`You're all set!`}
      </Typography>
      <Typography paragraph>
        {`You've reviewed your personalized roadmap. Now it's time to start learning!`}
      </Typography>
      <Button
        variant="contained"
        onClick={() => setActiveStep(0)}
        sx={{ mt: 1, mr: 1 }}
      >
        Review Again
      </Button>
      <Button variant="outlined" sx={{ mt: 1, mr: 1 }}>
        Track Progress
      </Button>
    </Paper>
  )}
</ArgonBox>

    </DashboardLayout>
  );
}

export default Activity;