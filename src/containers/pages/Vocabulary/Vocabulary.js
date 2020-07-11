import React, { Component } from 'react';

import Table from '../../../components/UI/Table/Table';

class Vocabulary extends Component {
  render () {

    const headings = [
      'Spanish Word',
      'Translation',
      'Groups',
      'Learning Status'
    ];

    const rows = [
      [
        'hola',
        'hello',
        '',
        'new'
      ],
      [
        'hacinda',
        'villa',
        '',
        'new'
      ],
      [
        'amigo',
        'friend',
        '',
        'new'
      ]
    ]

    return (
      <>
        <h1>Vocabulary List</h1>
        <form>
          <input type='text' name='word' placeholder="Enter new word" />
          <input type='text' name='translation' placeholder="Enter translation" />
          <button>Submit</button>
        </form>

        <Table headings={headings} rows={rows} />

      </>
    );
  };
};

export default Vocabulary;
