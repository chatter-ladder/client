import React from 'react';

const Vocabulary = () => {
  return (
      <>
      <h1>Vocabulary List</h1>
      <form>
        <input type='text' name='word' placeholder="Enter new word" />
        <input type='text' name='translation' placeholder="Enter translation" />
        <button>Submit</button>
      </form>

      <table>
        <tbody>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Group</th>
            <th>Learning Status</th>
          </tr>
        </tbody>
      </table>
      </>
  )
}

export default Vocabulary;
