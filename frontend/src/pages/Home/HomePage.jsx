import React from "react";
import FiltersCategory from "./FilterCategory/FiltersCategory";
import CountProducts from "./CountProducts/CountProducts";
import CardList from "./CardList/CardList";

const HomePage = () => {
    return (
        <div className="page">
            <div className="container">
                <h1>Products</h1>
                <FiltersCategory />
                <CountProducts />
                <CardList />
            </div>
        </div>
    );
};

export default HomePage;
