import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About',
 description: 'SEO Title',
 keywords: ['SEO', 'About'],
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}