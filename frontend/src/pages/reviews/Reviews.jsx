import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <div className="reviews-label">
          Ваш отзыв — это не только вдохновение для нас, но и возможность стать
          еще лучше
          <br />
          <br />
          Мы стремимся радовать вас вкусными блюдами, уютной
          атмосферой и отличным сервисом
          <br />
          <br />
          Если вам понравилось у нас, или есть
          пожелания, будем рады вашему отзыву
          <br />
          <br />
          Это поможет другим гостям узнать о нашем кафе, а нам —
          совершенствоваться для вас
        </div>
        <div className="reviews-storage">
          <div className="review">2GIS</div>
          <div className="review">Yandex Maps</div>
          <div className="review">Instagram</div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
