import { Card, ListGroup, Tab, Tabs } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CardBooks from "../CardBooks";
function Feature() {
    const [recommended, setRecommended] = useState([]);
    const [popular, setPopular] = useState([]);
    const baseURL = "http://127.0.0.1:8000/api/home/recommended";

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                const topRecommended = response.data.data;
                // console.log(topRecommended);
                setRecommended(topRecommended);
            })
            .catch((error) => console.error(`Error: ${error}`));

        axios
            .get("http://127.0.0.1:8000/api/home/popular")
            .then((response) => {
                const topPopular = response.data.data;
                // console.log(topPopular);
                setPopular(topPopular);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div>
            <Tabs
                defaultActiveKey="recommended"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="recommended" title="Recommended">
                    <div className="row">
                        {recommended.map((book, index) => {
                            return <CardBooks book={book} key={index} />;
                        })}
                    </div>
                </Tab>
                <Tab eventKey="popular" title="Popular">
                    <div className="row">
                        {popular.map((book, index) => {
                            return <CardBooks book={book} key={index} />;
                        })}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Feature;
