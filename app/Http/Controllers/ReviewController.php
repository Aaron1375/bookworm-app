<?php

namespace App\Http\Controllers;

use App\Repositories\ReviewRepository;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    protected $reviewRepository;

    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }

    // public function index(){
    //     return $this->reviewRepository->index();
    // }

    public function showReview(Request $request, $id){
        return $this->reviewRepository->getReviewByBookId($request, $id);
    }
}
