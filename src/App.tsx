import "./App.css";
import ChapterOne from "./components/chapters/1.Trouble";
import ChapterTwo from "./components/chapters/2.Balance";
import ChapterThree from "./components/chapters/3.Rookie";
import ChapterFour from "./components/chapters/4.Selection";
import ChapterFive from "./components/chapters/5.Strength";
import ChapterSix from "./components/chapters/6.Teacher";
import ChapterSeven from "./components/chapters/7.Victory";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <div className="prose prose-h1:mb-0 prose-h1:mt-6 max-w-[1000px] px-4 py-4 mx-auto grid">
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <ChapterFive />
        <ChapterSix />
        <ChapterSeven />
        <ComingSoon />
        <Footer />
      </div>
    </>
  );
}

export default App;
