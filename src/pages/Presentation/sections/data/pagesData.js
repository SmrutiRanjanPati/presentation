import pageHeader from "assets/images/pageHeaders.png";
import AuthorPage from "assets/images/autherPage.png";
import AboutUsPage from "assets/images/aboutPage.png";
import ContactUsPage from "assets/images/ContactUsPage.png";

export default [
  {
    image: AboutUsPage,
    name: "About Us Page",
    route: "/presentation/pages/landing-pages/about-us",
  },
  {
    image: ContactUsPage,
    name: "Contact Us Page",
    route: "/pages/landing-pages/contact-us",
    target: "_blank",
  },
  {
    image: AuthorPage,
    name: "Author Page",
    route: "/pages/landing-pages/author",
  },
  {
    image: pageHeader,
    name: "Page Headers",
    route: "/sections/page-sections/page-headers",
  },
];
