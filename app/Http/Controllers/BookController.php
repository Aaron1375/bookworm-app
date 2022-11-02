<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Repositories\BookRepository;
use Illuminate\Http\Request;

class BookController extends Controller
{
    protected $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository; 
    }

    public function showBooksDiscount(Request $request){
        return $this->bookRepository->showDiscount($request);
    }

    public function recommended(){
        return $this->bookRepository->showRecommended();
    }

    public function showPopular(){
        return $this->bookRepository->showPopular();
    }

    public function show(Request $request){
        return $this->bookRepository->showAllBooks($request);
    }


}
