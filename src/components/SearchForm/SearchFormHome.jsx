import React from 'react';
import './SearchForm.css';

function SearchFormHome() {
  return (
    <div className='searchForm'>
        <form>
          <div>
            <input type='text' id='bedrooms' placeholder='Dormitorios' />
          </div>
          <div>
            <input type='text' id='type' placeholder='Tipo de Propiedad' />
          </div>
          <div>
            <input type='number' id='price' placeholder='Precio' />
          </div>
          <div>
            <input type='submit' className='searchForm__submit' value='Buscar' />
          </div>
        </form>
    </div>
  )
}

export default SearchFormHome;