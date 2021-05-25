import { HotColumn, HotTable } from '@handsontable/react';

// define formats
const formatJP = {
    pattern: '0,0.00 $',
    culture: 'ja-JP'
};
  
const formatTR = {
    pattern: '0,0.00 $',
    culture: 'tr-TR'
};

export const Locale = (args) => {
    return (
        <HotTable settings={args}>
            <HotColumn data="productName" type="text" width="120" />
            <HotColumn
                data="JP_price"
                type="numeric"
                numericFormat={formatJP}
                width="120"
            />
            <HotColumn
                data="TR_price"
                type="numeric"
                numericFormat={formatTR}
                width="120"
            />
        </HotTable>
    )
}