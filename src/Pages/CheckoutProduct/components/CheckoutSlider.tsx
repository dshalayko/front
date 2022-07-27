import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel,
  Keyboard
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Mousewheel, Keyboard]);

export default function CheckoutSlider (props: {confirmQuantity: (quantity: number) => void}): JSX.Element {
    const [ quantity, setQuantity ] = useState<number>();

    return (
        <>
            <div id="modal" className="checkout-quantity-choice">
                <div className="checkout-quantity-choice-content">
                <Swiper
                    onActiveIndexChange={swiper => {
                        const activeSlide = swiper.slides[swiper.activeIndex].innerHTML as unknown as number;
                        setQuantity(activeSlide);
                    }}
                    className="checkout-swiper"
                    speed={500}
                    initialSlide={0}
                    mousewheel={true}
                    centeredSlides={true}
                    direction="vertical"
                    slidesPerView={5}
                    spaceBetween={0}
                    slideToClickedSlide={true}
                >
                    {
                        Array.from(Array(25), (_,i)=>i+1).map(item=>item*10).map((x, i) =>{
                        i += 1;
                        return <SwiperSlide key={i}>{x}</SwiperSlide>;
                        })
                    }
                </Swiper>
                <button className="checkout-container-choice-button" onClick={() => props.confirmQuantity(quantity as number)}>
                    Confirm
                </button>
                </div>
            </div>
        </>
    );
}
