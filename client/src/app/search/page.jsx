import { Suspense } from "react";
import Search from "./search.component";

export const metadata = {
  title: "Search | VRB Web Design and Development",
  description:
    "Search VRB Web Design and Development for articles, website design services, SEO packages, maintenance, and more.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<main>Loading search...</main>}>
      <Search />
    </Suspense>
  );
}
