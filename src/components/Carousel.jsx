import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

function HeaderCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="https://image.tmdb.org/t/p/w1280//9BBTo63ANSmhC4e6r62OJFuK2GL.jpg"
            alt="The Avengers"
          />
          <Carousel.Caption>
            <h2>The Avengers</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="https://image.tmdb.org/t/p/w1280//xJHokMbljvjADYdit5fK5VQsXEG.jpg"
            alt="Interestellar"
          />
          <Carousel.Caption>
            <h2>Interestellar</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="https://image.tmdb.org/t/p/w1280//s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
            alt="Avatar"
          />

          <Carousel.Caption>
            <h2>Inception</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="https://image.tmdb.org/t/p/w1280//mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Avengers: Infinity War</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="https://image.tmdb.org/t/p/w1280//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>The Dark Knight </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="https://image.tmdb.org/t/p/w1280//Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg"
            alt="Avatar"
          />

          <Carousel.Caption>
            <h2>Avatar</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeaderCarousel;
