// /* eslint-disable no-unused-vars */
// /**
// =========================================================
// * Argon Dashboard 2 MUI - v3.0.1
// =========================================================
// */

// import { useState, useEffect } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Tooltip from "@mui/material/Tooltip";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonButton from "components/ArgonButton";

// // Argon Dashboard 2 MUI example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// function Opportunities() {
//   // Sample opportunities data
//   const allOpportunities = [
//     {
//       id: 1,
//       position: "Data Scientist",
//       company: "Tech Analytics Inc.",
//       location: "Bangalore, India",
//       stipend: 45000,
//       posted: new Date('2023-06-28'),
//       description: "Work with large datasets to derive business insights using machine learning models.",
//       isSaved: false,
//       isApplied: false,
//       status: null,
//       applyLink: "https://example.com/apply/1"
//     },
//     {
//       id: 2,
//       position: "Software Developer",
//       company: "CodeCraft Solutions",
//       location: "Remote",
//       stipend: 35000,
//       posted: new Date('2023-06-21'),
//       description: "Develop and maintain web applications using React and Node.js.",
//       isSaved: true,
//       isApplied: true,
//       status: "Approved",
//       applyLink: "https://example.com/apply/2"
//     },
//     {
//       id: 3,
//       position: "Cloud Engineer",
//       company: "CloudNova Technologies",
//       location: "Hyderabad, India",
//       stipend: 50000,
//       posted: new Date('2023-06-07'),
//       description: "Design and implement cloud infrastructure solutions on AWS.",
//       isSaved: false,
//       isApplied: true,
//       status: "Pending",
//       applyLink: "https://example.com/apply/3"
//     },
//     {
//       id: 4,
//       position: "UX Designer",
//       company: "DesignHub",
//       location: "Mumbai, India",
//       stipend: 40000,
//       posted: new Date('2023-05-28'),
//       description: "Create user-centered designs for digital products.",
//       isSaved: false,
//       isApplied: false,
//       status: null,
//       applyLink: "https://example.com/apply/4"
//     },
//     {
//       id: 5,
//       position: "DevOps Engineer",
//       company: "DevOps Pro",
//       location: "Pune, India",
//       stipend: 55000,
//       posted: new Date('2023-06-14'),
//       description: "Implement CI/CD pipelines and automate deployment processes.",
//       isSaved: true,
//       isApplied: true,
//       status: "Rejected",
//       applyLink: "https://example.com/apply/5"
//     },
//     {
//       id: 6,
//       position: "Data Analyst",
//       company: "Data Insights Ltd.",
//       location: "Delhi, India",
//       stipend: 38000,
//       posted: new Date('2023-06-23'),
//       description: "Analyze business data and generate reports for stakeholders.",
//       isSaved: false,
//       isApplied: true,
//       status: "Pending",
//       applyLink: "https://example.com/apply/6"
//     },
//   ];

//   // State management
//   const [opportunities, setOpportunities] = useState(allOpportunities);
//   const [displayedOpportunities, setDisplayedOpportunities] = useState(allOpportunities);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('recommended');
//   const [sortAnchorEl, setSortAnchorEl] = useState(null);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [filters, setFilters] = useState({
//     location: [],
//     stipend: "",
//   });
//   const [sortOption, setSortOption] = useState('');

//   // Filter options
//   const locationOptions = [
//     "Bangalore, India",
//     "Remote",
//     "Hyderabad, India",
//     "Mumbai, India",
//     "Pune, India",
//     "Delhi, India"
//   ];

//   const stipendOptions = [
//     { label: "Under ₹30,000", value: "under30", min: 0, max: 30000 },
//     { label: "₹30,000 - ₹40,000", value: "30to40", min: 30000, max: 40000 },
//     { label: "₹40,000 - ₹50,000", value: "40to50", min: 40000, max: 50000 },
//     { label: "Over ₹50,000", value: "over50", min: 50000, max: Infinity },
//   ];

//   const sortOptions = [
//     { label: "Newest First", value: "newest" },
//     { label: "Oldest First", value: "oldest" },
//     { label: "Highest Stipend", value: "highStipend" },
//     { label: "Lowest Stipend", value: "lowStipend" },
//   ];

//   // Get status color
//   const getStatusColor = (status) => {
//     switch(status) {
//       case "Approved": return "success";
//       case "Pending": return "warning";
//       case "Rejected": return "error";
//       default: return "info";
//     }
//   };

//   // Filter and sort functions
//   const applyFiltersAndSort = () => {
//     let filtered = [...opportunities];
    
//     // Apply search filter
//     if (searchTerm) {
//       filtered = filtered.filter(opp => 
//         opp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         opp.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Apply location filter
//     if (filters.location.length > 0) {
//       filtered = filtered.filter(opp => filters.location.includes(opp.location));
//     }
    
//     // Apply stipend filter
//     if (filters.stipend) {
//       const range = stipendOptions.find(opt => opt.value === filters.stipend);
//       filtered = filtered.filter(opp => opp.stipend >= range.min && opp.stipend <= range.max);
//     }
    
//     // Apply tab filter
//     if (activeTab === 'saved') {
//       filtered = filtered.filter(opp => opp.isSaved);
//     } else if (activeTab === 'applied') {
//       filtered = filtered.filter(opp => opp.isApplied);
//     }
    
//     // Apply sorting
//     switch(sortOption) {
//       case 'newest':
//         filtered.sort((a, b) => b.posted - a.posted);
//         break;
//       case 'oldest':
//         filtered.sort((a, b) => a.posted - b.posted);
//         break;
//       case 'highStipend':
//         filtered.sort((a, b) => b.stipend - a.stipend);
//         break;
//       case 'lowStipend':
//         filtered.sort((a, b) => a.stipend - b.stipend);
//         break;
//       default:
//         // Default sorting (newest first)
//         filtered.sort((a, b) => b.posted - a.posted);
//     }
    
//     setDisplayedOpportunities(filtered);
//   };

//   // Handle search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Toggle save status
//   const toggleSave = (id) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, isSaved: !opp.isSaved } : opp
//       )
//     );
//   };

//   // Toggle applied status
//   const toggleApplied = (id) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, isApplied: !opp.isApplied, status: !opp.isApplied ? null : opp.status } : opp
//       )
//     );
//   };

//   // Handle external application
//   const handleApplyNow = (link) => {
//     window.open(link, '_blank');
//   };

//   // Handle status change
//   const handleStatusChange = (id, newStatus) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, status: newStatus } : opp
//       )
//     );
//   };

//   // Handle menu opens/closes
//   const handleSortMenuOpen = (event) => setSortAnchorEl(event.currentTarget);
//   const handleFilterMenuOpen = (event) => setFilterAnchorEl(event.currentTarget);
//   const handleMenuClose = () => {
//     setSortAnchorEl(null);
//     setFilterAnchorEl(null);
//   };

//   // Handle sort selection
//   const handleSortSelect = (value) => {
//     setSortOption(value);
//     handleMenuClose();
//   };

//   // Handle filter change
//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: value
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       location: [],
//       stipend: "",
//     });
//     setSortOption('');
//   };

//   // Format date to "X days/weeks ago"
//   const formatDate = (date) => {
//     const now = new Date();
//     const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
//     if (diffInDays === 0) return "Today";
//     if (diffInDays === 1) return "Yesterday";
//     if (diffInDays < 7) return `${diffInDays} days ago`;
//     if (diffInDays < 14) return "1 week ago";
//     if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
//     if (diffInDays < 60) return "1 month ago";
//     return `${Math.floor(diffInDays / 30)} months ago`;
//   };

//   // Format stipend
//   const formatStipend = (amount) => {
//     return `₹${amount.toLocaleString('en-IN')}/month`;
//   };

//   // Apply filters and sorting whenever dependencies change
//   useEffect(() => {
//     applyFiltersAndSort();
//   }, [searchTerm, filters, activeTab, sortOption, opportunities]);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <ArgonBox py={3}>
//         <ArgonBox mb={3}>
//           <Grid container spacing={3} alignItems="center">
//             <Grid item xs={12} lg={6}>
//               <ArgonTypography variant="h2">Opportunities</ArgonTypography>
//             </Grid>
//             <Grid item xs={12} lg={6}>
//               <TextField
//                 fullWidth
//                 placeholder="Search positions..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Icon>search</Icon>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </ArgonBox>

