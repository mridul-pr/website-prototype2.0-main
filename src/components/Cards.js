import React from 'react';
import './Cards.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards' id="portfolios">
      <h1>Check out our previous contracts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='We are the top-rated residential building contractors in bangalore which provides most qualitative and timely solutions for your property development with unmatched customer service'
              label='Residences'
              path='/Details_Residence'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='We create masterpiece villa with our best building contractors in Bangalore providing state-of-the-art designs to finish with a modern flair'
              label='Villa'
              path='/Details_Villa'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='ATOM constructors in Bangalore is known for their well-planned and budget friendly apartment project with modern amenities.'
              label='Apartment'
              path='/Details_Apartment'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Strategically located condominiums offered by contractors for house construction in Bangalore are added with comfortable & lavish lifestyle, healthy surroundings.'
              label='Condominium'
              path='/Details_Condominium'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='Presenting plush row houses designed to suit your individual tastes with world class fittings blended with elegant touch of nature.'
              label='Row House'
              path='/Details_Row'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;