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
    // protected $perPage = 1;
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
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
                'book.category_id',
                'discount.discount_price',
                'discount.discount_start_date',
                'discount.discount_end_date'

            )
            ->groupBy('book.id', 'discount.id', 'author.id', 'category.id');
    }

    public static function staticFinalPrice($query)
    {
        return $query->selectRaw(
            'CASE
            when discount_start_date <= now()
            AND (discount_end_date >= now()
            OR discount_end_date IS NULL)
            THEN (book_price - discount_price)
            ELSE book_price
            END as final_price'
        );
    }
    public function scopeSubPrice($query)
    {
        return $query
            ->selectRaw('CASE
                        WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN book_price - discount_price
                        WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN book_price - discount_price
                        ELSE 0
                        END AS sub_price');
    }

    public static function staticMostRating($query)
    {
        return $query->selectRaw(
            'COALESCE(AVG(review.rating_start), 0.0) as most_rating'
        );
    }



    public static function staticPopular($query)
    {
        return $query->selectRaw(
            'CASE
            WHEN discount_start_date <= now()
            AND (discount_end_date >= now()
            OR discount_end_date IS NULL)
            THEN (book_price - discount_price)
            ELSE book_price
            END as final_price,
            COUNT(review.id) as most_rating,
            COALESCE(AVG(review.rating_start), 0.0) as rating_start'
        );
    }


    public function scopeAuthorId($query, $request)
    {
        if ($request->has('author_id')) {
            $query->where('author_id', $request->author_id);
        }
        return $query;
    }

    public function scopeCategoryId($query, $request)
    {
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        return $query;
    }

    public function scopeMostRating($query, $request)
    {
        if ($request->has('rating_start')) {
            $query->where('rating_start', '>=', $request->rating_start)
                ->orderBy('rating_start', 'asc')
                ->groupBy('rating_start');
        }
        return $query;
    }

    public function scopeBookDetail($query)
    {
        return $query
            ->leftjoin('author', 'book.author_id', 'author.id')
            ->leftjoin('discount', 'discount.book_id', 'book.id')
            ->leftjoin('category', 'book.category_id', 'category.id')
            ->leftjoin('review', 'book.id', 'review.book_id')

            ->select(
                'book.id',
                'book.book_cover_photo',
                'book.book_title',
                'book.book_summary',
                'author.author_name',
                'category.category_name',
                'book.book_price',
                'discount.discount_price',
            )
            ->selectRaw('CASE
                        WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN book_price - discount_price
                        WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN book_price - discount_price
                        ELSE 0
                        END AS sub_price,
                        COALESCE(AVG(review.rating_start), 0.0) as rating_start')
            ->groupBy('book.id', 'discount.id', 'author.id', 'category.id');
    }
}
