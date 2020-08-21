import React from 'react';

import Table from '../../../components/UI/Table/Table';

const FlashcardSummary = (props) => {
    const headings = [
        'Word',
        'Translation',
        'Result'
    ]

    const summaryRows = props.summary.map(row => {
        let result = 'incorrect';
        if (row.correct) {
            result = 'correct'
        }
        return [
            row.word,
            row.translation,
            result
        ]
    })

    return (
        <Table headings={headings} rows={summaryRows} />
    )
}

export default FlashcardSummary;