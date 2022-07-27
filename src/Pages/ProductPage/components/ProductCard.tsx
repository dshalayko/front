import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { IProduct } from '../../../globalTypes';
import './ProductCardStyle.scss';
import { useHistory } from 'react-router';
import { sendChatData } from '../../../API/chatAPI';

export function ProductCard(props: {
  data: IProduct;
  index: number;
  activeSlide: number;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const active = props.index == props.activeSlide;
  const history = useHistory();
  function chatBtn() {
    const chatData = {
      productName: props.data.name,
      productPrice: props.data.price[0].amount,
      userID: sessionStorage.getItem('userTgID') || '',
    };
    sendChatData(chatData);
    open('https://t.me/snaptrap_bot?start=product_msg');
  }
  function addToCartBtn(product: IProduct) {
    const isVerified = JSON.parse(
      sessionStorage.getItem('isVerified') || 'false',
    );
    isVerified
      ? history.push('/checkout', product)
      : alert("You don't have access. Please wait for data verification");
  }
  const [isReady, setIsReady] = useState(false);

  // document.body.addEventListener('touchstart', () => {
  //   const video = document.getElementsByTagName('video')[0];
  //   if (video.paused && isReady) video.play();
  // });

  useEffect(() => {
    const video = document.getElementsByTagName('video')[0];
    if (video?.paused) video?.play();
  }, [isReady]);

  return (
    <>
      <div className="productCard">
        {props.data.type === 'img' && (
          <img src={props.data?.src} className="productCard-img" alt="" />
        )}
        {props.data.type !== 'img' && !active && (
          <img src={props.data?.thumbnail} className="productCard-img" alt="" />
        )}
        {props.data.type !== 'img' && active && (
          <div className="productCard-vid">
            <ReactPlayer
              clasname="vid-player"
              id="vid"
              url={props.data?.src}
              muted={true}
              playing={isReady}
              playsinline={true}
              loop={true}
              width="100%"
              height="100%"
              playsInline={true}
              onProgress={(progress) => {
                if (progress.loaded >= 0.1) {
                  props.setIsLoading(false);
                  setIsReady(true);
                }
              }}
            />
          </div>
        )}
        <div className="productCard-info">
          {/* <span className="productCard-price">
            ${+props.data?.price[0].amount}
          </span> */}
          <span className="productCard-name">{props.data?.name}</span>
          {active ? (
            <div className="productCard-btns">
              <div className="productCard-btns-chat" onClick={() => chatBtn()}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.455 16L0 19.5V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V15C20 15.2652 19.8946 15.5196 19.7071 15.7071C19.5196 15.8946 19.2652 16 19 16H4.455ZM3.763 14H18V2H2V15.385L3.763 14ZM9 7H11V9H9V7ZM5 7H7V9H5V7ZM13 7H15V9H13V7Z"
                    fill="#4A9B57"
                  />
                </svg>
              </div>
              <div
                className="productCard-btns-addToCart"
                onClick={() => addToCartBtn(props.data)}
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 14V2H0V0H3C3.26522 0 3.51957 0.105357 3.70711 0.292893C3.89464 0.48043 4 0.734784 4 1V13H16.438L18.438 5H6V3H19.72C19.872 3 20.022 3.03466 20.1586 3.10134C20.2952 3.16801 20.4148 3.26495 20.5083 3.38479C20.6019 3.50462 20.6668 3.6442 20.6983 3.79291C20.7298 3.94162 20.7269 4.09555 20.69 4.243L18.19 14.243C18.1358 14.4592 18.011 14.6512 17.8352 14.7883C17.6595 14.9255 17.4429 15 17.22 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14ZM4 21C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19C2 18.4696 2.21071 17.9609 2.58579 17.5858C2.96086 17.2107 3.46957 17 4 17C4.53043 17 5.03914 17.2107 5.41421 17.5858C5.78929 17.9609 6 18.4696 6 19C6 19.5304 5.78929 20.0391 5.41421 20.4142C5.03914 20.7893 4.53043 21 4 21ZM16 21C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21Z"
                    fill="white"
                  />
                </svg>
                <div>ADD TO CART</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
