import React from "react";
import Slider from './Slider'
import InfiniteSlider from "./Infiniteslider";
import NewArrivals from './NewArrivals'
export default function App() {
 return(
  <>
  <Slider/>
  <InfiniteSlider/>
  <NewArrivals title="New Arrivals" />
  </>
 )
}
