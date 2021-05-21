import React, { useState } from 'react';
import { HotTable } from '@handsontable/react';

export const WithControls = (args) => {
    const [settings, setSettings] = useState({});

    const handleChange = (setting, states) => event => {
        setSettings(prevState => ({
            ...prevState,
            [setting]: states[event.target.checked ? 1 : 0],
        }))
    }

    const newSettings = {
        ...args,
        ...settings
    }

    return (
        <div>
            <div className="controllers">
            <label>
                <input onChange={handleChange('fixedRowsTop', [0, 2])} type="checkbox" />
                Add fixed rows
            </label>
            <br/>

            <label>
                <input onChange={handleChange('fixedColumnsLeft', [0, 2])} type="checkbox" />
                Add fixed columns
            </label>
            <br/>

            <label>
                <input onChange={handleChange('rowHeaders', [false, true])} type="checkbox" />
                Enable row headers
            </label>
            <br/>

            <label>
                <input onChange={handleChange('colHeaders', [false, true])} type="checkbox" />
                Enable column headers
            </label>
            <br/>
            </div>

            <HotTable root="hot" settings={newSettings}/>
        </div>
    )
}