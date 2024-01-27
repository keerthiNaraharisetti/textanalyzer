import React, { useState } from 'react';
import Textarea from './Textarea';
import TextAnalyzer from "../services/TextAnalyzer";
import MetricsTable from './MetricsTable';

const ParagraphAnalyzer = () => {
  const [text, setText] = useState("");
  const cols = ["Characters", "Words", "Sentences", "Paragraphs", "Spaces", "Punctuations"]
  const rows = [
    [ TextAnalyzer.countCharacters(text),
      TextAnalyzer.countWords(text),
      TextAnalyzer.countSentences(text),
      TextAnalyzer.countParagraphs(text),
      TextAnalyzer.countSpaces(text),
      TextAnalyzer.countPunctuations(text)
    ]
  ]

  return (
    <div className='mr-6'>
      <Textarea rows='12' placeholder='Type, or copy/paste your content here.' onChange={setText} />
      <MetricsTable cols={cols} rows={rows} />
    </div>
  )
}

export default ParagraphAnalyzer;
