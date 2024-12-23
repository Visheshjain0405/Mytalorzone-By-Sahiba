import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Slidex from '../Slider/Slidex';
import ProductList from '../../Assests/Data/ProductList';
import TopCategory from '../Categories/TopCategory';
import FestivalBanner from '../Banner/FestivalBanner';
import FestivalProduct from '../../Assests/Data/FestivalProduct';
import ShopByOccasion from '../Product/ShopByOccasion';
import KurtisBanner from '../Banner/KurtisBanner';
import KurtiProduct from '../../Assests/Data/KurtiProduct';
import CustomerReviews from '../Reviews/CustomerReviews';
function Home() {
  return (
    <div>
        <Navbar />
      <Slidex />
      <ProductList />
      <TopCategory />
      <FestivalBanner />
      <FestivalProduct />
      <ShopByOccasion/>
      <KurtisBanner/>
      <KurtiProduct/>
      <CustomerReviews/>
      <Footer/>
    </div>
  )
}

export default Home