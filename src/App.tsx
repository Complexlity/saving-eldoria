import "./App.css";
import ChapterOne from "./components/chapters/1.Trouble";
import ChapterTwo from "./components/2.Balance";
import ChapterThree from "./components/3.Rookie";
import ChapterFour from "./components/4.Selection";
import ChapterFive from "./components/5.Strength";
import ChapterSix from "./components/6.Teacher";
import ChapterSeven from "./components/7.Victory";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <div className="prose max-w-[1000px] px-4 py-4 mx-auto">
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
