import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import { connect } from 'react-redux';
import { search } from '../actions';

const Search = (props, { isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleSearch = (event) => {
    props.search(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>What do you want to see today?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Search...'
        onChange={handleSearch}
      />
    </section>
  );
};

const mapDispatchToProps = {
  search,
};

export default connect(null, mapDispatchToProps)(Search);