//         <ArgonBox mb={3}>
//           <Grid container spacing={2}>
//             <Grid item>
//               <ArgonButton 
//                 variant={activeTab === 'recommended' ? "gradient" : "outlined"} 
//                 color={activeTab === 'recommended' ? "info" : "dark"} 
//                 size="small"
//                 onClick={() => setActiveTab('recommended')}
//               >
//                 Recommended
//               </ArgonButton>
//             </Grid>
//             <Grid item>
//               <ArgonButton 
//                 variant={activeTab === 'saved' ? "gradient" : "outlined"} 
//                 color={activeTab === 'saved' ? "info" : "dark"} 
//                 size="small"
//                 onClick={() => setActiveTab('saved')}
//               >
//                 Saved
//               </ArgonButton>
//             </Grid>
//             <Grid item>
//               <ArgonButton 
//                 variant={activeTab === 'applied' ? "gradient" : "outlined"} 
//                 color={activeTab === 'applied' ? "info" : "dark"} 
//                 size="small"
//                 onClick={() => setActiveTab('applied')}
//               >
//                 Applied
//               </ArgonButton>
//             </Grid>
//             <Grid item>
//               <ArgonButton 
//                 variant="outlined" 
//                 color="dark" 
//                 size="small" 
//                 startIcon={<Icon>filter_list</Icon>}
//                 onClick={handleFilterMenuOpen}
//               >
//                 Filter
//               </ArgonButton>
//               <Menu
//                 anchorEl={filterAnchorEl}
//                 open={Boolean(filterAnchorEl)}
//                 onClose={handleMenuClose}
//                 PaperProps={{
//                   style: {
//                     width: '300px',
//                     padding: '16px'
//                   },
//                 }}
//               >
//                 <ArgonTypography variant="h6" gutterBottom>Location</ArgonTypography>
//                 {locationOptions.map((location) => (
//                   <MenuItem key={location} dense>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={filters.location.includes(location)}
//                           onChange={(e) => {
//                             if (e.target.checked) {
//                               handleFilterChange('location', [...filters.location, location]);
//                             } else {
//                               handleFilterChange('location', filters.location.filter(loc => loc !== location));
//                             }
//                           }}
//                         />
//                       }
//                       label={location}
//                     />
//                   </MenuItem>
//                 ))}
                
//                 <ArgonTypography variant="h6" gutterBottom mt={2}>Stipend Range</ArgonTypography>
//                 {stipendOptions.map((option) => (
//                   <MenuItem key={option.value} dense>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={filters.stipend === option.value}
//                           onChange={() => handleFilterChange('stipend', option.value)}
//                         />
//                       }
//                       label={option.label}
//                     />
//                   </MenuItem>
//                 ))}
                
//                 <ArgonBox display="flex" justifyContent="space-between" mt={2}>
//                   <Button onClick={clearFilters}>Clear All</Button>
//                   <Button variant="contained" color="info" onClick={handleMenuClose}>
//                     Apply
//                   </Button>
//                 </ArgonBox>
//               </Menu>
//             </Grid>
//             <Grid item>
//               <ArgonButton 
//                 variant="outlined" 
//                 color="dark" 
//                 size="small" 
//                 startIcon={<Icon>sort</Icon>}
//                 onClick={handleSortMenuOpen}
//               >
//                 Sort
//               </ArgonButton>
//               <Menu
//                 anchorEl={sortAnchorEl}
//                 open={Boolean(sortAnchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 {sortOptions.map((option) => (
//                   <MenuItem 
//                     key={option.value} 
//                     onClick={() => handleSortSelect(option.value)}
//                     selected={sortOption === option.value}
//                   >
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Grid>
//           </Grid>
//         </ArgonBox>

//         <Divider light />

//         <ArgonBox mt={3}>
//           <Grid container spacing={3}>
//             {displayedOpportunities.length > 0 ? (
//               displayedOpportunities.map((opportunity) => (
//                 <Grid item xs={12} md={6} lg={4} key={opportunity.id}>
//                   <Card sx={{ height: "100%" }}>
//                     <ArgonBox p={3}>
//                       <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start">
//                         <ArgonTypography variant="h5" fontWeight="bold" gutterBottom>
//                           {opportunity.position}
//                         </ArgonTypography>
//                         <ArgonBox display="flex" alignItems="center">
//                           <Tooltip title={opportunity.isApplied ? "Applied" : "Not Applied"} arrow>
//                             <Icon 
//                               color={opportunity.isApplied ? "success" : "secondary"} 
//                               sx={{ cursor: "pointer", mr: 1 }}
//                               onClick={() => toggleApplied(opportunity.id)}
//                             >
//                               {opportunity.isApplied ? "check_circle" : "radio_button_unchecked"}
//                             </Icon>
//                           </Tooltip>
//                           <Tooltip title={opportunity.isSaved ? "Saved" : "Save"} arrow>
//                             <Icon 
//                               color={opportunity.isSaved ? "warning" : "secondary"} 
//                               sx={{ cursor: "pointer" }}
//                               onClick={() => toggleSave(opportunity.id)}
//                             >
//                               {opportunity.isSaved ? "bookmark" : "bookmark_border"}
//                             </Icon>
//                           </Tooltip>
//                         </ArgonBox>
//                       </ArgonBox>

//                       <ArgonBox display="flex" alignItems="center" mb={1}>
//                         <Icon sx={{ color: "text", mr: 1 }}>business</Icon>
//                         <ArgonTypography variant="body2" color="text">
//                           {opportunity.company}
//                         </ArgonTypography>
//                       </ArgonBox>

//                       <ArgonBox display="flex" alignItems="center" mb={1}>
//                         <Icon sx={{ color: "text", mr: 1 }}>location_on</Icon>
//                         <ArgonTypography variant="body2" color="text">
//                           {opportunity.location}
//                         </ArgonTypography>
//                       </ArgonBox>

//                       <ArgonBox display="flex" alignItems="center" mb={2}>
//                         <Icon sx={{ color: "text", mr: 1 }}>payments</Icon>
//                         <ArgonTypography variant="body2" fontWeight="medium">
//                           {formatStipend(opportunity.stipend)}
//                         </ArgonTypography>
//                       </ArgonBox>

//                       <ArgonTypography variant="body2" color="text" mb={3}>
//                         {opportunity.description}
//                       </ArgonTypography>

//                       <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
//                         <ArgonTypography variant="caption" color="text">
//                           Posted: {formatDate(opportunity.posted)}
//                         </ArgonTypography>
//                         {activeTab === 'applied' && opportunity.isApplied ? (
//                           <FormControl size="small" sx={{ minWidth: 120 }}>
//                             <InputLabel>Status</InputLabel>
//                             <Select
//                               value={opportunity.status || "Pending"}
//                               label="Status"
//                               onChange={(e) => handleStatusChange(opportunity.id, e.target.value)}
//                               sx={{
//                                 backgroundColor: `${getStatusColor(opportunity.status)}.light`,
//                                 color: `${getStatusColor(opportunity.status)}.dark`,
//                                 '& .MuiSelect-icon': {
//                                   color: `${getStatusColor(opportunity.status)}.dark`
//                                 }
//                               }}
//                             >
//                               <MenuItem value="Approved">Approved</MenuItem>
//                               <MenuItem value="Pending">Pending</MenuItem>
//                               <MenuItem value="Rejected">Rejected</MenuItem>
//                             </Select>
//                           </FormControl>
//                         ) : (
//                           <Button 
//                             variant="contained" 
//                             color="info" 
//                             size="small"
//                             onClick={() => handleApplyNow(opportunity.applyLink)}
//                           >
//                             Apply Now
//                           </Button>
//                         )}
//                       </ArgonBox>
//                     </ArgonBox>
//                   </Card>
//                 </Grid>
//               ))
//             ) : (
//               <Grid item xs={12}>
//                 <ArgonBox textAlign="center" py={6}>
//                   <Icon sx={{ fontSize: 60, color: "text.secondary" }}>search_off</Icon>
//                   <ArgonTypography variant="h5" mt={2} mb={1}>
//                     No opportunities found
//                   </ArgonTypography>
//                   <ArgonTypography variant="body2" color="text.secondary">
//                     Try adjusting your search or filter criteria
//                   </ArgonTypography>
//                 </ArgonBox>
//               </Grid>
//             )}
//           </Grid>
//         </ArgonBox>
//       </ArgonBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Opportunities;




































// import { useState, useEffect } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Tooltip from "@mui/material/Tooltip";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import Chip from "@mui/material/Chip";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonButton from "components/ArgonButton";

