import React from 'react'
import Breadcrumbs from '../components/BreadCrumbs'
import ProductSectionone from '../components/ProductSectionone'

import ProductTabs from '../components/ProductTabs'

import Footer from '../components/Footer'
import GreenHeader from '../components/GreenHeader'
import Navbarmain from '../components/Navbarmain'
import ClientLogoSection from '../components/ClientLogoSection'
import ContentSection from '../components/ContentSection'
import BestSeller from '../components/BestSeller'

const Products= () => {
  return (
    <div>
        <GreenHeader/>
        <Navbarmain/>
        <Breadcrumbs/>
        <ProductSectionone/>
        <ProductTabs/>
        <ContentSection/>
        <BestSeller/>
        <ClientLogoSection/>
        <Footer/>
    </div>
  )
}

export default Products