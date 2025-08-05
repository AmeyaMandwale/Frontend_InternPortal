import React, { useState, useRef } from 'react';
import ArgonBox from 'components/ArgonBox';
import ArgonInput from 'components/ArgonInput';
import ArgonTypography from 'components/ArgonTypography';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import html2pdf from 'html2pdf.js';
import { Button, Snackbar, Alert } from '@mui/material';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "Ishwar Modak",
    phone: "7058205362",
    email: "ishwarmodak02@gmail.com",
    github: "github.com/ishwarmodak",
    skills: "",
    experience: "",
    projects: "",
    education: "",
    achievements: "",
  });
const [showSuccess, setShowSuccess] = useState(false);

  const previewRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const downloadPDF = () => {
  const element = previewRef.current;

  element.classList.add("pdf-export");

  const options = {
    margin: 0.5,
    filename: `${formData.name.replace(/\s/g, '_')}_Resume.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf()
    .set(options)
    .from(element)
    .save()
    .then(() => {
      setShowSuccess(true); 
      element.classList.remove("pdf-export");
    });
};


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        p={4}
        gap={4}
        position="relative"
        zIndex={10}
      >
        <ArgonBox
          flex={1}
          p={3}
          borderRadius="lg"
          bgColor="white"
          shadow="md"
          position="relative"
          zIndex={10}
        >
          <ArgonTypography variant="h5" fontWeight="bold" mb={3}>
            Resume Input
          </ArgonTypography>

          {[
            { label: "Full Name", name: "name" },
            { label: "Phone", name: "phone" },
            { label: "Email", name: "email" },
            { label: "GitHub", name: "github" },
            { label: "Technical Skills", name: "skills", multiline: true },
            { label: "Experience", name: "experience", multiline: true },
            { label: "Projects", name: "projects", multiline: true },
            { label: "Education", name: "education", multiline: true },
            { label: "Achievements", name: "achievements", multiline: true },
          ].map(({ label, name, multiline }) => (
            <ArgonBox key={name} mb={2}>
              <ArgonTypography variant="caption" fontWeight="medium" color="text">
                {label}
              </ArgonTypography>
              <ArgonInput
                name={name}
                value={formData[name]}
                onChange={handleChange}
                multiline={multiline}
                rows={multiline ? 3 : undefined}
                fullwidth='true'
              />
            </ArgonBox>
          ))}
        </ArgonBox>

        <ArgonBox
          flex={1}
          p={3}
          borderRadius="lg"
          bgColor="grey-100"
          shadow="md"
          position="relative"
          zIndex={10}
        >
          <ArgonBox display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="contained" color="primary" onClick={downloadPDF}>
              Download PDF
            </Button>
          </ArgonBox>

          <ArgonBox
  ref={previewRef}
  className="pdf-export"
  style={{ fontSize: "14px", padding: "20px", lineHeight: "1.5" }}
>
            <ArgonTypography
              variant="h4"
              fontWeight="bold"
              mb={1}
              sx={{ textAlign: "center" }}
            >
              {formData.name}
            </ArgonTypography>

            <ArgonTypography variant="body2" mb={1} sx={{ textAlign: "center" }}>
              {formData.phone} | {formData.email} | {formData.github}
            </ArgonTypography>

            <ArgonBox mt={3}>
              {[
                { label: "Technical Skills", name: "skills" },
                { label: "Experience", name: "experience" },
                { label: "Projects", name: "projects" },
                { label: "Education", name: "education" },
                { label: "Achievements", name: "achievements" },
              ].map(({ label, name }) => (
                <ArgonBox key={name} mb={3}>
                  <ArgonTypography variant="h6" fontWeight="medium">
                    {label}
                  </ArgonTypography>
                  <hr />
                  <ArgonTypography
                    variant="body2"
                    mt={1}
                    ml={2}
                    sx={{ whiteSpace: 'pre-wrap', fontSize: '12px'}}
                  >
                    {formData[name]}
                  </ArgonTypography>
                </ArgonBox>
              ))}
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
      <Snackbar
  open={showSuccess}
  autoHideDuration={3000}
  onClose={() => setShowSuccess(false)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert onClose={() => setShowSuccess(false)} severity="success" variant="filled">
    Resume downloaded successfully!
  </Alert>
</Snackbar>

    </DashboardLayout>
  );
};

export default ResumeBuilder;
