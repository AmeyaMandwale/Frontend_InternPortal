import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Chip,
  Link,
  InputAdornment,
} from "@mui/material";
import {
  Edit as EditIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  DeleteOutline as DeleteOutlineIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Cake as CakeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Star as StarIcon,
  Person as PersonIcon,
  Public as PublicIcon,
  Business as BusinessIcon,
  Description as DescriptionIcon,
  Link as LinkIcon,
} from "@mui/icons-material";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const [editingAchievementIndex, setEditingAchievementIndex] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    photo: "",
    location: "",
    willingToRelocate: false,
    preferredLocations: "",
    careerGoal: "",
    bio: "",
    linkedIn: "",
    github: "",
    education: {
      degree: "",
      branch: "",
      institution: "",
      startDate: "",
      endDate: "",
      grade: "",
    },
    skills: {
      technical: "",
      tools: "",
    },
    projects: [],
    achievements: [],
  });

  const [tempProject, setTempProject] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
  });

  const [tempAchievement, setTempAchievement] = useState({
    title: "",
    issuer: "",
    year: "",
    description: "",
  });

  // Load profile from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setProfile(parsedProfile);
    }
  }, []);

  const handleOpenForm = () => {
    if (profile) {
      setFormData(profile);
      setEditMode(true);
    } else {
      setFormData({
        fullName: "",
        address: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        photo: "",
        location: "",
        willingToRelocate: false,
        preferredLocations: "",
        careerGoal: "",
        bio: "",
        linkedIn: "",
        github: "",
        education: {
          degree: "",
          branch: "",
          institution: "",
          startDate: "",
          endDate: "",
          grade: "",
        },
        skills: {
          technical: "",
          tools: "",
        },
        projects: [],
        achievements: [],
      });
      setEditMode(false);
    }
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditingProjectIndex(null);
    setEditingAchievementIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        [name]: value,
      },
    });
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [name]: value,
      },
    });
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setTempProject({
      ...tempProject,
      [name]: value,
    });
  };

  const handleAchievementChange = (e) => {
    const { name, value } = e.target;
    setTempAchievement({
      ...tempAchievement,
      [name]: value,
    });
  };

  const addProject = () => {
    if (tempProject.title) {
      if (editingProjectIndex !== null) {
        // Update existing project
        const updatedProjects = [...formData.projects];
        updatedProjects[editingProjectIndex] = tempProject;
        setFormData({
          ...formData,
          projects: updatedProjects,
        });
        setEditingProjectIndex(null);
      } else {
        // Add new project
        setFormData({
          ...formData,
          projects: [...formData.projects, tempProject],
        });
      }
      setTempProject({
        title: "",
        description: "",
        technologies: "",
        link: "",
      });
    }
  };

  const editProject = (index) => {
    const projectToEdit = formData.projects[index];
    setTempProject(projectToEdit);
    setEditingProjectIndex(index);
  };

  const removeProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    if (editingProjectIndex === index) {
      setEditingProjectIndex(null);
      setTempProject({
        title: "",
        description: "",
        technologies: "",
        link: "",
      });
    }
  };

  const addAchievement = () => {
    if (tempAchievement.title) {
      if (editingAchievementIndex !== null) {
        // Update existing achievement
        const updatedAchievements = [...formData.achievements];
        updatedAchievements[editingAchievementIndex] = tempAchievement;
        setFormData({
          ...formData,
          achievements: updatedAchievements,
        });
        setEditingAchievementIndex(null);
      } else {
        // Add new achievement
        setFormData({
          ...formData,
          achievements: [...formData.achievements, tempAchievement],
        });
      }
      setTempAchievement({
        title: "",
        issuer: "",
        year: "",
        description: "",
      });
    }
  };

  const editAchievement = (index) => {
    const achievementToEdit = formData.achievements[index];
    setTempAchievement(achievementToEdit);
    setEditingAchievementIndex(index);
  };

  const removeAchievement = (index) => {
    const updatedAchievements = [...formData.achievements];
    updatedAchievements.splice(index, 1);
    setFormData({
      ...formData,
      achievements: updatedAchievements,
    });
    if (editingAchievementIndex === index) {
      setEditingAchievementIndex(null);
      setTempAchievement({
        title: "",
        issuer: "",
        year: "",
        description: "",
      });
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setProfile(formData);
    setOpenForm(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          p: { xs: 2, md: 4 },
          backgroundColor: "#f9fafb",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {!profile ? (
          <Box
            sx={{
              textAlign: "center",
              mt: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
              {`You haven't created your profile yet`}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleOpenForm}
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                color:'black !important',
                fontSize: "1rem",
                borderRadius: "8px",
                fontWeight: 500,
              }}
              size="large"
            >
              Create Profile
            </Button>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                User Profile
              </Typography>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={handleOpenForm}
                sx={{
                  backgroundColor: "black !important",
                  color: "white !important",
                  "&:hover": {
                    backgroundColor: "#333 !important",
                  },
                  borderRadius: "8px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                }}
              >
                Edit Profile
              </Button>
            </Box>

            <Card
              sx={{
                mb: 4,
                borderRadius: "12px",
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    mb: 3,
                    gap: 3,
                  }}
                >
                  <Avatar
                    src={profile.photo}
                    sx={{
                      width: 120,
                      height: 120,
                      border: "3px solid #fff",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, letterSpacing: 0.5 }}>
                      {profile.fullName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
                      {profile.careerGoal}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <LocationOnIcon color="action" fontSize="small" />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {profile.address}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem", fontWeight: 400, lineHeight: 1.6 }}
                >
                  {profile.bio || "No bio added yet."}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  {profile.linkedIn && (
                    <Button
                      variant="contained"
                      href={profile.linkedIn}
                      target="_blank"
                      startIcon={<LinkedInIcon />}
                      sx={{
                        borderRadius: "6px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        color: "white !important",
                        backgroundColor: "#0a66c2",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "#084d94",
                        },
                      }}
                    >
                      LinkedIn
                    </Button>
                  )}
                  {profile.github && (
                    <Button
                      variant="contained"
                      href={profile.github}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{
                        borderRadius: "6px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        color: "white !important",
                        backgroundColor: "#24292e",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "#1a1f24",
                        },
                      }}
                    >
                      GitHub/Portfolio
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      Basic Information
                    </Typography>
                    <Divider sx={{ mb: 4 }} />

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                          {profile.email}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          Phone
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                          {profile.phone}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          Date of Birth
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                          {profile.dob}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          Gender
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                          {profile.gender || "Not specified"}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          Willing to relocate
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                          {profile.willingToRelocate ? "Yes" : "No"}
                        </Typography>
                      </Box>

                      {profile.willingToRelocate && (
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                          >
                            Preferred locations
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 400 }}>
                            {profile.preferredLocations}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      Skills
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                      Technical Skills
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 3,
                        "& .MuiChip-root": {
                          borderRadius: "6px",
                          fontWeight: 500,
                        },
                      }}
                    >
                      {profile.skills.technical
                        .split(",")
                        .map(
                          (skill, index) =>
                            skill.trim() && (
                              <Chip
                                key={index}
                                label={skill.trim()}
                                icon={<CodeIcon fontSize="small" />}
                                color="primary"
                                variant="outlined"
                                size="small"
                              />
                            )
                        )}
                    </Box>

                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                      Tools & Platforms
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        "& .MuiChip-root": {
                          borderRadius: "6px",
                          fontWeight: 500,
                        },
                      }}
                    >
                      {profile.skills.tools
                        .split(",")
                        .map(
                          (tool, index) =>
                            tool.trim() && (
                              <Chip
                                key={index}
                                label={tool.trim()}
                                icon={<WorkIcon fontSize="small" />}
                                color="secondary"
                                variant="outlined"
                                size="small"
                              />
                            )
                        )}
                    </Box>
                  </CardContent>
                </Card>

                {profile.education.degree && (
                 <Card
  sx={{
    mt: 3, // reduced top margin
    borderRadius: "12px",
    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
  }}
>
  <CardContent sx={{ py: 2, px: 3 }}> {/* reduced padding */}
    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
      Education
    </Typography>
    

    <Paper
      sx={{
        p: 2, // reduced padding
        border: "1px solid #eee",
        borderRadius: "8px",
        backgroundColor: "#fafafa", // optional for subtle contrast
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
        {profile.education.degree}{" "}
        {profile.education.branch && `in ${profile.education.branch}`}
      </Typography>

      <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
        {profile.education.institution}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
        {profile.education.startDate} - {profile.education.endDate || "Present"}
      </Typography>

      {profile.education.grade && (
        <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 400 }}>
          <strong>Grade:</strong> {profile.education.grade}
        </Typography>
      )}
    </Paper>
  </CardContent>
</Card>

                )}
              </Grid>

              {profile.projects.length > 0 && (
                <Grid item xs={12}>
                  <Card
                    sx={{
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        Projects
                      </Typography>
                      <Divider sx={{ mb: 3 }} />
                      <Grid container spacing={3}>
                        {profile.projects.map((project, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Paper
                              sx={{
                                p: 3,
                                height: "100%",
                                border: "1px solid #eee",
                                borderRadius: "8px",
                              }}
                            >
                              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                {project.title}
                              </Typography>
                              {project.technologies && (
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ mb: 1, fontWeight: 400 }}
                                >
                                  {project.technologies}
                                </Typography>
                              )}
                              {project.description && (
                                <Typography
                                  variant="body1"
                                  paragraph
                                  sx={{ mb: 2, fontWeight: 400, lineHeight: 1.6 }}
                                >
                                  {project.description}
                                </Typography>
                              )}
                              {project.link && (
                                <Link
                                  href={project.link}
                                  target="_blank"
                                  underline="hover"
                                  sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    color: "primary.main",
                                    fontWeight: 500,
                                  }}
                                >
                                  <LinkIcon fontSize="small" sx={{ mr: 0.5 }} /> View Project
                                </Link>
                              )}
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              )}

              {profile.achievements.length > 0 && (
                <Grid item xs={12}>
                  <Card
                    sx={{
                      mt: 4,
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        Achievements & Awards
                      </Typography>
                      <Divider sx={{ mb: 3 }} />
                      <Grid container spacing={3}>
                        {profile.achievements.map((achievement, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Paper
                              sx={{
                                p: 3,
                                height: "100%",
                                border: "1px solid #eee",
                                borderRadius: "8px",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                <StarIcon color="primary" fontSize="small" />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                  {achievement.title}
                                </Typography>
                              </Box>
                              <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                sx={{ mb: 1, fontWeight: 500 }}
                              >
                                {achievement.issuer} • {achievement.year}
                              </Typography>
                              {achievement.description && (
                                <Typography variant="body1" sx={{ fontWeight: 400 }}>
                                  {achievement.description}
                                </Typography>
                              )}
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Box>
        )}

        {/* Profile Form Dialog */}
       <Dialog
  open={openForm}
  onClose={handleCloseForm}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "12px",
      overflow: "visible",
    },
  }}
>
  <DialogTitle
    sx={{
      backgroundColor: "primary.main",
      color: "common.white",
      fontWeight: 600,
      py: 2,
    }}
  >
    {editMode ? "Edit Profile" : "Create Profile"}
  </DialogTitle>
  <DialogContent dividers sx={{ py: 4 }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Divider sx={{ mb: 3 }} />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Date of Birth (MM/DD/YYYY)"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CakeIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Current Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              name="willingToRelocate"
              checked={formData.willingToRelocate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  willingToRelocate: e.target.checked,
                })
              }
              color="primary"
            />
          }
          label="Willing to Relocate?"
          sx={{ mb: 2 }}
        />
      </Grid>

      {formData.willingToRelocate && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Preferred Job Locations"
            name="preferredLocations"
            value={formData.preferredLocations}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Professional Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Career Goal / Desired Role"
          name="careerGoal"
          value={formData.careerGoal}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WorkIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Short Bio / Career Objective (2–3 lines)"
          name="bio"
          multiline
          rows={4}
          value={formData.bio}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  alignSelf: "flex-start",
                  mt: 1,
                }}
              >
                <DescriptionIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              alignItems: "flex-start",
            },
            "& textarea": {
              overflow: "hidden !important",
              width: "100% !important",
              boxSizing: "border-box",
            },
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="LinkedIn Profile URL"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="GitHub / Portfolio URL"
          name="github"
          value={formData.github}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Skills
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Technical Skills (e.g., React, Java, SQL)"
          name="technical"
          value={formData.skills.technical}
          onChange={handleSkillsChange}
          multiline
          rows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  alignSelf: "flex-start",
                  mt: 1,
                }}
              >
                <CodeIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-root": {
              alignItems: "flex-start",
            },
            "& textarea": {
              overflow: "hidden !important",
              width: "100% !important",
              boxSizing: "border-box",
            },
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Tools & Platforms (e.g., Docker, AWS, Figma)"
          name="tools"
          value={formData.skills.tools}
          onChange={handleSkillsChange}
          multiline
          rows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  alignSelf: "flex-start",
                  mt: 1,
                }}
              >
                <WorkIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-root": {
              alignItems: "flex-start",
            },
            "& textarea": {
              overflow: "hidden !important",
              width: "100% !important",
              boxSizing: "border-box",
            },
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Education
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Paper sx={{ p: 3, border: "1px solid #eee", borderRadius: "8px", mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Degree"
                name="degree"
                value={formData.education.degree}
                onChange={handleEducationChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Branch/Stream"
                name="branch"
                value={formData.education.branch}
                onChange={handleEducationChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Institution Name"
                name="institution"
                value={formData.education.institution}
                onChange={handleEducationChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Start Date (MM/YYYY)"
                name="startDate"
                value={formData.education.startDate}
                onChange={handleEducationChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="End Date (MM/YYYY)"
                name="endDate"
                value={formData.education.endDate}
                onChange={handleEducationChange}
                placeholder="Leave empty if currently studying"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="CGPA / Percentage"
                name="grade"
                value={formData.education.grade}
                onChange={handleEducationChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Projects
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {formData.projects.map((project, index) => (
          <Paper
            key={index}
            sx={{
              mb: 2,
              p: 2,
              position: "relative",
              border: "1px solid #eee",
              borderRadius: "8px",
            }}
          >
            <Box sx={{ position: "absolute", right: 8, top: 8, display: "flex", gap: 1 }}>
              <IconButton onClick={() => editProject(index)} size="small">
                <EditIcon fontSize="small" color="primary" />
              </IconButton>
              <IconButton onClick={() => removeProject(index)} size="small">
                <DeleteOutlineIcon fontSize="small" color="error" />
              </IconButton>
            </Box>
            <Typography variant="subtitle1">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {project.description}
            </Typography>
            <Typography variant="body2">
              <strong>Technologies:</strong> {project.technologies}
            </Typography>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                sx={{ mt: 1, display: "inline-flex", alignItems: "center" }}
              >
                <LinkIcon fontSize="small" sx={{ mr: 0.5 }} /> View Project
              </Link>
            )}
          </Paper>
        ))}

        <Paper sx={{ p: 3, border: "1px dashed #ddd", mb: 4, borderRadius: "8px" }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {editingProjectIndex !== null ? "Edit Project" : "Add New Project"}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Title"
                name="title"
                value={tempProject.title}
                onChange={handleProjectChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={tempProject.description}
                onChange={handleProjectChange}
                multiline
                rows={3}
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    alignItems: "flex-start",
                  },
                  "& textarea": {
                    overflow: "hidden !important",
                    width: "100% !important",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Technologies Used"
                name="technologies"
                value={tempProject.technologies}
                onChange={handleProjectChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="GitHub/Live Link"
                name="link"
                value={tempProject.link}
                onChange={handleProjectChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineIcon />}
                onClick={addProject}
                size="small"
                fullWidth
                disabled={!tempProject.title.trim()}
                sx={{
                  color: "black !important",
                  borderColor: "black",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                {editingProjectIndex !== null ? "Update Project" : "Add Project"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Achievements & Awards
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {formData.achievements.map((achievement, index) => (
          <Paper
            key={index}
            sx={{
              mb: 2,
              p: 2,
              position: "relative",
              border: "1px solid #eee",
              borderRadius: "8px",
            }}
          >
            <Box sx={{ position: "absolute", right: 8, top: 8, display: "flex", gap: 1 }}>
              <IconButton onClick={() => editAchievement(index)} size="small">
                <EditIcon fontSize="small" color="primary" />
              </IconButton>
              <IconButton onClick={() => removeAchievement(index)} size="small">
                <DeleteOutlineIcon fontSize="small" color="error" />
              </IconButton>
            </Box>
            <Typography variant="subtitle1">{achievement.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {achievement.issuer} • {achievement.year}
            </Typography>
            <Typography variant="body2">{achievement.description}</Typography>
          </Paper>
        ))}

        <Paper sx={{ p: 3, border: "1px dashed #ddd", borderRadius: "8px" }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {editingAchievementIndex !== null ? "Edit Achievement" : "Add New Achievement"}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={tempAchievement.title}
                onChange={handleAchievementChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Issuing Body"
                name="issuer"
                value={tempAchievement.issuer}
                onChange={handleAchievementChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Year"
                name="year"
                value={tempAchievement.year}
                onChange={handleAchievementChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={tempAchievement.description}
                onChange={handleAchievementChange}
                multiline
                rows={3}
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    alignItems: "flex-start",
                  },
                  "& textarea": {
                    overflow: "hidden !important",
                    width: "100% !important",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineIcon />}
                onClick={addAchievement}
                size="small"
                fullWidth
                disabled={!tempAchievement.title.trim()}
                sx={{
                  color: "black !important",
                  borderColor: "black",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                {editingAchievementIndex !== null ? "Update Achievement" : "Add Achievement"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </DialogContent>
  <DialogActions
    sx={{
      px: 3,
      py: 2,
    }}
  >
    <Button
      onClick={handleCloseForm}
      sx={{
        borderRadius: "6px",
        px: 3,
        textTransform: "none",
        fontWeight: 500,
      }}
    >
      Cancel
    </Button>
    <Button
      onClick={handleSubmit}
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "6px",
        px: 3,
        textTransform: "none",
        fontWeight: 500,
      }}
    >
      {editMode ? "Update Profile" : "Create Profile"}
    </Button>
  </DialogActions>
</Dialog>
        
      </Box>
    </DashboardLayout>
  );
};

export default UserProfile;
