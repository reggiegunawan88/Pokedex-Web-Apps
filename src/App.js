import "./components/FontAwesomeIcons";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import CardList from "./pages/pcp/index.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Header />
      <CardList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
