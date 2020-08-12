import React, { Component } from 'react';

import Table from '../../../components/UI/Table/Table';

class Vocabulary extends Component {

  state = {
    words: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'New word'
      },
      value: '',
      validation: {
        valid: false,
        required: true
      }
    },
    translation: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Translation'
      },
      value: '',
      validation: {
        valid: false,
        required: true
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

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
      ],
      [
        'salud',
        'Bless you (after someone sneezes',
        '',
        'new'
      ],
      [
        'Buenas noches',
        'Good evening',
        '',
        'new'
      ],
      [
        'Permiso, con permiso (para pasar)',
        'Excuse me please (used to pass someone)',
        '',
        'new'
      ],
      [
        'el dolor de cabeza',
        'headache',
        '',
        'new'
      ]
    ]

    addVocabHandler = ( event ) => {
      event.preventDefault();
      const vocabData = {}

    }

    return (
      <>
        <h1>Vocabulary List</h1>
        <form onSubmit={this.addVocabHandler}>
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
