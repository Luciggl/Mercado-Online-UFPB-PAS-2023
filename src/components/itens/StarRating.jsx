import './starRating.css'

const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating);

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={starValue}
                        className={starValue <= roundedRating
                            ? 'star filled' : 'star'}>
                        &#9733;
                    </span>
                )
            })}
        </div>
    );
};

export default StarRating;