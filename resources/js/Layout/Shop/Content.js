import { React, useEffect, useState } from "react";
import axios from "axios";
import CardBooks from "../CardBooks";

export default function Content() {
    const [show, setShow] = useState([]);
    const baseURL = "http://127.0.0.1:8000/api/show?onsale=desc&per_page=15";

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                const books = response.data.data;
                console.log(books);
                setShow(books);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="row">
            {show.map((book, index) => {
                return <CardBooks book={book} key={index} />;
            })}
            
        </div>
    );
}
