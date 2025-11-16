import React from 'react'
import Banner from '../Banner/Banner'
import HowItsWork from '../How-its-work/HowItsWork'
import Services from '../Services/Services'
import Brands from '../Brands/Brands'
import Features from '../Features/Features'
import Reviews from '../Reviews/Reviews'
import Merchant from '../Merchant/Merchant'
import Faq from '../FAQ/Faq'


const reviewPromise = fetch('/reviews.json').then((res) => {
  return res.json();
})

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItsWork></HowItsWork>
      <Services></Services>
      <Brands></Brands>
      <Features></Features>
      <Merchant></Merchant>
      <Reviews reviewPromise={reviewPromise}></Reviews>
      <Faq></Faq>
    </div>
  )
}

export default Home
