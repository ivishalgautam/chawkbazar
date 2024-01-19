import BannerCard from '@components/common/banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { ROUTES } from '@utils/routes';
import { SwiperSlide } from 'swiper/react';
import cn from 'classnames';

interface Props {
  data: any;
  className?: string;
  buttonGroupClassName?: string;
  variant?: 'box' | 'fullWidth';
  variantRounded?: 'rounded' | 'default';
  prevNextButtons?: 'none' | '';
}
//  2xl:mb-[75px]
const HeroSlider: React.FC<Props> = ({
  className = 'mb-12 md:mb-14 xl:mb-[60px]',
  variant = 'box',
  variantRounded = 'rounded',
  buttonGroupClassName = '',
  data,
  prevNextButtons = '',
}) => {
  return (
    <div
      className={cn(
        'relative mb-5 md:mb-8 py-2 lg:py-8 px-4 sm:px-10 md:px-14 lg:px-20',
        {
          'mx-auto max-w-[1920px]': variant === 'fullWidth',
        },
        className
      )}
    >
      <Carousel
        autoplay={{
          delay: 5000,
        }}
        className={`mx-0 cont-swiper ${
          variant === 'fullWidth' ? 'carousel-full-width' : ''
        }`}
        paginationPosition="center"
        prevButtonClasses={`${
          prevNextButtons === 'none' && 'hidden'
        }`}
        nextButtonClasses={`${
          prevNextButtons === 'none' && 'hidden'
        }`}
        buttonGroupClassName={buttonGroupClassName}
        nextActivateId="hero-slider-next"
        prevActivateId="hero-slider-prev"
        pagination={{
          clickable: true,
        }}
      >
        {data?.map((banner: any) => (
          <SwiperSlide
            className="carouselItem"
            key={`banner--key-${banner?.id}`}
          >
            <BannerCard
              banner={banner}
              href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
              variant={variantRounded}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
