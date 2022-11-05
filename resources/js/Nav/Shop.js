import Filter from "../Layout/Shop/Aside";
import Content from "../Layout/Shop/Content";
import { React, useEffect, useState } from "react";

import DropdownShop from "../Layout/Shop/DropdownShop";
function Shop() {
    // const [show, setShow] = useState([]);
    // const baseURL = "http://127.0.0.1:8000/api/show";

    // useEffect(() => {
    //     axios
    //         .get(baseURL)
    //         .then((response) => {
    //             const books = response.data.data;
    //             console.log(books);
    //             setShow(books);
    //         })
    //         .catch((error) => console.error(`Error: ${error}`));
    // }, []);
    return (
        <div className="container mt-5">
            <div className="wrapper">
                <h2>Books</h2>
                <div>&nbsp;</div>
                <h5 className="mt-2">(Filtered by Category01)</h5>
            </div>

            <hr />

            <div className="row">
                <div className="col-2">
                    <b>Filter by</b>
                    <Filter />
                </div>

                <div className="col ml-auto">
                    <div className="wrapper">
                        <p>Showing 1-12 of 123 books</p>
                        <DropdownShop />
                    </div>
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Shop;
