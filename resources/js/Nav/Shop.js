import Filter from "../Layout/Shop/Aside";
import Content from "../Layout/Shop/Content";
import { React, useEffect, useState } from "react";
import DropdownShop from "../Layout/Shop/DropdownShop";
function Shop() {
    const [authors, setAuthors] = useState([]);

    return (
        <div className="container mt-5">
            <div className="wrapper">
                <h2>Books</h2>
                <div>&nbsp;</div>
                <h5 className="mt-2">(Filtered by: )</h5>
            </div>

            <hr />

            <div className="row">
                <div className="col-2">
                    <b>Filter by</b>
                    {/* FILTER */}
                    <Filter setAuthors={setAuthors}/>
                </div>

                <div className="col ml-auto">
                    <div className="wrapper">
                        <p>Showing 1-12 of 123 books</p>
                        {/* SORT BY: */}
                        <DropdownShop />
                    </div>
                    {/* SHOW BOOK */}
                    <Content/>
                </div>
            </div>
        </div>
    );
}

export default Shop;
