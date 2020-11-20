import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, search }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {(() => {
        if (search.query.length != 0) {
          return search.found.length > 0 ? (
            <Categories title='Found'>
              <Carousel>
                {search.found.map((item) => (
                  <CarouselItem key={item.id} {...item} isList />
                ))}
              </Carousel>
            </Categories>
          ) : (
            <h2 className='message'>No se ha encontrado nada con "{search.query}" :(</h2>
          );
        }
      })()}
      {myList.length > 0 && (
        <Categories title='My lists'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Trends'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originals PlatziVideo'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps)(Home);
