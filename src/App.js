import ParagraphAnalyzer from './components/ParagraphAnalyzer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import WordAnalyzer from './components/WordAnalyzer';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/textanalyzer/" element={<Layout />}>
          <Route index element={<WordAnalyzer />} />
          <Route path="/textanalyzer/paragraph" element={<ParagraphAnalyzer />} />
          <Route path="*" element={<Error status='404' message='Oops! The page you are looking for could not be found' url='/textanalyzer/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
