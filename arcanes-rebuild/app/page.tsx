// app/page.tsx
import Hero from "@/components/home/hero";
import WhoWeAre from "@/components/home/who-we-are";
import WhatWeDo from "@/components/home/what-we-do";
import B2BSolutions from "@/components/home/b2b-solutions";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <B2BSolutions />
    </main>
  );
}