// // Argon Dashboard 2 MUI example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// function Opportunities() {
//   // Sample opportunities data
//   const allOpportunities = [
//     {
//       id: 1,
//       position: "Data Scientist",
//       company: "Tech Analytics Inc.",
//       location: "Bangalore, India",
//       stipend: 45000,
//       posted: new Date('2023-06-28'),
//       description: "Work with large datasets to derive business insights using machine learning models. Responsibilities include data cleaning, model development, and presenting findings to stakeholders. Requires strong Python skills and experience with TensorFlow or PyTorch.",
//       isSaved: false,
//       isApplied: false,
//       status: null,
//       applyLink: "https://example.com/apply/1",
//       type: "On-site"
//     },
//     {
//       id: 2,
//       position: "Software Developer",
//       company: "CodeCraft Solutions",
//       location: "Remote",
//       stipend: 35000,
//       posted: new Date('2023-06-21'),
//       description: "Develop and maintain web applications using React and Node.js. Collaborate with designers and product managers to implement new features. Write clean, maintainable code and participate in code reviews. Experience with TypeScript is a plus.",
//       isSaved: true,
//       isApplied: true,
//       status: "Approved",
//       applyLink: "https://example.com/apply/2",
//       type: "Remote"
//     },
//     {
//       id: 3,
//       position: "Cloud Engineer",
//       company: "CloudNova Technologies",
//       location: "Hyderabad, India",
//       stipend: 50000,
//       posted: new Date('2023-06-07'),
//       description: "Design and implement cloud infrastructure solutions on AWS. Automate deployment processes and optimize cloud costs. Troubleshoot production issues and ensure high availability. AWS certification preferred.",
//       isSaved: false,
//       isApplied: true,
//       status: "Pending",
//       applyLink: "https://example.com/apply/3",
//       type: "On-site"
//     },
//     {
//       id: 4,
//       position: "UX Designer",
//       company: "DesignHub",
//       location: "Mumbai, India",
//       stipend: 40000,
//       posted: new Date('2023-05-28'),
//       description: "Create user-centered designs for digital products. Conduct user research and usability testing. Create wireframes, prototypes, and high-fidelity designs. Work closely with developers to ensure design implementation matches specifications.",
//       isSaved: false,
//       isApplied: false,
//       status: null,
//       applyLink: "https://example.com/apply/4",
//       type: "On-site"
//     },
//     {
//       id: 5,
//       position: "DevOps Engineer",
//       company: "DevOps Pro",
//       location: "Pune, India",
//       stipend: 55000,
//       posted: new Date('2023-06-14'),
//       description: "Implement CI/CD pipelines and automate deployment processes. Manage Kubernetes clusters and monitor system performance. Work with development teams to improve deployment processes. Experience with Terraform and Ansible required.",
//       isSaved: true,
//       isApplied: true,
//       status: "Rejected",
//       applyLink: "https://example.com/apply/5",
//       type: "On-site"
//     },
//     {
//       id: 6,
//       position: "Data Analyst",
//       company: "Data Insights Ltd.",
//       location: "Delhi, India",
//       stipend: 38000,
//       posted: new Date('2023-06-23'),
//       description: "Analyze business data and generate reports for stakeholders. Create dashboards using Tableau or Power BI. Identify trends and provide actionable insights. Strong SQL skills and experience with statistical analysis required.",
//       isSaved: false,
//       isApplied: true,
//       status: "Pending",
//       applyLink: "https://example.com/apply/6",
//       type: "On-site"
//     },
//   ];

//   // State management
//   const [opportunities, setOpportunities] = useState(allOpportunities);
//   const [displayedOpportunities, setDisplayedOpportunities] = useState(allOpportunities);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('recommended');
//   const [sortAnchorEl, setSortAnchorEl] = useState(null);
//   const [filters, setFilters] = useState({
//     location: [],
//     stipend: [0, 100000],
//     type: []
//   });
//   const [sortOption, setSortOption] = useState('newest');
//   const [expandedAccordion, setExpandedAccordion] = useState(null);

//   // Filter options
//   const locationOptions = [
//     "Bangalore, India",
//     "Remote",
//     "Hyderabad, India",
//     "Mumbai, India",
//     "Pune, India",
//     "Delhi, India"
//   ];

//   const typeOptions = ["Remote", "On-site"];

//   const sortOptions = [
//     { label: "Newest First", value: "newest" },
//     { label: "Oldest First", value: "oldest" },
//     { label: "Highest Stipend", value: "highStipend" },
//     { label: "Lowest Stipend", value: "lowStipend" },
//   ];

//   // Get status color
//   const getStatusColor = (status) => {
//     switch(status) {
//       case "Approved": return "success";
//       case "Pending": return "warning";
//       case "Rejected": return "error";
//       default: return "info";
//     }
//   };

//   // Filter and sort functions
//   const applyFiltersAndSort = () => {
//     let filtered = [...opportunities];
    
//     // Apply search filter
//     if (searchTerm) {
//       filtered = filtered.filter(opp => 
//         opp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         opp.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Apply location filter
//     if (filters.location.length > 0) {
//       filtered = filtered.filter(opp => filters.location.includes(opp.location));
//     }
    
//     // Apply type filter
//     if (filters.type.length > 0) {
//       filtered = filtered.filter(opp => filters.type.includes(opp.type));
//     }
    
//     // Apply stipend filter
//     filtered = filtered.filter(opp => 
//       opp.stipend >= filters.stipend[0] && opp.stipend <= filters.stipend[1]
//     );
    
//     // Apply tab filter
//     if (activeTab === 'saved') {
//       filtered = filtered.filter(opp => opp.isSaved);
//     } else if (activeTab === 'applied') {
//       filtered = filtered.filter(opp => opp.isApplied);
//     }
    
//     // Apply sorting
//     switch(sortOption) {
//       case 'newest':
//         filtered.sort((a, b) => b.posted - a.posted);
//         break;
//       case 'oldest':
//         filtered.sort((a, b) => a.posted - b.posted);
//         break;
//       case 'highStipend':
//         filtered.sort((a, b) => b.stipend - a.stipend);
//         break;
//       case 'lowStipend':
//         filtered.sort((a, b) => a.stipend - b.stipend);
//         break;
//       default:
//         // Default sorting (newest first)
//         filtered.sort((a, b) => b.posted - a.posted);
//     }
    
//     setDisplayedOpportunities(filtered);
//   };

//   // Handle search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Toggle save status
//   const toggleSave = (id) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, isSaved: !opp.isSaved } : opp
//       )
//     );
//   };

//   // Toggle applied status
//   const toggleApplied = (id) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, isApplied: !opp.isApplied, status: !opp.isApplied ? null : opp.status } : opp
//       )
//     );
//   };

//   // Handle external application
//   const handleApplyNow = (link) => {
//     window.open(link, '_blank');
//   };

//   // Handle status change
//   const handleStatusChange = (id, newStatus) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, status: newStatus } : opp
//       )
//     );
//   };

//   // Handle menu opens/closes
//   const handleSortMenuOpen = (event) => setSortAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setSortAnchorEl(null);

//   // Handle sort selection
//   const handleSortSelect = (value) => {
//     setSortOption(value);
//     handleMenuClose();
//   };

//   // Handle filter change
//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: value
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       location: [],
//       stipend: [0, 100000],
//       type: []
//     });
//   };

//   // Format date to "X days/weeks ago"
//   const formatDate = (date) => {
//     const now = new Date();
//     const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
//     if (diffInDays === 0) return "Today";
//     if (diffInDays === 1) return "Yesterday";
//     if (diffInDays < 7) return `${diffInDays} days ago`;
//     if (diffInDays < 14) return "1 week ago";
//     if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
//     if (diffInDays < 60) return "1 month ago";
//     return `${Math.floor(diffInDays / 30)} months ago`;
//   };

//   // Format stipend
//   const formatStipend = (amount) => {
//     return `₹${amount.toLocaleString('en-IN')}/month`;
//   };

//   // Handle accordion toggle
//   const handleAccordionToggle = (panel) => (event, isExpanded) => {
//     setExpandedAccordion(isExpanded ? panel : null);
//   };

//   // Apply filters and sorting whenever dependencies change
//   useEffect(() => {
//     applyFiltersAndSort();
//   }, [searchTerm, filters, activeTab, sortOption, opportunities]);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <ArgonBox py={3}>
//         <Grid container spacing={3}>
//           {/* Main content area */}
//           <Grid item xs={12} md={8} lg={9}>
//             <ArgonBox mb={3}>
//               <Grid container spacing={3} alignItems="center">
//                 <Grid item xs={12}>
//                   <ArgonTypography variant="h2">Opportunities</ArgonTypography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     placeholder="Search positions..."
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Icon>search</Icon>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Grid container spacing={2}>
//                     <Grid item>
//                       <ArgonButton 
//                         variant={activeTab === 'recommended' ? "gradient" : "outlined"} 
//                         color={activeTab === 'recommended' ? "info" : "dark"} 
//                         size="small"
//                         onClick={() => setActiveTab('recommended')}
//                       >
//                         Recommended
//                       </ArgonButton>
//                     </Grid>
//                     <Grid item>
//                       <ArgonButton 
//                         variant={activeTab === 'saved' ? "gradient" : "outlined"} 
//                         color={activeTab === 'saved' ? "info" : "dark"} 
//                         size="small"
//                         onClick={() => setActiveTab('saved')}
//                       >
//                         Saved
//                       </ArgonButton>
//                     </Grid>
//                     <Grid item>
//                       <ArgonButton 
//                         variant={activeTab === 'applied' ? "gradient" : "outlined"} 
//                         color={activeTab === 'applied' ? "info" : "dark"} 
//                         size="small"
//                         onClick={() => setActiveTab('applied')}
//                       >
//                         Applied
//                       </ArgonButton>
//                     </Grid>
//                     <Grid item>
//                       <ArgonButton 
//                         variant="outlined" 
//                         color="dark" 
//                         size="small" 
//                         startIcon={<Icon>sort</Icon>}
//                         onClick={handleSortMenuOpen}
//                       >
//                         Sort
//                       </ArgonButton>
//                       <Menu
//                         anchorEl={sortAnchorEl}
//                         open={Boolean(sortAnchorEl)}
//                         onClose={handleMenuClose}
//                       >
//                         {sortOptions.map((option) => (
//                           <MenuItem 
//                             key={option.value} 
//                             onClick={() => handleSortSelect(option.value)}
//                             selected={sortOption === option.value}
//                           >
//                             {option.label}
//                           </MenuItem>
//                         ))}
//                       </Menu>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </ArgonBox>

