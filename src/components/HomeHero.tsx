import Image from "next/image";
import { Carousel } from "react-bootstrap";
import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner2.png";
import banner3 from "../../public/banner3.png";
import styles from "../styles/hero.module.css";

const HomeHero = () => {
  return (
    <>
      <div className="my-0">
        <Carousel className={styles.carouselContainer}>
          <Carousel.Item interval={4000} className={styles.carouselItem}>
            <Image
              src={banner1}
              width={0}
              height={0}
              alt="image1"
              className={styles.carouselImg}
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} className={styles.carouselItem}>
            <Image
              src={banner2}
              width={0}
              height={0}
              alt="image1"
              className={styles.carouselImg}
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} className={styles.carouselItem}>
            <Image
              src={banner3}
              width={0}
              height={0}
              alt="image1"
              className={styles.carouselImg}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default HomeHero;
