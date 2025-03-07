import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export const Test = () => {
  const [navbarHtml, setNavbarHtml] = useState("");
  const [heroHtml, setHeroHtml] = useState("");
  const [aboutHtml, setAboutHtml] = useState("");
  const [testHtml, setTestHtml] = useState("");
  const [footerHtml, setFooterHtml] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Navbar
        const navbarSnapshot = await getDocs(collection(db, "navbar"));
        const navbars = navbarSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const activeNavbar = navbars.find((navbar) => navbar.active);
        if (activeNavbar) {
          setNavbarHtml(activeNavbar.html || "");
        }

        // Fetch Hero Section
        const heroSnapshot = await getDocs(collection(db, "hero"));
        const heroes = heroSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const activeHero = heroes.find((hero) => hero.active);
        if (activeHero) {
          setHeroHtml(activeHero.html || "");
        }

        // Fetch About Section
        const aboutSnapshot = await getDocs(collection(db, "about"));
        const abouts = aboutSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const activeAbout = abouts.find((about) => about.active);
        if (activeAbout) {
          setAboutHtml(activeAbout.html || "");
        }

        // Fetch Test Section (Fixed)
        const testSnapshot = await getDocs(collection(db, "test"));
        const tests = testSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const activeTest = tests.find((test) => test.active);
        console.log(activeTest);
        if (activeTest) {
          setTestHtml(activeTest.html || "");
        }

        // Fetch Footer Section
        getFooterSections();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getFooterSections = async () => {
    const footerSnapshot = await getDocs(collection(db, "footer"));
    const footers = footerSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const activeFooter = footers.find((footer) => footer.active);
    if (activeFooter) {
      setFooterHtml(activeFooter.html || "");
    }
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: navbarHtml }} />
      <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
      <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
      <div dangerouslySetInnerHTML={{ __html: testHtml }} />
      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </div>
  );
};

export default Test;
