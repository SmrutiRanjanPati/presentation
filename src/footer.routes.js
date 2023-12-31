// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/website_logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Pravnit software pvt. ltd.",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      // link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      // link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/SmrutiRanjanPati",
    },
    {
      icon: <YouTubeIcon />,
      // link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        {route: "/presentation/pages/landing-pages/about-us", name: "about us",},
        { name: "freebies",},
        { name: "premium tools",},
        { name: "blog",},
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", },
        { name: "bits & snippets",},
        { name: "affiliate program",},
      ],
    },
    {
      name: "help & support",
      items: [
        { route: "/pages/landing-pages/contact-us", name: "contact us",},
        { name: "knowledge center",},
        { name: "custom development",},
        { name: "sponsorships",},
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions",},
        { name: "privacy policy",},
        { name: "licenses (EULA)",},
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by Pravnit Software pvt.ltd.
    </MKTypography>
  ),
};
