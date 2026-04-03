import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import "./App.css";
function App() {
  return (
    <>
      <div className="bg-gray-900 flex flex-col h-full min-h-screen justify-between">
        <Header />
        <AppRouter/>
        <Footer />
      </div>
    </>
  );
}

export default App;