//             <Divider light />

//             <ArgonBox mt={3}>
//               <Grid container spacing={3}>
//                 {displayedOpportunities.length > 0 ? (
//                   displayedOpportunities.map((opportunity) => (
//                     <Grid item xs={12} md={6} lg={4} key={opportunity.id}>
//                       <Card sx={{ 
//                         height: "100%",
//                         transition: "transform 0.3s ease-in-out",
//                         '&:hover': {
//                           transform: "translateY(-5px)",
//                           boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
//                         }
//                       }}>
//                         <ArgonBox p={3}>
//                           <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start">
//                             <ArgonTypography variant="h5" fontWeight="bold" gutterBottom>
//                               {opportunity.position}
//                             </ArgonTypography>
//                             <ArgonBox display="flex" alignItems="center">
//                               <Tooltip title={opportunity.isApplied ? "Applied" : "Not Applied"} arrow>
//                                 <Icon 
//                                   color={opportunity.isApplied ? "success" : "secondary"} 
//                                   sx={{ cursor: "pointer", mr: 1 }}
//                                   onClick={() => toggleApplied(opportunity.id)}
//                                 >
//                                   {opportunity.isApplied ? "check_circle" : "radio_button_unchecked"}
//                                 </Icon>
//                               </Tooltip>
//                               <Tooltip title={opportunity.isSaved ? "Saved" : "Save"} arrow>
//                                 <Icon 
//                                   color={opportunity.isSaved ? "warning" : "secondary"} 
//                                   sx={{ cursor: "pointer" }}
//                                   onClick={() => toggleSave(opportunity.id)}
//                                 >
//                                   {opportunity.isSaved ? "bookmark" : "bookmark_border"}
//                                 </Icon>
//                               </Tooltip>
//                             </ArgonBox>
//                           </ArgonBox>

//                           <ArgonBox display="flex" alignItems="center" mb={1}>
//                             <Icon sx={{ color: "primary.main", mr: 1 }}>business</Icon>
//                             <ArgonTypography variant="body2" color="primary" fontWeight="medium">
//                               {opportunity.company}
//                             </ArgonTypography>
//                           </ArgonBox>

//                           <ArgonBox display="flex" alignItems="center" mb={1}>
//                             <Icon sx={{ color: "text", mr: 1 }}>location_on</Icon>
//                             <ArgonTypography variant="body2" color="text">
//                               {opportunity.location}
//                             </ArgonTypography>
//                           </ArgonBox>

//                           <ArgonBox display="flex" alignItems="center" mb={2}>
//                             <Icon sx={{ color: "success.main", mr: 1 }}>payments</Icon>
//                             <ArgonTypography variant="body2" fontWeight="medium" color="success.main">
//                               {formatStipend(opportunity.stipend)}
//                             </ArgonTypography>
//                           </ArgonBox>

//                           <Chip 
//                             label={opportunity.type} 
//                             size="small" 
//                             color={opportunity.type === "Remote" ? "info" : "secondary"}
//                             sx={{ mb: 2 }}
//                           />

//                           {expandedAccordion === opportunity.id ? (
//                             <ArgonTypography variant="body2" color="text" mb={3}>
//                               {opportunity.description}
//                             </ArgonTypography>
//                           ) : (
//                             <ArgonTypography variant="body2" color="text" mb={3}>
//                               {opportunity.description.substring(0, 100)}...
//                             </ArgonTypography>
//                           )}

//                           <Button 
//                             variant="text" 
//                             color="info"
//                             size="small"
//                             onClick={() => handleAccordionToggle(opportunity.id)(null, expandedAccordion !== opportunity.id)}
//                             sx={{ p: 0, mb: 2 }}
//                           >
//                             {expandedAccordion === opportunity.id ? 'Show Less' : 'Read More'}
//                           </Button>

//                           <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
//                             <ArgonTypography variant="caption" color="text">
//                               Posted: {formatDate(opportunity.posted)}
//                             </ArgonTypography>
//                             {activeTab === 'applied' && opportunity.isApplied ? (
//                               <FormControl size="small" sx={{ minWidth: 120 }}>
//                                 <InputLabel>Status</InputLabel>
//                                 <Select
//                                   value={opportunity.status || "Pending"}
//                                   label="Status"
//                                   onChange={(e) => handleStatusChange(opportunity.id, e.target.value)}
//                                   sx={{
//                                     backgroundColor: `${getStatusColor(opportunity.status)}.light`,
//                                     color: `${getStatusColor(opportunity.status)}.dark`,
//                                     '& .MuiSelect-icon': {
//                                       color: `${getStatusColor(opportunity.status)}.dark`
//                                     }
//                                   }}
//                                 >
//                                   <MenuItem value="Approved">Approved</MenuItem>
//                                   <MenuItem value="Pending">Pending</MenuItem>
//                                   <MenuItem value="Rejected">Rejected</MenuItem>
//                                 </Select>
//                               </FormControl>
//                             ) : (
//                              <Button 
//   variant="contained" 
//   size="medium"
//   onClick={() => handleApplyNow(opportunity.applyLink)}
//   sx={{
//     backgroundColor: '#256cd6ff',
//     color: '#fff',
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     fontSize: '0.7rem',        // smaller text
//     padding: '4px 10px',       // tighter padding
//     minWidth: 'unset',         // remove default min width
//     lineHeight: 1.2,           // compact height
//     '&:hover': {
//       backgroundColor: '#3f68a5ff',
//       boxShadow: "0 4px 6px rgba(0,0,0,0.15)"
//     }
//   }}
// >
//   Apply Now
// </Button>


//                             )}
//                           </ArgonBox>
//                         </ArgonBox>
//                       </Card>
//                     </Grid>
//                   ))
//                 ) : (
//                   <Grid item xs={12}>
//                     <ArgonBox textAlign="center" py={6}>
//                       <Icon sx={{ fontSize: 60, color: "text.secondary" }}>search_off</Icon>
//                       <ArgonTypography variant="h5" mt={2} mb={1}>
//                         No opportunities found
//                       </ArgonTypography>
//                       <ArgonTypography variant="body2" color="text.secondary">
//                         Try adjusting your search or filter criteria
//                       </ArgonTypography>
//                     </ArgonBox>
//                   </Grid>
//                 )}
//               </Grid>
//             </ArgonBox>
//           </Grid>

//           {/* Filters sidebar */}
//          <Grid item xs={12} md={4} lg={3}>
//   <div
//     style={{
//       position: 'sticky',
//       top: '340px',
//       height: 'calc(100vh - 40px)',
//       overflowY: 'auto',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     }}
//   >
//     <ArgonBox p={3}>
//       <ArgonTypography variant="h5" gutterBottom>
//         Filters
//       </ArgonTypography>
// <Divider sx={{ my: 2 }} />
//       {/* Type Filter */}
//       <ArgonBox mb={3}>
//         <ArgonTypography variant="h6" gutterBottom>
//           Job Type
//         </ArgonTypography>
//         {typeOptions.map((type) => (
//           <FormControlLabel
//             key={type}
//             control={
//               <Checkbox
//                 checked={filters.type.includes(type)}
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     handleFilterChange('type', [...filters.type, type]);
//                   } else {
//                     handleFilterChange(
//                       'type',
//                       filters.type.filter((t) => t !== type)
//                     );
//                   }
//                 }}
//                 size="small"
//               />
//             }
//             label={type}
//             sx={{ display: 'block', ml: 0 }}
//           />
//         ))}
//       </ArgonBox>

//       <Divider sx={{ my: 2 }} />

