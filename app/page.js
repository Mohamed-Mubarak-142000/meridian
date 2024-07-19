import FindUs from "./components/FindUs";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import ReadToShip from "./components/ReadToShip";
import Services from "./components/Services";
import TopCollections from "./components/TopCollections";
import WriteAbout from "./components/WriteAbout";

export default function Home() {
  const collectionsList = [
    { id: 1, imageCol: "/collection1.png" },
    { id: 2, imageCol: "/collection2.png" },
    { id: 3, imageCol: "/collection3.png" },
    { id: 4, imageCol: "/collection4.png" },
    { id: 5, imageCol: "/collection5.png" },
  ];
  const exploreList = [
    { id: 1, imageCol: "/explor1.png" },
    { id: 2, imageCol: "/explor2.png" },
    { id: 3, imageCol: "/explor3.png" },
    { id: 4, imageCol: "/explor4.png" },
    { id: 5, imageCol: "/explore5.png" },
  ];
  return (
    <main>
      <Hero />
      <TopCollections collectionsList={collectionsList} />
      <Services />
      <ReadToShip />
      <OurProducts />
      <TopCollections collectionsList={exploreList} />
      <WriteAbout />
      <FindUs />
    </main>
  );
}
