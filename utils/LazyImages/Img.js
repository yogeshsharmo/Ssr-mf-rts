import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({src, width, height, alt}) => {
  return (
    <>
      <LazyLoadImage src={src}
        width={width} height={height}
        alt={alt}
      />
    </>
  )
}

export default Img
