<?php

namespace App\Repositories;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewRepository
{
    // public function index(){
    //     $reviews = Review::all();

    //     return response()->json([
    //         'review' => $reviews
    //     ], 200);
    // }

    public function getReviewByBookId(Request $request, $id)
    {
        $review = Review::where('book_id', $id);

        if ($request->input('sort') == 'old_to_new') {
            $review
                ->orderBy('review_date', 'asc');
        }
        if ($request->input('sort') == 'new_to_old') {
            $review
                ->orderBy('review_date', 'desc');
        }

        if ($page = $request->input('per_page')) {
            $review
                ->paginate($page);
        }
        return $review->get();
    }

    // GET OK

    // public function getReviewByBookId($id)
    // {
    //     $review = Review::where('book_id', $id);
    //     return $review->get();
    // }
}
