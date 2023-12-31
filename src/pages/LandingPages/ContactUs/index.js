import React, { useState } from 'react';
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import Slide from '@mui/material/Slide';
import MKAlert from '@mui/material/Alert';
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSuccess(true); // Trigger success message
        setTimeout(() => {
          setSuccess(false); // Hide success message after 3 seconds
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        setError(true); // Set error state
        setTimeout(() => {
          setError(false); // Hide error message after 3 seconds
        }, 3000);
      });
  };

  const handleCopyEmail = () => {
    const email = 'pravaskumar45@gmail.com';
    copyToClipboard(email);
  };
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center" display="flex" width="full" justifyContent="center">
        {/* <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid> */}
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3} style={{ textAlign: 'justify' }} >
                For inquiries, including partnership opportunities, please reach out via email at
                {' '}<span
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={handleCopyEmail}
                >
                  pravaskumar45@gmail.com
                </span>{' '} or through our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <Slide direction="down" in={success}>
        <MKBox position="absolute" top="0.5rem" left={0} width="100%" display="flex" justifyContent="center">
          <MKAlert
            width="25%"
            mx="auto"
            color="success"
            sx={{
              width:"350px",
              Height: "2.5rem !important",
              py: 1,
              justifyContent: "center",
              backgroundColor: "#5fed65",
            }}
          >
            <MKTypography variant="body2" color="white" fontWeight="regular">
              Email successfully copied!
            </MKTypography>
          </MKAlert>
        </MKBox>
      </Slide>
      <Slide direction="down" in={error}>
        <MKBox position="absolute" top="0.5rem" left={0} width="100%" display="flex" justifyContent="center">
          <MKAlert
            width="25%"
            mx="auto"
            color="error"
            sx={{
              width:"350px",
              Height: "2.5rem !important",
              py: 1,
              justifyContent: "center",
              backgroundColor: "#f44336",
            }}
          >
            <MKTypography variant="body2" color="white" fontWeight="regular">
              Failed to copy!
            </MKTypography>
          </MKAlert>
        </MKBox>
      </Slide>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
