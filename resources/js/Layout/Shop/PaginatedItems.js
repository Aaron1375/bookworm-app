// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import Filter from "./Aside";

// export default function PaginatedItems({ itemsPerPage }) {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostsPerPage] = useState(10);


//     const lastPage = page * postPerPage;
//     const firstPage = lastPage - postPerPage;
//     const currentPost = books.slice(firstPage, lastPage)

//     useEffect(() => {
//         // Fetch items from another resources.
//         const endOffset = itemOffset + itemsPerPage;
//         console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//         setCurrentItems(items.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(items.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage]);
//     return (
//         <>
//             <ReactPaginate
//                 nextLabel="next >"
//                 onPageChange={(event) => {
//                     setItemOffset((event.selected * perPage) % lastPage)
//                         setCurrentItems(event.selected);
//                 }}
//                 pageRangeDisplayed={3}
//                 marginPagesDisplayed={2}
//                 pageCount={lastPage}
//                 previousLabel="< previous"
//                 pageClassName="page-item"
//                 pageLinkClassName="page-link"
//                 previousClassName="page-item"
//                 previousLinkClassName="page-link"
//                 nextClassName="page-item"
//                 nextLinkClassName="page-link"
//                 breakLabel="..."
//                 breakClassName="page-item"
//                 breakLinkClassName="page-link"
//                 containerClassName="pagination"
//                 activeClassName="active"
//                 renderOnZeroPageCount={null}
//             />
//         </>
//     );
// }
