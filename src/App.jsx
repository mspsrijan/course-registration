import Header from "./components/Header";
import Courses from "./components/Courses";
import Summaries from "./components/Summaries";

function App() {
  return (
    <div className="content-wrapper max-w-7xl mx-auto px-5 md:px-10">
      <Header></Header>
      <div className="main grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-1 lg:col-span-9">
          <Courses></Courses>
        </div>
        <div className="rounded-xl col-span-3">
          <Summaries></Summaries>
        </div>
      </div>
    </div>
  );
}

export default App;
