<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Review extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'review';

    public function Book(){
        return $this->belongsTo(Book::class);
    }

    public function getRatingStar(){
        $rating = Review::select('rating_start', DB::raw('count(book_id) as count'))
            ->groupBy('rating_start')
            ->get();
    }
}
