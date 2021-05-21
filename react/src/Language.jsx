import React, { useState, useEffect } from 'react';
import Handsontable from "handsontable";
import { HotTable } from '@handsontable/react';

export const Language = (args) => {
    const [language, setLanguage] = useState('en-US');
    const [languageList, setLanguageList] = useState([]);

    useEffect(() => {
        setLanguageList(Handsontable.languages.getLanguagesDictionaries());
    }, []);

    const updateHotLanguage = event => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <label htmlFor="languages">Select language:
                {' '}
                <select value={language} onChange={updateHotLanguage} id="languages">
                {languageList.map(({ languageCode }) => (
                    <option key={languageCode} value={languageCode}>
                        {languageCode}
                    </option>
                ))}
                </select>
            </label>

            <br/>
            <br/>

            <HotTable language={language} settings={args}/>
        </div>
    )
}