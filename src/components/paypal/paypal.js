import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cart",
                amount: {
                  currency_code: "USD",
                  value: props.cartValue,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
      <div ref={paypal}></div>
    </div>
  );
}
