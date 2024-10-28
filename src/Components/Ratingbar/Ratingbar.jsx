import React from 'react'
import ReactStars from "react-rating-stars-component";
const Ratingbar = (
    {
        children,
        className,
        starCount = 5,
        color = "gray",
        activeColor = "rgba(255, 197, 48, 1)",
        isEditable = true,
        ...restProps
      }
) => {
  return (
    <>
    <ReactStars
      edit={isEditable}
      classNames={className}
      count={starCount}
      isHalf={true}
      color={color}
      activeColor={activeColor}
      {...restProps}
      key={restProps.value || 1}
    />
    {children}
  </>
  )
}

export default Ratingbar