/**
 * Nothelm Consultancy - Home Page Component
 * Developer: Samuel Arthur(arthursamuel605@gmail.com/(+233555593878/+233501212205))
 * Description: Main landing page with hero, about, services, insights, contact, and partner resources sections
 */

import Hero from "../components/home/hero/Hero";
import About from "../components/home/about/About";
import Services from "../components/home/services/Services";
import Insights from "../components/home/insights/Insights";
import PartnerResources from "../components/home/resources/PartnerResources";
import Contact from "../components/home/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-8 sm:space-y-10">
        <About />
        <Services />
        <Insights />
        <Contact />
        <PartnerResources />
      </div>
    </>
  );
}
