import Header from "./components/Header";
import Quiz from "./features/Quiz";
import "./index.css";

const App: React.FC = () => (
  <div>
    <Header />
    <main className="max-w-3xl mx-auto py-16 px-8">
      <Quiz />
    </main>
  </div>
);

export default App;
