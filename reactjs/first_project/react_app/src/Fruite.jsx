import React from 'react';

export const Fruite = () => {

    let fruite = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 22.3,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            price: 55.99,
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
        },
        {
            id: 4,
            title: "Mens Casual Slim Fit",
            price: 15.99,
            image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: 695,
            image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png"
        },
        {
            id: 6,
            title: "Solid Gold Petite Micropave",
            price: 168,
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
        }
    ];

    return (
        <div>
            <div
                style={{
                    display: "grid",
                    gap: "20px",
                    gridTemplateColumns: "repeat(3, 1fr)"
                }}
            >

                {fruite.map((f) => (
                    <div
                        key={f.id}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "250px",
                            width: "250px",
                            border: "1px solid black"
                        }}
                    >
                        <img
                            src={f.image}
                            height="100px"
                            width="100px"
                            alt={f.title}
                        />

                        <h3>Name: {f.title}</h3>

                        <p>Price: ${f.price}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};