<?php

namespace App\Repositories;

use App\Http\Resources\BookCollection;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookRepository
{

    // DB::enableQueryLog();
    // dd(DB::getQueryLog());

    // Get top 10 books with the most discount
    // public function showDiscount(){
    //     $query = Book::select(DB::raw('(book_price - discount_price) as sub_price'))
    //             ->join('discount', 'discount.id' , '=' , 'book.id')
    //             ->orderBy('sub_price', 'desc')
    //             ->limit(10)
    //             ->get();
    //     return $query;
    // }
    public function showDiscount()
    {
        $book = Book::getListBooks()
            ->subPrice()
            ->orderBy('sub_price', 'desc');
        $book = Book::staticFinalPrice($book)
            ->limit(10)
            ->get();

        $books = new BookCollection($book);
        return $books;
    }

    // get top 8 books with most rating starts
    public function showRecommended()
    {
        $book = Book::getListBooks()
            ->orderBy('most_rating', 'desc');

        $book = Book::staticMostRating($book)
            ->limit(8)
            ->get();

        $books = new BookCollection($book);
        return $books;
    }

    public function showPopular()
    {
        $book = Book::getListBooks()
            ->orderBy('most_rating', 'desc')
            ->orderBy('final_price', 'asc');
        $book = Book::staticPopular($book)
            ->limit(8)
            ->get();

        $books = new BookCollection($book);
        return $books;
    }

    public function sortBySale(Request $request)
    {

        $book = Book::getListBooks()
            ->subPrice()
            ->authorId($request)
            ->categoryId($request)
            // ->orderBy('sub_price', 'desc')
            ->mostRating($request);

        // Another way to set url
        if ($request->input('onsale')) {
            $book->orderBy('sub_price', 'desc');
        }
         
        if ($page = $request->input('per_page')) {
            $book
                ->paginate($page);
        }

        // if ($request->input('sort') == 'onsale') {
        //     $book
        //         ->orderBy('sub_price', 'desc');
        // }
        if ($request->input('sort') == 'hightolow') {
            $book
                ->orderBy('final_price', 'desc');
        }
        if ($request->input('sort') == 'lowtohigh') {
            $book
                ->orderBy('final_price', 'asc');
        }
        if ($request->input('sort') == 'popular') {
            $book
                ->orderBy('most_rating', 'desc')
                ->orderBy('final_price', 'asc');
        }
        // if ($sort = $request->input('sortprice')) {
        //     $book
        //         ->orderBy('discount_price', $sort);
        // }
        // $book->authorName($request)
        // ->categoryName($request);

        $book = Book::staticPopular($book)
            ->get();
        $books = new BookCollection($book);
        return $books;
    }

    public function findById($id)
    {
        // $book = Book::bookDetail();
        $book = Book::bookDetail();

        $book->find($id);

        return $book->get();
    }
}
