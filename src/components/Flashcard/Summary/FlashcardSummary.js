import React from 'react';

import Table from '../../../components/UI/Table/Table';

const FlashcardSummary = (props) => {
    const headings = [
        'Word',
        'Translation',
        'Result'
    ]

    const summaryRows = props.summary.map(row => {
        return [
            'something',
            'something',
            'something'
        ]
    })

    return (
        <Table headings={headings} rows={summaryRows} />
    )
}

export default FlashcardSummary;