/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================
*/

import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Opportunities() {
  // Sample opportunities data
  const allOpportunities = [
    {
      id: 1,
      position: "Data Scientist",
      company: "Tech Analytics Inc.",
      location: "Bangalore, India",
      stipend: 45000,
      posted: new Date('2023-06-28'),
      description: "Work with large datasets to derive business insights using machine learning models.",
      isSaved: false
    },
    {
      id: 2,
      position: "Software Developer",
      company: "CodeCraft Solutions",
      location: "Remote",
      stipend: 35000,
      posted: new Date('2023-06-21'),
      description: "Develop and maintain web applications using React and Node.js.",
      isSaved: true
    },
    {
      id: 3,
      position: "Cloud Engineer",
      company: "CloudNova Technologies",
      location: "Hyderabad, India",
      stipend: 50000,
      posted: new Date('2023-06-07'),
      description: "Design and implement cloud infrastructure solutions on AWS.",
      isSaved: false
    },
    {
      id: 4,
      position: "UX Designer",
      company: "DesignHub",
      location: "Mumbai, India",
      stipend: 40000,
      posted: new Date('2023-05-28'),
      description: "Create user-centered designs for digital products.",
      isSaved: false
    },
    {
      id: 5,
      position: "DevOps Engineer",
      company: "DevOps Pro",
      location: "Pune, India",
      stipend: 55000,
      posted: new Date('2023-06-14'),
      description: "Implement CI/CD pipelines and automate deployment processes.",
      isSaved: true
    },
    {
      id: 6,
      position: "Data Analyst",
      company: "Data Insights Ltd.",
      location: "Delhi, India",
      stipend: 38000,
      posted: new Date('2023-06-23'),
      description: "Analyze business data and generate reports for stakeholders.",
      isSaved: false
    },
  ];

  // State management
  const [opportunities, setOpportunities] = useState(allOpportunities);
  const [displayedOpportunities, setDisplayedOpportunities] = useState(allOpportunities);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('recommended');
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    location: [],
    stipend: "",
  });
  const [sortOption, setSortOption] = useState('');

  // Filter options
  const locationOptions = [
    "Bangalore, India",
    "Remote",
    "Hyderabad, India",
    "Mumbai, India",
    "Pune, India",
    "Delhi, India"
  ];

  const stipendOptions = [
    { label: "Under ₹30,000", value: "under30", min: 0, max: 30000 },
    { label: "₹30,000 - ₹40,000", value: "30to40", min: 30000, max: 40000 },
    { label: "₹40,000 - ₹50,000", value: "40to50", min: 40000, max: 50000 },
    { label: "Over ₹50,000", value: "over50", min: 50000, max: Infinity },
  ];

  const sortOptions = [
    { label: "Newest First", value: "newest" },
    { label: "Oldest First", value: "oldest" },
    { label: "Highest Stipend", value: "highStipend" },
    { label: "Lowest Stipend", value: "lowStipend" },
  ];

  // Filter and sort functions
  const applyFiltersAndSort = () => {
    let filtered = [...opportunities];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(opp => 
        opp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply location filter
    if (filters.location.length > 0) {
      filtered = filtered.filter(opp => filters.location.includes(opp.location));
    }
    
    // Apply stipend filter
    if (filters.stipend) {
      const range = stipendOptions.find(opt => opt.value === filters.stipend);
      filtered = filtered.filter(opp => opp.stipend >= range.min && opp.stipend <= range.max);
    }
    
    // Apply saved filter
    if (activeTab === 'saved') {
      filtered = filtered.filter(opp => opp.isSaved);
    }
    
    // Apply sorting
    switch(sortOption) {
      case 'newest':
        filtered.sort((a, b) => b.posted - a.posted);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.posted - b.posted);
        break;
      case 'highStipend':
        filtered.sort((a, b) => b.stipend - a.stipend);
        break;
      case 'lowStipend':
        filtered.sort((a, b) => a.stipend - b.stipend);
        break;
      default:
        // Default sorting (newest first)
        filtered.sort((a, b) => b.posted - a.posted);
    }
    
    setDisplayedOpportunities(filtered);
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle save status
  const toggleSave = (id) => {
    setOpportunities(prev => 
      prev.map(opp => 
        opp.id === id ? { ...opp, isSaved: !opp.isSaved } : opp
      )
    );
  };

  // Handle menu opens/closes
  const handleSortMenuOpen = (event) => setSortAnchorEl(event.currentTarget);
  const handleFilterMenuOpen = (event) => setFilterAnchorEl(event.currentTarget);
  const handleMenuClose = () => {
    setSortAnchorEl(null);
    setFilterAnchorEl(null);
  };

  // Handle sort selection
  const handleSortSelect = (value) => {
    setSortOption(value);
    handleMenuClose();
  };

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      location: [],
      stipend: "",
    });
    setSortOption('');
  };

  // Format date to "X days/weeks ago"
  const formatDate = (date) => {
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 14) return "1 week ago";
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 60) return "1 month ago";
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  // Format stipend
  const formatStipend = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}/month`;
  };

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    applyFiltersAndSort();
  }, [searchTerm, filters, activeTab, sortOption, opportunities]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <ArgonTypography variant="h2">Opportunities</ArgonTypography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                placeholder="Search positions..."
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>search</Icon>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </ArgonBox>

        <ArgonBox mb={3}>
          <Grid container spacing={2}>
            <Grid item>
              <ArgonButton 
                variant={activeTab === 'recommended' ? "gradient" : "outlined"} 
                color={activeTab === 'recommended' ? "info" : "dark"} 
                size="small"
                onClick={() => setActiveTab('recommended')}
              >
                Recommended
              </ArgonButton>
            </Grid>
            <Grid item>
              <ArgonButton 
                variant={activeTab === 'saved' ? "gradient" : "outlined"} 
                color={activeTab === 'saved' ? "info" : "dark"} 
                size="small"
                onClick={() => setActiveTab('saved')}
              >
                Saved
              </ArgonButton>
            </Grid>
            <Grid item>
              <ArgonButton 
                variant="outlined" 
                color="dark" 
                size="small" 
                startIcon={<Icon>filter_list</Icon>}
                onClick={handleFilterMenuOpen}
              >
                Filter
              </ArgonButton>
              <Menu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    width: '300px',
                    padding: '16px'
                  },
                }}
              >
                <ArgonTypography variant="h6" gutterBottom>Location</ArgonTypography>
                {locationOptions.map((location) => (
                  <MenuItem key={location} dense>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={filters.location.includes(location)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleFilterChange('location', [...filters.location, location]);
                            } else {
                              handleFilterChange('location', filters.location.filter(loc => loc !== location));
                            }
                          }}
                        />
                      }
                      label={location}
                    />
                  </MenuItem>
                ))}
                
                <ArgonTypography variant="h6" gutterBottom mt={2}>Stipend Range</ArgonTypography>
                {stipendOptions.map((option) => (
                  <MenuItem key={option.value} dense>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={filters.stipend === option.value}
                          onChange={() => handleFilterChange('stipend', option.value)}
                        />
                      }
                      label={option.label}
                    />
                  </MenuItem>
                ))}
                
                <ArgonBox display="flex" justifyContent="space-between" mt={2}>
                  <Button onClick={clearFilters}>Clear All</Button>
                  <Button variant="contained" color="info" onClick={handleMenuClose}>
                    Apply
                  </Button>
                </ArgonBox>
              </Menu>
            </Grid>
            <Grid item>
              <ArgonButton 
                variant="outlined" 
                color="dark" 
                size="small" 
                startIcon={<Icon>sort</Icon>}
                onClick={handleSortMenuOpen}
              >
                Sort
              </ArgonButton>
              <Menu
                anchorEl={sortAnchorEl}
                open={Boolean(sortAnchorEl)}
                onClose={handleMenuClose}
              >
                {sortOptions.map((option) => (
                  <MenuItem 
                    key={option.value} 
                    onClick={() => handleSortSelect(option.value)}
                    selected={sortOption === option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </ArgonBox>

        <Divider light />

        <ArgonBox mt={3}>
          <Grid container spacing={3}>
            {displayedOpportunities.length > 0 ? (
              displayedOpportunities.map((opportunity) => (
                <Grid item xs={12} md={6} lg={4} key={opportunity.id}>
                  <Card sx={{ height: "100%" }}>
                    <ArgonBox p={3}>
                      <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start">
                        <ArgonTypography variant="h5" fontWeight="bold" gutterBottom>
                          {opportunity.position}
                        </ArgonTypography>
                        <Icon 
                          color={opportunity.isSaved ? "warning" : "secondary"} 
                          sx={{ cursor: "pointer" }}
                          onClick={() => toggleSave(opportunity.id)}
                        >
                          {opportunity.isSaved ? "bookmark" : "bookmark_border"}
                        </Icon>
                      </ArgonBox>

                      <ArgonBox display="flex" alignItems="center" mb={1}>
                        <Icon sx={{ color: "text", mr: 1 }}>business</Icon>
                        <ArgonTypography variant="body2" color="text">
                          {opportunity.company}
                        </ArgonTypography>
                      </ArgonBox>

                      <ArgonBox display="flex" alignItems="center" mb={1}>
                        <Icon sx={{ color: "text", mr: 1 }}>location_on</Icon>
                        <ArgonTypography variant="body2" color="text">
                          {opportunity.location}
                        </ArgonTypography>
                      </ArgonBox>

                      <ArgonBox display="flex" alignItems="center" mb={2}>
                        <Icon sx={{ color: "text", mr: 1 }}>payments</Icon>
                        <ArgonTypography variant="body2" fontWeight="medium">
                          {formatStipend(opportunity.stipend)}
                        </ArgonTypography>
                      </ArgonBox>

                      <ArgonTypography variant="body2" color="text" mb={3}>
                        {opportunity.description}
                      </ArgonTypography>

                      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="caption" color="text">
                          Posted: {formatDate(opportunity.posted)}
                        </ArgonTypography>
                        <Button variant="contained" color="info" size="small">
                          Apply Now
                        </Button>
                      </ArgonBox>
                    </ArgonBox>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <ArgonBox textAlign="center" py={6}>
                  <Icon sx={{ fontSize: 60, color: "text.secondary" }}>search_off</Icon>
                  <ArgonTypography variant="h5" mt={2} mb={1}>
                    No opportunities found
                  </ArgonTypography>
                  <ArgonTypography variant="body2" color="text.secondary">
                    Try adjusting your search or filter criteria
                  </ArgonTypography>
                </ArgonBox>
              </Grid>
            )}
          </Grid>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Opportunities;