import { React, useEffect, useState } from "react";
import axios from "axios";
import CardBooks from "../CardBooks";
import { useParams } from "react-router-dom";

export default function Content() {
    const [show, setShow] = useState([]);

    const baseURL = "http://127.0.0.1:8000/api/show?onsale=desc&per_page=15";

    const param = useParams();
    console.log("category" + param.categoryId);
    console.log("author" + param.authorId);
    console.log(parseInt(param.star));


    const loadProduct = async () => {
        // FILTER API
        if (param.categoryId === undefined && param.authorId === undefined) {
            // CALL DEFAULT API
            axios
                .get(baseURL)
                .then((response) => {
                    const books = response.data.data;
                    setShow(books);
                })
                .catch((error) => console.error(`Error: ${error}`));
        } 
        // API FILTRER CATEGORY
        else if (param.categoryId !== undefined) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/show?category_id=${param.categoryId}`
                )
                .then((response) => {
                    const books = response.data.data;
                    console.log(books);
                    setShow(books);
                })
                .catch((error) => console.error(`Error: ${error}`));
        } 
        // API FILTER AUTHOR
        else if (param.authorId !== undefined) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/show?author_id=${param.authorId}`
                )
                .then((response) => {
                    const books = response.data.data;
                    console.log(books);
                    setShow(books);
                })
                .catch((error) => console.error(`Error: ${error}`));
        } 
        // API FILTER STAR
        else if (param.star !== undefined) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/show?rating_start=${param.star}`
                )
                .then((response) => {
                    const books = response.data.data;
                    console.log(response);
                    setShow(books);
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    useEffect(() => {
        loadProduct();    
    }, []);

    // LOOP THE BOOK ARRAY

    console.log(show);
    return (
        <div className="row">


            {show.map((book, index) => {
                // CARD BOOK
                return <CardBooks book={book} key={index}/>;
            })} 
            
        </div>
    );
}
