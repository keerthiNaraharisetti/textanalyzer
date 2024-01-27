import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import MetricsTable from "./MetricsTable";
import TextAnalyzer from "../services/TextAnalyzer";

export default function WordAnalyzer() {
    const [word, setWord] = useState("");
    const [loading, setLoading] = useState(false);
    const [datarows, setdatarows] = useState([]);
    
    const metricscols = ["Characters", "Words"]
    const metricsrows = [[TextAnalyzer.countCharacters(word), TextAnalyzer.countWords(word)]]
    
    const processWord = () => {
        if (word.length > 0) {
            setLoading(true)
            TextAnalyzer.fetchDictionaryData(word)
                .then((response) => {
                    const tempdatarows = []
                    if (response.message) {
                        tempdatarows.push(["Message", response.message]);
                    } else {
                        const data = response[0].meanings[0];
                        tempdatarows.push(["Definition:", data.definitions[0].definition]);
                        tempdatarows.push(["Parts Of Speech:", data.partOfSpeech])
                        tempdatarows.push(["Synonyms:", data.synonyms.join(', ')])
                        tempdatarows.push(["Antonyms:", data.antonyms.join(', ')])
                    }
                    setdatarows(tempdatarows)
                })
                .finally(() => { setLoading(false) })
        } else {
            alert("Please enter your word!")
        }
    }
    return (
        <>
            <div className='flex my-8'>
                <Input type="text" placeholder="Enter your word" onChange={setWord} />
                <Button value={loading ? 'Loading...' : 'Proccess Word'} isDisabled = {loading}  onClick={processWord} />
            </div>
            <MetricsTable cols={metricscols} rows={metricsrows} style="w-1/3" />
            {datarows.length > 0 &&
                <div className="border border-gray-300 rounded-md p-2">
                    <table className="w-full text-sm text-left">
                        <tbody>
                            {datarows.map((row, index) => {
                                return <tr key={index}>
                                    <td scope="row" className="pl-2 py-2 font-medium text-gray-600 w-[10rem]">
                                        {row[0]}
                                    </td>
                                    <td className="py-2 font-medium">
                                        {row[1]}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}