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
            ->orderBy('final_price', 'asc');
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
        return response()->json([
            'ListBook' => $books
        ], 200);
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
        return response()->json([
            'ListBook' => $books
        ], 200);
    }

    public function showAllBooks(Request $request)
    {
        $book = Book::getListBooks()
        ->authorName($request)
            ->categoryName($request)
            ->orderBy('book.id', 'asc');
        $book->paginate();
        $book = Book::staticPopular($book)
        ->get();

        $books = new BookCollection($book);
        return response()->json([
            'ListBook' => $books
        ], 200);
    }

    public function findById(Request $request, $id)
    {
        // $book = Book::find($id);
        
        $book = Book::getListBooks();
        $books = new BookCollection($book);
        return response()->json([
            'ListBook' => $books
        ], 200);
    }

    
    public function sortPrice()
    {
        $books = Book::all();

        $books = $books->sortBy(function ($book) {
            return $book->finalPrice;
        });
        return $books;
    }

    public function sortPriceDesc()
    {
        $books = Book::all();

        $books = $books->sortByDesc(function ($book) {
            return $book->finalPrice;
        });

        return $books;
    }
}
