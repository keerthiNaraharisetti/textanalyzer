import ParagraphAnalyzer from './components/ParagraphAnalyzer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import WordAnalyzer from './components/WordAnalyzer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WordAnalyzer />} />
          <Route path="/paragraph" element={<ParagraphAnalyzer />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
