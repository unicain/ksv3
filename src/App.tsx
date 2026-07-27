/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Actuation from "./components/Actuation";
import AIServices from "./components/AIServices";
import PresenceMap from "./components/PresenceMap";
import Trajectory from "./components/Trajectory";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark overflow-x-hidden selection:bg-brand-gold/30 selection:text-brand-dark">
      {/* Elegant sticky header */}
      <Header />

      {/* Hero section with executive photo */}
      <Hero />

      {/* Professional Profile section */}
      <Profile />

      {/* Strategic Actuation Pillars */}
      <Actuation />

      {/* AI Services Architectural blocks */}
      <AIServices />

      {/* Interactive global geographic connection map */}
      <PresenceMap />

      {/* Dynamic Career timeline */}
      <Trajectory />

      {/* Competencies tag pool and Language cards */}
      <Languages />

      {/* Core current initiatives and projects */}
      <Projects />

      {/* Highly trusted leadership testimonials */}
      <Testimonials />

      {/* Contact blocks and credit footers */}
      <Contact />

      {/* Premium Floating WhatsApp Action */}
      <WhatsAppFloat />
    </div>
  );
}
