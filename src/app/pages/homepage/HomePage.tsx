"use client";
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}