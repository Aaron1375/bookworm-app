<?php

namespace App\Http\Controllers;
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

    public function index(Request $request){
        return $this->bookRepository->sortBySale($request);
    }

    public function show($id){
        return $this->bookRepository->findById($id);
    }


}
