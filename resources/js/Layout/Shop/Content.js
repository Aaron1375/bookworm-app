import { React, useEffect, useState } from "react";
import axios from "axios";
import CardBooks from "../CardBooks";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

export default function Content() {
    const [show, setShow] = useState([]);
    const baseURL = "http://127.0.0.1:8000/api/show?onsale=desc&per_page=15";

    const param = useParams();
    console.log("category" + param.categoryId);
    console.log("author" + param.authorId);
    console.log(param.star);

    const loadProduct = () => {
        if (param.categoryId === undefined && param.authorId === undefined) {
            // call default api
            axios
                .get(baseURL)
                .then((response) => {
                    const books = response.data.data;
                    setShow(books);
                })
                .catch((error) => console.error(`Error: ${error}`));
        } else if (param.categoryId !== undefined) {
            // get by category
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
        } else if (param.authorId !== undefined) {
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
        } else if (param.star !== undefined) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/show?rating_start=${param.star}`
                )
                .then((response) => {
                    const books = response.data.data;
                    console.log(books);
                    setShow(books);
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    useEffect(() => {
        loadProduct();
    }, []);
    return (
        <div className="row">
            {show.map((book, index) => {
                return <CardBooks book={book} key={index} />;
            })}
            {/* <PaginatedItems/> */}
            <Pagination count={5} />
        </div>
    );
}