//       {/* Location Filter */}
//       <ArgonBox mb={3}>
//         <ArgonTypography variant="h6" gutterBottom>
//           Location
//         </ArgonTypography>
//         {locationOptions.map((location) => (
//           <FormControlLabel
//             key={location}
//             control={
//               <Checkbox
//                 checked={filters.location.includes(location)}
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     handleFilterChange('location', [
//                       ...filters.location,
//                       location,
//                     ]);
//                   } else {
//                     handleFilterChange(
//                       'location',
//                       filters.location.filter((loc) => loc !== location)
//                     );
//                   }
//                 }}
//                 size="small"
//               />
//             }
//             label={location}
//             sx={{ display: 'block', ml: 0 }}
//           />
//         ))}
//       </ArgonBox>

//       <Divider sx={{ my: 2 }} />

//       {/* Salary Filter */}
//       <ArgonBox mb={3}>
//         <ArgonTypography variant="h6" gutterBottom>
//           Stipend (in Thousands)
//         </ArgonTypography>
//         <Slider
//           value={[
//             filters.stipend[0] / 1000,
//             filters.stipend[1] / 1000,
//           ]}
//           onChange={(e, newValue) =>
//             handleFilterChange('stipend', [
//               newValue[0] * 1000,
//               newValue[1] * 1000,
//             ])
//           }
//           valueLabelDisplay="auto"
//           min={0}
//           max={100}
//           step={1}
//           marks={[
//             { value: 0, label: '0' },
//             { value: 20, label: '2' },
//             { value: 40, label: '4' },
//             { value: 60, label: '6' },
//             { value: 80, label: '8' },
//             { value: 100, label: '10' },
//           ]}
//         />
//       </ArgonBox>

//       <Divider sx={{ my: 2 }} />

//       <Button
//         variant="outlined"
//         fullWidth
//         onClick={clearFilters}
//         startIcon={<Icon>clear</Icon>}
//         sx={{color:'black !important'}}
//       >
//         Clear All Filters
//       </Button>
//     </ArgonBox>
//   </div>
// </Grid>

//         </Grid>
//       </ArgonBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Opportunities;













































// import { useState, useEffect } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Tooltip from "@mui/material/Tooltip";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import Chip from "@mui/material/Chip";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonButton from "components/ArgonButton";

// // Argon Dashboard 2 MUI example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// function Opportunities() {
//   // Sample opportunities data
//   const allOpportunities = [
//     {
//       id: 1,
//       position: "Data Scientist",
//       company: "Tech Analytics Inc.",
//       location: "Bangalore, India",
//       stipend: 45000,
//       posted: new Date('2023-06-28'),
//       description: "Work with large datasets to derive business insights using machine learning models. Responsibilities include data cleaning, model development, and presenting findings to stakeholders. Requires strong Python skills and experience with TensorFlow or PyTorch.",
//       isSaved: false,
//       isApplied: false,
//       status: null,
//       applyLink: "https://example.com/apply/1",
//       type: "On-site"
//     },
//     {
//       id: 2,
//       position: "Software Developer",
//       company: "CodeCraft Solutions",
//       location: "Remote",
//       stipend: 35000,
//       posted: new Date('2023-06-21'),
//       description: "Develop and maintain web applications using React and Node.js. Collaborate with designers and product managers to implement new features. Write clean, maintainable code and participate in code reviews. Experience with TypeScript is a plus.",
//       isSaved: true,
//       isApplied: true,
//       status: "Approved",
//       applyLink: "https://example.com/apply/2",
//       type: "Remote"
//     },
//     {
//       id: 3,
//       position: "Cloud Engineer",
//       company: "CloudNova Technologies",
//       location: "Hyderabad, India",
//       stipend: 50000,
//       posted: new Date('2023-06-07'),
//       description: "Design and implement cloud infrastructure solutions on AWS. Automate deployment processes and optimize cloud costs. Troubleshoot production issues and ensure high availability. AWS certification preferred.",
//       isSaved: false,
//       isApplied: true,
//       status: "Pending",
//       applyLink: "https://example.com/apply/3",
//       type: "On-site"
//     },
//     {
//       id: 4,
//       position: "UX Designer",
//       company: "DesignHub",
//       location: "Mumbai, India",
//       stipend: 40000,
//       posted: new Date('2023-05-28'),
//       description: "Create user-centered designs for digital products. Conduct user research and usability testing. Create wireframes, prototypes, and high-fidelity designs. Work closely with developers to ensure design implementation matches specifications.",
//       isSaved: false,
//       isApplied: false,
//       status: null,
//       applyLink: "https://example.com/apply/4",
//       type: "On-site"
//     },
//     {
//       id: 5,
//       position: "DevOps Engineer",
//       company: "DevOps Pro",
//       location: "Pune, India",
//       stipend: 55000,
//       posted: new Date('2023-06-14'),
//       description: "Implement CI/CD pipelines and automate deployment processes. Manage Kubernetes clusters and monitor system performance. Work with development teams to improve deployment processes. Experience with Terraform and Ansible required.",
//       isSaved: true,
//       isApplied: true,
//       status: "Rejected",
//       applyLink: "https://example.com/apply/5",
//       type: "On-site"
//     },
//     {
//       id: 6,
//       position: "Data Analyst",
//       company: "Data Insights Ltd.",
//       location: "Delhi, India",
//       stipend: 38000,
//       posted: new Date('2023-06-23'),
//       description: "Analyze business data and generate reports for stakeholders. Create dashboards using Tableau or Power BI. Identify trends and provide actionable insights. Strong SQL skills and experience with statistical analysis required.",
//       isSaved: false,
//       isApplied: true,
//       status: "Pending",
//       applyLink: "https://example.com/apply/6",
//       type: "On-site"
//     },
//   ];

//   // State management
//   const [opportunities, setOpportunities] = useState(allOpportunities);
//   const [displayedOpportunities, setDisplayedOpportunities] = useState(allOpportunities);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('recommended');
//   const [sortAnchorEl, setSortAnchorEl] = useState(null);
//   const [filters, setFilters] = useState({
//     location: [],
//     stipend: [0, 100000],
//     type: []
//   });
//   const [sortOption, setSortOption] = useState('newest');
//   const [expandedAccordion, setExpandedAccordion] = useState(null);

//   // Filter options
//   const locationOptions = [
//     "Bangalore, India",
//     "Remote",
//     "Hyderabad, India",
//     "Mumbai, India",
//     "Pune, India",
//     "Delhi, India"
//   ];

//   const typeOptions = ["Remote", "On-site"];

//   const sortOptions = [
//     { label: "Newest First", value: "newest" },
//     { label: "Oldest First", value: "oldest" },
//     { label: "Highest Stipend", value: "highStipend" },
//     { label: "Lowest Stipend", value: "lowStipend" },
//   ];

//   // Get status color
//   const getStatusColor = (status) => {
//     switch(status) {
//       case "Approved": return "success";
//       case "Pending": return "warning";
//       case "Rejected": return "error";
//       default: return "info";
//     }
//   };

//   // Filter and sort functions
//   const applyFiltersAndSort = () => {
//     let filtered = [...opportunities];
    
//     // Apply search filter
//     if (searchTerm) {
//       filtered = filtered.filter(opp => 
//         opp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         opp.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Apply location filter
//     if (filters.location.length > 0) {
//       filtered = filtered.filter(opp => filters.location.includes(opp.location));
//     }
    
//     // Apply type filter
//     if (filters.type.length > 0) {
//       filtered = filtered.filter(opp => filters.type.includes(opp.type));
//     }
    
//     // Apply stipend filter
//     filtered = filtered.filter(opp => 
//       opp.stipend >= filters.stipend[0] && opp.stipend <= filters.stipend[1]
//     );
    
//     // Apply tab filter
//     if (activeTab === 'saved') {
//       filtered = filtered.filter(opp => opp.isSaved);
//     } else if (activeTab === 'applied') {
//       filtered = filtered.filter(opp => opp.isApplied);
//     }
    
//     // Apply sorting
//     switch(sortOption) {
//       case 'newest':
//         filtered.sort((a, b) => b.posted - a.posted);
//         break;
//       case 'oldest':
//         filtered.sort((a, b) => a.posted - b.posted);
//         break;
//       case 'highStipend':
//         filtered.sort((a, b) => b.stipend - a.stipend);
//         break;
//       case 'lowStipend':
//         filtered.sort((a, b) => a.stipend - b.stipend);
//         break;
//       default:
//         // Default sorting (newest first)
//         filtered.sort((a, b) => b.posted - a.posted);
//     }
    
//     setDisplayedOpportunities(filtered);
//   };

//   // Handle search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Toggle save status
//   const toggleSave = (id) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, isSaved: !opp.isSaved } : opp
//       )
//     );
//   };

//   // Toggle applied status
//   const toggleApplied = (id) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, isApplied: !opp.isApplied, status: !opp.isApplied ? null : opp.status } : opp
//       )
//     );
//   };

//   // Handle external application
//   const handleApplyNow = (link) => {
//     window.open(link, '_blank');
//   };

//   // Handle status change
//   const handleStatusChange = (id, newStatus) => {
//     setOpportunities(prev => 
//       prev.map(opp => 
//         opp.id === id ? { ...opp, status: newStatus } : opp
//       )
//     );
//   };

//   // Handle menu opens/closes
//   const handleSortMenuOpen = (event) => setSortAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setSortAnchorEl(null);

//   // Handle sort selection
//   const handleSortSelect = (value) => {
//     setSortOption(value);
//     handleMenuClose();
//   };

//   // Handle filter change
//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: value
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       location: [],
//       stipend: [0, 100000],
//       type: []
//     });
//   };

//   // Format date to "X days/weeks ago"
//   const formatDate = (date) => {
//     const now = new Date();
//     const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
//     if (diffInDays === 0) return "Today";
//     if (diffInDays === 1) return "Yesterday";
//     if (diffInDays < 7) return `${diffInDays} days ago`;
//     if (diffInDays < 14) return "1 week ago";
//     if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
//     if (diffInDays < 60) return "1 month ago";
//     return `${Math.floor(diffInDays / 30)} months ago`;
//   };

//   // Format stipend
//   const formatStipend = (amount) => {
//     return `₹${amount.toLocaleString('en-IN')}/month`;
//   };

//   // Handle accordion toggle
//   const handleAccordionToggle = (panel) => (event, isExpanded) => {
//     setExpandedAccordion(isExpanded ? panel : null);
//   };

//   // Apply filters and sorting whenever dependencies change
//   useEffect(() => {
//     applyFiltersAndSort();
//   }, [searchTerm, filters, activeTab, sortOption, opportunities]);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <ArgonBox py={3}>
//         <Grid container spacing={3}>
//           {/* Main content area */}
//           <Grid item xs={12} md={8} lg={9}>
//             <ArgonBox mb={3}>
//               <Grid container spacing={3} alignItems="center">
//                 <Grid item xs={12}>
//                   <ArgonTypography variant="h2">Opportunities</ArgonTypography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     placeholder="Search positions..."
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Icon>search</Icon>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Grid container spacing={2}>
//                     <Grid item>
//                       <ArgonButton 
//                         variant={activeTab === 'recommended' ? "gradient" : "outlined"} 
//                         color={activeTab === 'recommended' ? "info" : "dark"} 
//                         size="small"
//                         onClick={() => setActiveTab('recommended')}
//                       >
//                         Recommended
//                       </ArgonButton>
//                     </Grid>
//                     <Grid item>
//                       <ArgonButton 
//                         variant={activeTab === 'saved' ? "gradient" : "outlined"} 
//                         color={activeTab === 'saved' ? "info" : "dark"} 
//                         size="small"
//                         onClick={() => setActiveTab('saved')}
//                       >
//                         Saved
//                       </ArgonButton>
//                     </Grid>
//                     <Grid item>
//                       <ArgonButton 
//                         variant={activeTab === 'applied' ? "gradient" : "outlined"} 
//                         color={activeTab === 'applied' ? "info" : "dark"} 
//                         size="small"
//                         onClick={() => setActiveTab('applied')}
//                       >
//                         Applied
//                       </ArgonButton>
//                     </Grid>
//                     <Grid item>
//                       <ArgonButton 
//                         variant="outlined" 
//                         color="dark" 
//                         size="small" 
//                         startIcon={<Icon>sort</Icon>}
//                         onClick={handleSortMenuOpen}
//                       >
//                         Sort
//                       </ArgonButton>
//                       <Menu
//                         anchorEl={sortAnchorEl}
//                         open={Boolean(sortAnchorEl)}
//                         onClose={handleMenuClose}
//                       >
//                         {sortOptions.map((option) => (
//                           <MenuItem 
//                             key={option.value} 
//                             onClick={() => handleSortSelect(option.value)}
//                             selected={sortOption === option.value}
//                           >
//                             {option.label}
//                           </MenuItem>
//                         ))}
//                       </Menu>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </ArgonBox>

//             <Divider light />

//             <ArgonBox mt={3}>
//               <Grid container spacing={3}>
//                 {displayedOpportunities.length > 0 ? (
//                   displayedOpportunities.map((opportunity) => (
//                     <Grid item xs={12} key={opportunity.id}>
//                       <Card sx={{ 
//                         transition: "transform 0.3s ease-in-out",
//                         '&:hover': {
//                           transform: "translateY(-5px)",
//                           boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
//                         }
//                       }}>
//                         <ArgonBox p={3}>
//                           <Grid container spacing={2}>
//                             <Grid item xs={12} md={3}>
//                               <ArgonBox display="flex" flexDirection="column" height="100%">
//                                 <ArgonTypography variant="h5" fontWeight="bold" gutterBottom>
//                                   {opportunity.position}
//                                 </ArgonTypography>
//                                 <ArgonBox display="flex" alignItems="center" mb={1}>
//                                   <Icon sx={{ color: "primary.main", mr: 1 }}>business</Icon>
//                                   <ArgonTypography variant="body2" color="primary" fontWeight="medium">
//                                     {opportunity.company}
//                                   </ArgonTypography>
//                                 </ArgonBox>
//                                 <ArgonBox display="flex" alignItems="center" mb={1}>
//                                   <Icon sx={{ color: "text", mr: 1 }}>location_on</Icon>
//                                   <ArgonTypography variant="body2" color="text">
//                                     {opportunity.location}
//                                   </ArgonTypography>
//                                 </ArgonBox>
//                                 <ArgonBox display="flex" alignItems="center" mb={2}>
//                                   <Icon sx={{ color: "success.main", mr: 1 }}>payments</Icon>
//                                   <ArgonTypography variant="body2" fontWeight="medium" color="success.main">
//                                     {formatStipend(opportunity.stipend)}
//                                   </ArgonTypography>
//                                 </ArgonBox>
//                                 <Chip 
//                                   label={opportunity.type} 
//                                   size="small" 
//                                   color={opportunity.type === "Remote" ? "info" : "secondary"}
//                                   sx={{ mb: 2 }}
//                                 />
//                               </ArgonBox>
//                             </Grid>
//                             <Grid item xs={12} md={6}>
//                               <ArgonBox height="100%" display="flex" flexDirection="column">
//                                 {expandedAccordion === opportunity.id ? (
//                                   <ArgonTypography variant="body2" color="text" mb={3}>
//                                     {opportunity.description}
//                                   </ArgonTypography>
//                                 ) : (
//                                   <ArgonTypography variant="body2" color="text" mb={3}>
//                                     {opportunity.description.substring(0, 200)}...
//                                   </ArgonTypography>
//                                 )}
//                                 <Button 
//                                   variant="text" 
//                                   color="info"
//                                   size="small"
//                                   onClick={() => handleAccordionToggle(opportunity.id)(null, expandedAccordion !== opportunity.id)}
//                                   sx={{ p: 0, mb: 2, alignSelf: 'flex-start' }}
//                                 >
//                                   {expandedAccordion === opportunity.id ? 'Show Less' : 'Read More'}
//                                 </Button>
//                               </ArgonBox>
//                             </Grid>
//                             <Grid item xs={12} md={3}>
//                               <ArgonBox display="flex" flexDirection="column" height="100%" justifyContent="space-between" alignItems="flex-end">
//                                 <ArgonBox display="flex" alignItems="center">
//                                   <Tooltip title={opportunity.isApplied ? "Applied" : "Not Applied"} arrow>
//                                     <Icon 
//                                       color={opportunity.isApplied ? "success" : "secondary"} 
//                                       sx={{ cursor: "pointer", mr: 1 }}
//                                       onClick={() => toggleApplied(opportunity.id)}
//                                     >
//                                       {opportunity.isApplied ? "check_circle" : "radio_button_unchecked"}
//                                     </Icon>
//                                   </Tooltip>
//                                   <Tooltip title={opportunity.isSaved ? "Saved" : "Save"} arrow>
//                                     <Icon 
//                                       color={opportunity.isSaved ? "warning" : "secondary"} 
//                                       sx={{ cursor: "pointer" }}
//                                       onClick={() => toggleSave(opportunity.id)}
//                                     >
//                                       {opportunity.isSaved ? "bookmark" : "bookmark_border"}
//                                     </Icon>
//                                   </Tooltip>
//                                 </ArgonBox>
//                                 <ArgonTypography variant="caption" color="text" mb={1}>
//                                   Posted: {formatDate(opportunity.posted)}
//                                 </ArgonTypography>
//                                 {activeTab === 'applied' && opportunity.isApplied ? (
//                                   <FormControl size="small" sx={{ minWidth: 120 }}>
//                                     <InputLabel>Status</InputLabel>
//                                     <Select
//                                       value={opportunity.status || "Pending"}
//                                       label="Status"
//                                       onChange={(e) => handleStatusChange(opportunity.id, e.target.value)}
//                                       sx={{
//                                         backgroundColor: `${getStatusColor(opportunity.status)}.light`,
//                                         color: `${getStatusColor(opportunity.status)}.dark`,
//                                         '& .MuiSelect-icon': {
//                                           color: `${getStatusColor(opportunity.status)}.dark`
//                                         }
//                                       }}
//                                     >
//                                       <MenuItem value="Approved">Approved</MenuItem>
//                                       <MenuItem value="Pending">Pending</MenuItem>
//                                       <MenuItem value="Rejected">Rejected</MenuItem>
//                                     </Select>
//                                   </FormControl>
//                                 ) : (
//                                   <Button 
//                                     variant="contained" 
//                                     size="small"
//                                     onClick={() => handleApplyNow(opportunity.applyLink)}
//                                     sx={{
//                                       backgroundColor: '#256cd6ff',
//                                       color: '#fff',
//                                       boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//                                       '&:hover': {
//                                         backgroundColor: '#3f68a5ff',
//                                         boxShadow: "0 6px 8px rgba(0,0,0,0.15)"
//                                       }
//                                     }}
//                                   >
//                                     Apply Now
//                                   </Button>
//                                 )}
//                               </ArgonBox>
//                             </Grid>
//                           </Grid>
//                         </ArgonBox>
//                       </Card>
//                     </Grid>
//                   ))
//                 ) : (
//                   <Grid item xs={12}>
//                     <ArgonBox textAlign="center" py={6}>
//                       <Icon sx={{ fontSize: 60, color: "text.secondary" }}>search_off</Icon>
//                       <ArgonTypography variant="h5" mt={2} mb={1}>
//                         No opportunities found
//                       </ArgonTypography>
//                       <ArgonTypography variant="body2" color="text.secondary">
//                         Try adjusting your search or filter criteria
//                       </ArgonTypography>
//                     </ArgonBox>
//                   </Grid>
//                 )}
//               </Grid>
//             </ArgonBox>
//           </Grid>

//           {/* Filters sidebar */}
//           <Grid item xs={12} md={4} lg={3}>
//             <div
//               style={{
//                 position: 'sticky',
//                 top: '340px',
//                 height: 'calc(100vh - 40px)',
//                 overflowY: 'auto',
//                 backgroundColor: '#fff',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <ArgonBox p={3}>
//                 <ArgonTypography variant="h5" gutterBottom>
//                   Filters
//                 </ArgonTypography>
//                 <Divider sx={{ my: 2 }} />

//                 {/* Type Filter */}
//                 <ArgonBox mb={3}>
//                   <ArgonTypography variant="h6" gutterBottom>
//                     Job Type
//                   </ArgonTypography>
//                   {typeOptions.map((type) => (
//                     <FormControlLabel
//                       key={type}
//                       control={
//                         <Checkbox
//                           checked={filters.type.includes(type)}
//                           onChange={(e) => {
//                             if (e.target.checked) {
//                               handleFilterChange('type', [...filters.type, type]);
//                             } else {
//                               handleFilterChange('type', filters.type.filter(t => t !== type));
//                             }
//                           }}
//                           size="small"
//                         />
//                       }
//                       label={type}
//                       sx={{ display: 'block', ml: 0 }}
//                     />
//                   ))}
//                 </ArgonBox>

//                 <Divider sx={{ my: 2 }} />

//                 {/* Location Filter */}
//                 <ArgonBox mb={3}>
//                   <ArgonTypography variant="h6" gutterBottom>
//                     Location
//                   </ArgonTypography>
//                   {locationOptions.map((location) => (
//                     <FormControlLabel
//                       key={location}
//                       control={
//                         <Checkbox
//                           checked={filters.location.includes(location)}
//                           onChange={(e) => {
//                             if (e.target.checked) {
//                               handleFilterChange('location', [...filters.location, location]);
//                             } else {
//                               handleFilterChange('location', filters.location.filter(loc => loc !== location));
//                             }
//                           }}
//                           size="small"
//                         />
//                       }
//                       label={location}
//                       sx={{ display: 'block', ml: 0 }}
//                     />
//                   ))}
//                 </ArgonBox>

//                 <Divider sx={{ my: 2 }} />

//                 {/* Salary Filter */}
//                 <ArgonBox mb={3}>
//                   <ArgonTypography variant="h6" gutterBottom>
//                     Stipend (in Thousands)
//                   </ArgonTypography>
//                   <Slider
//                     value={[filters.stipend[0]/1000, filters.stipend[1]/1000]}
//                     onChange={(e, newValue) => handleFilterChange('stipend', [newValue[0]*1000, newValue[1]*1000])}
//                     valueLabelDisplay="auto"
//                     min={0}
//                     max={100}
//                     step={1}
//                     marks={[
//                       { value: 0, label: '0' },
//                       { value: 20, label: '2' },
//                       { value: 40, label: '4' },
//                       { value: 60, label: '6' },
//                       { value: 80, label: '8' },
//                       { value: 100, label: '10' },
//                     ]}
//                   />
//                 </ArgonBox>

//                 <Divider sx={{ my: 2 }} />

//                 <Button
//                   variant="outlined"
//                   fullWidth
//                   onClick={clearFilters}
//                   startIcon={<Icon>clear</Icon>}
//                   sx={{color:'black !important'}}
//                 >
//                   Clear All Filters
//                 </Button>
//               </ArgonBox>
//             </div>
//           </Grid>
//         </Grid>
//       </ArgonBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Opportunities;



































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
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';


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
      description: "Work with large datasets to derive business insights using machine learning models. Responsibilities include data cleaning, model development, and presenting findings to stakeholders. Requires strong Python skills and experience with TensorFlow or PyTorch.",
      isSaved: false,
      isApplied: false,
      status: null,
      applyLink: "https://example.com/apply/1",
      type: "On-site"
    },
    {
      id: 2,
      position: "Software Developer",
      company: "CodeCraft Solutions",
      location: "Remote",
      stipend: 35000,
      posted: new Date('2023-06-21'),
      description: "Develop and maintain web applications using React and Node.js. Collaborate with designers and product managers to implement new features. Write clean, maintainable code and participate in code reviews. Experience with TypeScript is a plus.",
      isSaved: true,
      isApplied: true,
      status: "Approved",
      applyLink: "https://example.com/apply/2",
      type: "Remote"
    },
    {
      id: 3,
      position: "Cloud Engineer",
      company: "CloudNova Technologies",
      location: "Hyderabad, India",
      stipend: 50000,
      posted: new Date('2023-06-07'),
      description: "Design and implement cloud infrastructure solutions on AWS. Automate deployment processes and optimize cloud costs. Troubleshoot production issues and ensure high availability. AWS certification preferred.",
      isSaved: false,
      isApplied: true,
      status: "Pending",
      applyLink: "https://example.com/apply/3",
      type: "On-site"
    },
    {
      id: 4,
      position: "UX Designer",
      company: "DesignHub",
      location: "Mumbai, India",
      stipend: 40000,
      posted: new Date('2023-05-28'),
      description: "Create user-centered designs for digital products. Conduct user research and usability testing. Create wireframes, prototypes, and high-fidelity designs. Work closely with developers to ensure design implementation matches specifications.",
      isSaved: false,
      isApplied: false,
      status: null,
      applyLink: "https://example.com/apply/4",
      type: "On-site"
    },
    {
      id: 5,
      position: "DevOps Engineer",
      company: "DevOps Pro",
      location: "Pune, India",
      stipend: 55000,
      posted: new Date('2023-06-14'),
      description: "Implement CI/CD pipelines and automate deployment processes. Manage Kubernetes clusters and monitor system performance. Work with development teams to improve deployment processes. Experience with Terraform and Ansible required.",
      isSaved: true,
      isApplied: true,
      status: "Rejected",
      applyLink: "https://example.com/apply/5",
      type: "On-site"
    },
    {
      id: 6,
      position: "Data Analyst",
      company: "Data Insights Ltd.",
      location: "Delhi, India",
      stipend: 38000,
      posted: new Date('2023-06-23'),
      description: "Analyze business data and generate reports for stakeholders. Create dashboards using Tableau or Power BI. Identify trends and provide actionable insights. Strong SQL skills and experience with statistical analysis required.",
      isSaved: false,
      isApplied: true,
      status: "Pending",
      applyLink: "https://example.com/apply/6",
      type: "On-site"
    },
  ];

  // State management
  const [opportunities, setOpportunities] = useState(allOpportunities);
  const [displayedOpportunities, setDisplayedOpportunities] = useState(allOpportunities);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('recommended');
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    location: [],
    stipend: [0, 100000],
    type: []
  });
  const [sortOption, setSortOption] = useState('newest');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter options
  const locationOptions = [
    "Bangalore, India",
    "Remote",
    "Hyderabad, India",
    "Mumbai, India",
    "Pune, India",
    "Delhi, India"
  ];

  const typeOptions = ["Remote", "On-site"];

  const sortOptions = [
    { label: "Newest First", value: "newest" },
    { label: "Oldest First", value: "oldest" },
    { label: "Highest Stipend", value: "highStipend" },
    { label: "Lowest Stipend", value: "lowStipend" },
  ];

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case "Approved": return "success";
      case "Pending": return "warning";
      case "Rejected": return "error";
      default: return "info";
    }
  };

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
    
    // Apply type filter
    if (filters.type.length > 0) {
      filtered = filtered.filter(opp => filters.type.includes(opp.type));
    }
    
    // Apply stipend filter
    filtered = filtered.filter(opp => 
      opp.stipend >= filters.stipend[0] && opp.stipend <= filters.stipend[1]
    );
    
    // Apply tab filter
    if (activeTab === 'saved') {
      filtered = filtered.filter(opp => opp.isSaved);
    } else if (activeTab === 'applied') {
      filtered = filtered.filter(opp => opp.isApplied);
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

  // Toggle applied status
  const toggleApplied = (id) => {
    setOpportunities(prev => 
      prev.map(opp => 
        opp.id === id ? { ...opp, isApplied: !opp.isApplied, status: !opp.isApplied ? null : opp.status } : opp
      )
    );
  };

  // Handle external application
  const handleApplyNow = (link) => {
    window.open(link, '_blank');
  };

  // Handle status change
  const handleStatusChange = (id, newStatus) => {
    setOpportunities(prev => 
      prev.map(opp => 
        opp.id === id ? { ...opp, status: newStatus } : opp
      )
    );
  };

  // Handle menu opens/closes
  const handleSortMenuOpen = (event) => setSortAnchorEl(event.currentTarget);
  const handleMenuClose = () => setSortAnchorEl(null);

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
      stipend: [0, 100000],
      type: []
    });
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

  // Handle view details
  const handleViewDetails = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    applyFiltersAndSort();
  }, [searchTerm, filters, activeTab, sortOption, opportunities]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3}>
          {/* Main content area */}
          <Grid item xs={12} md={8} lg={9}>
            <ArgonBox mb={3}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12}>
                  <ArgonTypography variant="h2">Opportunities</ArgonTypography>
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                        variant={activeTab === 'applied' ? "gradient" : "outlined"} 
                        color={activeTab === 'applied' ? "info" : "dark"} 
                        size="small"
                        onClick={() => setActiveTab('applied')}
                      >
                        Applied
                      </ArgonButton>
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
                </Grid>
              </Grid>
            </ArgonBox>

            <Divider light />

            <ArgonBox mt={3}>
              <Grid container spacing={3}>
                {displayedOpportunities.length > 0 ? (
                  displayedOpportunities.map((opportunity) => (
                    <Grid item xs={12} md={6} lg={4} key={opportunity.id}>
                      <Card sx={{ 
                        height: "100%",
                        transition: "transform 0.3s ease-in-out",
                        '&:hover': {
                          transform: "translateY(-5px)",
                          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                        }
                      }}>
                        <ArgonBox p={3}>
                          <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start">
                            <ArgonTypography variant="h5" fontWeight="bold" gutterBottom>
                              {opportunity.position}
                            </ArgonTypography>
                            <ArgonBox display="flex" alignItems="center">
                              <Tooltip title={opportunity.isApplied ? "Applied" : "Not Applied"} arrow>
                                <Icon 
                                  color={opportunity.isApplied ? "success" : "secondary"} 
                                  sx={{ cursor: "pointer", mr: 1 }}
                                  onClick={() => toggleApplied(opportunity.id)}
                                >
                                  {opportunity.isApplied ? "check_circle" : "radio_button_unchecked"}
                                </Icon>
                              </Tooltip>
                              <Tooltip title={opportunity.isSaved ? "Saved" : "Save"} arrow>
                                <Icon 
                                  color={opportunity.isSaved ? "warning" : "secondary"} 
                                  sx={{ cursor: "pointer" }}
                                  onClick={() => toggleSave(opportunity.id)}
                                >
                                  {opportunity.isSaved ? "bookmark" : "bookmark_border"}
                                </Icon>
                              </Tooltip>
                            </ArgonBox>
                          </ArgonBox>

                          <ArgonBox display="flex" alignItems="center" mb={1}>
                            <Icon sx={{ color: "primary.main", mr: 1 }}>business</Icon>
                            <ArgonTypography variant="body2" color="primary" fontWeight="medium">
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
                            <Icon sx={{ color: "success.main", mr: 1 }}>payments</Icon>
                            <ArgonTypography variant="body2" fontWeight="medium" color="success.main">
                              {formatStipend(opportunity.stipend)}
                            </ArgonTypography>
                          </ArgonBox>

                          <Chip 
                            label={opportunity.type} 
                            size="small" 
                            color={opportunity.type === "Remote" ? "info" : "secondary"}
                            sx={{ mb: 2 }}
                          />

                          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                            <ArgonTypography variant="caption" color="text">
                              Posted: {formatDate(opportunity.posted)}
                            </ArgonTypography>
                            <Button 
                              variant="outlined" 
                              size="small"
                              
                              onClick={() => handleViewDetails(opportunity)}
                              sx={{ mr: 1 , color:'black !important'}}
                            >
                              View Details
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
          </Grid>

          {/* Filters sidebar */}
          <Grid item xs={12} md={4} lg={3}>
            <div
              style={{
                position: 'sticky',
                top: '2000px',
                height: 'calc(100vh - 40px)',
                overflowY: 'auto',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <ArgonBox p={3}>
                <ArgonTypography variant="h5" gutterBottom>
                  Filters
                </ArgonTypography>
                <Divider sx={{ my: 2 }} />

                {/* Type Filter */}
                <ArgonBox mb={3}>
                  <ArgonTypography variant="h6" gutterBottom>
                    Job Type
                  </ArgonTypography>
                  {typeOptions.map((type) => (
                    <FormControlLabel
                      key={type}
                      control={
                        <Checkbox
                          checked={filters.type.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleFilterChange('type', [...filters.type, type]);
                            } else {
                              handleFilterChange(
                                'type',
                                filters.type.filter((t) => t !== type)
                              );
                            }
                          }}
                          size="small"
                        />
                      }
                      label={type}
                      sx={{ display: 'block', ml: 0 }}
                    />
                  ))}
                </ArgonBox>

                <Divider sx={{ my: 2 }} />

                {/* Location Filter */}
                <ArgonBox mb={3}>
                  <ArgonTypography variant="h6" gutterBottom>
                    Location
                  </ArgonTypography>
                  {locationOptions.map((location) => (
                    <FormControlLabel
                      key={location}
                      control={
                        <Checkbox
                          checked={filters.location.includes(location)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleFilterChange('location', [
                                ...filters.location,
                                location,
                              ]);
                            } else {
                              handleFilterChange(
                                'location',
                                filters.location.filter((loc) => loc !== location)
                              );
                            }
                          }}
                          size="small"
                        />
                      }
                      label={location}
                      sx={{ display: 'block', ml: 0 }}
                    />
                  ))}
                </ArgonBox>

                <Divider sx={{ my: 2 }} />

                {/* Salary Filter */}
                <ArgonBox mb={3}>
                  <ArgonTypography variant="h6" gutterBottom>
                    Stipend (in Thousands)
                  </ArgonTypography>
                  <Slider
                    value={[
                      filters.stipend[0] / 1000,
                      filters.stipend[1] / 1000,
                    ]}
                    onChange={(e, newValue) =>
                      handleFilterChange('stipend', [
                        newValue[0] * 1000,
                        newValue[1] * 1000,
                      ])
                    }
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={1}
                    marks={[
                      { value: 0, label: '0' },
                      { value: 20, label: '2' },
                      { value: 40, label: '4' },
                      { value: 60, label: '6' },
                      { value: 80, label: '8' },
                      { value: 100, label: '10' },
                    ]}
                  />
                </ArgonBox>

                <Divider sx={{ my: 2 }} />

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={clearFilters}
                  startIcon={<Icon>clear</Icon>}
                  sx={{color:'black !important'}}
                >
                  Clear All Filters
                </Button>
              </ArgonBox>
            </div>
          </Grid>
        </Grid>
      </ArgonBox>

      {/* Opportunity Details Modal */}
     <Modal
  open={modalOpen}
  onClose={handleCloseModal}
  aria-labelledby="opportunity-details-modal"
  aria-describedby="opportunity-details-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '700px', // Slightly narrower
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 3, // Reduced padding
      borderRadius: 2,
      maxHeight: '85vh', // Slightly smaller height
      overflowY: 'auto',
    }}
  >
    {selectedOpportunity && (
      <>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" component="h2">
            {selectedOpportunity.position}
          </Typography>
          <IconButton onClick={handleCloseModal}>
            <Icon>close</Icon>
          </IconButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box mb={2}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {selectedOpportunity.company}
          </Typography>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Icon sx={{ color: "text.secondary", mr: 1, fontSize: 18 }}>location_on</Icon>
            <Typography variant="body2">
              {selectedOpportunity.location}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Icon sx={{ color: "text.secondary", mr: 1, fontSize: 18 }}>payments</Icon>
            <Typography variant="body2" fontWeight="medium">
              {formatStipend(selectedOpportunity.stipend)}
            </Typography>
          </Box>

          <Box mb={1}>
            <Chip
              label={selectedOpportunity.type}
              size="small"
              color={selectedOpportunity.type === "Remote" ? "info" : "secondary"}
            />
          </Box>

          <Typography variant="caption" color="text.secondary">
            Posted: {formatDate(selectedOpportunity.posted)}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box mb={3}>
          <Typography variant="subtitle1" gutterBottom>
            Job Description
          </Typography>
          <Typography variant="body2" paragraph>
            {selectedOpportunity.description}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="outlined"
            color="info"
            onClick={() => {
              handleApplyNow(selectedOpportunity.applyLink);
              handleCloseModal();
            }}
            sx={{ mr: 1, px: 2, py: 0.8, fontSize: '0.8rem', bgcolor: 'primary.light', color: 'black !important' }}

         >
            Apply Now
          </Button>
          <Button
            variant="outlined"
            onClick={handleCloseModal}
            sx={{
              color: 'black !important',
              px: 2,
              py: 0.8,
              fontSize: '0.8rem',
            }}
          >
            Close
          </Button>
        </Box>
      </>
    )}
  </Box>
</Modal>


      <Footer />
    </DashboardLayout>
  );
}

export default Opportunities;