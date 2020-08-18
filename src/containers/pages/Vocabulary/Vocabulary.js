import React, { Component } from 'react';

import Table from '../../../components/UI/Table/Table';
import Input from '../../../components/UI/Input/Input';
import './Vocabulary.css'

class Vocabulary extends Component {

  state = {
    users: [],
    vocab:[],
    vocabForm: {
      word: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'New word'
        },
        value: '',
        validation: {
          valid: false,
          required: true,
          unique: true,
          minLength: 1,
          maxLength: 20
        },
        touched: false
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
          required: true,
          minLength: 1,
          maxLength: 20
        },
        touched: false
      }
    },
    formIsValid: false
  }

  componentDidMount() {
    const user_id = 1;
    fetch(`http://localhost:3001/users/${user_id}/vocabulary`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Networ response wasn't ok")
      })
      .then(data => this.setState({ vocab: data }))
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

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

  addVocabHandler = (event) => {
    event.preventDefault();

    // need to check if word is unique in users vocab list before submitting
    
    const vocabData = {
      user_id: 1,
      word: this.state.vocabForm.word.value,
      word_language: 'spanish',
      translation: this.state.vocabForm.translation.value,
      translation_language: 'english'
    }

    fetch('http://localhost:3001/vocabulary', {
      method: 'POST',
      headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
      body:JSON.stringify(vocabData)
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
        return(response.text())
      }
      throw new Error("Network response wasn't ok")
    })
    .then(text => console.log(text))

  }

  inputChangedHandler = (event, inputIdentifier) => {
    // console.log(event.target.value);
    const updatedVocabForm = {
      ...this.state.vocabForm
    }

    const updatedFormElement = {
      ...updatedVocabForm[inputIdentifier]
    }

    const updatedFormValidity = {
      ...updatedFormElement['validation']
    }

    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedFormValidity.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    
    updatedFormElement['validation'] = updatedFormValidity
    updatedVocabForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedVocabForm) {
      formIsValid = updatedVocabForm[inputIdentifier]['validation'].valid && formIsValid;
    }

    this.setState({ vocabForm: updatedVocabForm, formIsValid: formIsValid })
  }

  render () {

    const headings = [
      'Spanish Word',
      'Translation',
      'Groups',
      'Learning Status'
    ];

    // const rows = [
    //   [
    //     'hola',
    //     'hello',
    //     '',
    //     'new'
    //   ],
    //   [
    //     'hacinda',
    //     'villa',
    //     '',
    //     'new'
    //   ],
    //   [
    //     'amigo',
    //     'friend',
    //     '',
    //     'new'
    //   ],
    //   [
    //     'salud',
    //     'Bless you (after someone sneezes',
    //     '',
    //     'new'
    //   ],
    //   [
    //     'Buenas noches',
    //     'Good evening',
    //     '',
    //     'new'
    //   ],
    //   [
    //     'Permiso, con permiso (para pasar)',
    //     'Excuse me please (used to pass someone)',
    //     '',
    //     'new'
    //   ],
    //   [
    //     'el dolor de cabeza',
    //     'headache',
    //     '',
    //     'new'
    //   ]
    // ]

    let inputClassesWord = ['inputElement']
    let validationErrorWord = null;
    if (!this.state.vocabForm.word.validation.valid && this.state.vocabForm.word.touched) {
      inputClassesWord.push('invalid')
      validationErrorWord = <p className='validation'>Please enter a valid word</p>
    }

    let inputClassesTranslation = ['inputElement']
    let validationErrorTranslation = null;
    if (!this.state.vocabForm.translation.validation.valid && this.state.vocabForm.translation.touched) {
      inputClassesTranslation.push('invalid')
      validationErrorTranslation = <p className='validation'>Please enter a valid Translation</p>
    }

    return (
      <>
        <h1>Vocabulary List</h1>
        <form onSubmit={this.addVocabHandler}>
          <Input 
            name='word'
            placeholder={"Enter new word"}
            onChange={(event) => this.inputChangedHandler(event, 'word')}
            invalid={!this.state.vocabForm.word.validation.valid && this.state.vocabForm.word.touched}
          />
          <Input 
            name='translation'
            placeholder={"Enter translation"}
            onChange={(event) => this.inputChangedHandler(event, 'translation')}
            invalid={!this.state.vocabForm.translation.validation.valid && this.state.vocabForm.translation.touched}
          />
          {/* <input className={inputClassesWord.join(' ')} type='texst' onChange={(event) => this.inputChangedHandler(event, 'word')} value={this.state.vocabForm.word.value} name='word' placeholder="Enter new word" />
          {validationErrorWord} */}
          {/* <input className={inputClassesTranslation.join(' ')} type='text' onChange={(event) => this.inputChangedHandler(event, 'translation')} value={this.state.vocabForm.translation.value} name='translation' placeholder="Enter translation" />
          {validationErrorTranslation} */}
          <button disabled={!this.state.formIsValid}>Submit</button>
        </form>

        {/* <button onClick={this.addVocabHandler}>Add Word</button> */}

        <Table headings={headings} rows={this.state.vocab} />

      </>
    );
  };
};

export default Vocabulary;
