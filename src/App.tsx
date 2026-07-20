/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyReduce from './components/WhyReduce';
import DigitalTools from './components/DigitalTools';
import HowToStart from './components/HowToStart';
import SustainableTips from './components/SustainableTips';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-500 selection:text-white" id="root-container">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Sections flow */}
      <main id="main-content">
        <Hero />
        <About />
        <WhyReduce />
        <DigitalTools />
        <HowToStart />
        <SustainableTips />
        <Benefits />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
