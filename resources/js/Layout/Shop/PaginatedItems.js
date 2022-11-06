// import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';


// // Example items, to simulate fetching from another resources.

// export default function PaginatedItems(props) {
//     const { book } = props;
//     const [currentItems, setCurrentItems] = useState([]);
//     const [pageCount, setPageCount] = useState(0);
//     const [itemOffset, setItemOffset] = useState(0);
//     const itemsPerPage = 6;

//     useEffect(() => {
//         const endOffset = itemOffset + itemsPerPage;
//         console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//         setCurrentItems(book.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(book.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage, book]);

//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % book.length;
//         console.log(
//             `User requested page number ${event.selected}, which is offset ${newOffset}`
//         );
//         setItemOffset(newOffset);
//     };

//     return (
//         <>  
//             <div className=''>
//                 {currentItems.map((book) => {
//                     return (
//                         <div>   
//                             {book.book_title}
//                         </div>
//                     )
//                 })}
//             </div>
//             <ReactPaginate
//                 breakLabel="..."
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={5}
//                 pageCount={pageCount}
//                 previousLabel="< previous"
//                 renderOnZeroPageCount={null}
//             />
//         </>
//     );
// }

// // Add a <div id="container"> to your HTML to see the componend rendered.
