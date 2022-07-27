import React, { MouseEventHandler } from "react";

export function CheckoutProductElement (props: {
     numberId: string, 
     totalId: string,
     quantity: number,
     onClick: MouseEventHandler,
     display: string,
     price: number,
     choice: boolean, 
    }): JSX.Element {

    return (
        <>
            <button className="checkout-container-quantity" onClick={props.onClick} onTouchStart={() => ""}>
                {props.choice ? <span id="choice-text">Your choice</span> : ''}
                <div id={props.numberId} className="checkout-container-number" style={{display: props.display}}>{props.quantity} pieces</div>
                <div id={props.totalId} className="checkout-container-total" style={{display: props.display}}>
                    <div className="checkout-container-number">${props.quantity*props.price}</div>
                    <div className="checkout-container-perpiece">${props.price} per piece</div>
                </div>
            </button>
        </>
    );
}