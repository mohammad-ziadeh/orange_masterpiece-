import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "../../components/reusables/heroSection";
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

export default function MainLayout() {
  return (
    <div style={{ backgroundColor: "#eeeeee", color: "#3b1e54" }}>
      <Navbar />
      <Hero />

      <main>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </main>
      <Footer />
    </div>
  );
}
