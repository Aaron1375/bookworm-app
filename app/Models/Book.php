<?php

namespace App\Models;

use App\Http\Resources\BookCollection;
use Carbon\Carbon;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';
    // protected $parPage = 1;

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function discounts()
    {
        return $this->hasMany(Discount::class);
    }

    public function scopeGetListBooks($query)
    {
        return $query
            ->leftjoin('author', 'book.author_id', 'author.id')
            ->leftjoin('discount', 'discount.book_id', 'book.id')
            ->leftjoin('category', 'book.category_id', 'category.id')
            ->leftjoin('review', 'book.id', 'review.book_id')
            ->select(
                'book.id',
                'book.book_title',
                'book.book_summary',
                'book.book_cover_photo',
                'book.author_id',
                'book.book_price',
                'author.author_name',
                'category.category_name',
                'discount.discount_price',
                'discount.discount_start_date',
                'discount.discount_end_date'
                
            )
            ->groupBy('book.id', 'discount.id', 'author.id', 'category.id');
    }

    public static function staticFinalPrice($query){
        return $query->selectRaw('CASE
            when discount_start_date <= now()
            AND (discount_end_date >= now()
            OR discount_end_date IS NULL)
            THEN (book_price - discount_price)
            ELSE book_price
            END as final_price'
        );
    }

    public static function staticMostRating($query){
        return $query->selectRaw(
            'COALESCE(AVG(review.rating_start), 0.0) as most_rating'
        );
    }

    public static function staticPopular($query){
        return $query->selectRaw(
            'CASE
            WHEN discount_start_date <= now()
            AND (discount_end_date >= now()
            OR discount_end_date IS NULL)
            THEN (book_price - discount_price)
            ELSE book_price
            END as final_price,
            COUNT(review.rating_start) as most_rating'
        );
    }


    public function scopeAuthorName($query, $request)
    {
        if ($request->has('author_name')) {
            $query->where('author_name', $request->author_name);
        }
        return $query;
    }

    public function scopeCategoryName($query, $request)
    {
        if ($request->has('category_name')) {
            $query->where('category_name', $request->category_name);
        }
        return $query;
    }

}
