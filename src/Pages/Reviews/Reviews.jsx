import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchReviewById } from '../../API';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
  const params = useParams();
  const [review, setReview] = useState([]);
  console.log(review)
  useEffect(() => {
    fetchReviewById(params.filmId)
      .then((data) => setReview(data))
      .catch((error) => console.log(error));
  }, [params.filmId]);
  return (
    <div>
      <ul>
        {review.map(item =>  <ReviewItem item={item} />)}
      </ul>
    </div>
  )
}

export default Reviews