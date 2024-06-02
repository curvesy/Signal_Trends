import Image from 'next/image';
import Hero from './components/Hero';
import Section from './components/Section';

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  console.log(strapiData);
  return (
    <div>
      <Hero />
      <Section />
    </div>
  );
}
