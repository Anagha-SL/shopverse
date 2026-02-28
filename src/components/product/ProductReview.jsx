const ProductReview = ({ review }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-medium text-slate-800">{review.reviewerName}</p>
          <p className="text-xs text-slate-400">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>

        <div className="flex text-yellow-500 text-sm">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>{star <= review.rating ? "★" : "☆"}</span>
          ))}
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed">{review.comment}</p>
    </>
  );
};

export default ProductReview;
