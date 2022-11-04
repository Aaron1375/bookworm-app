<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            //Category
            'category_name' => $this->category_name,
            // author
            'author_name' => $this->author->author_name,
            //Book 
            'book_cover_photo' => $this->book_cover_photo ? $this->book_cover_photo : 'book1',
            'book_title' => $this->book_title,
            'book_price' => $this->book_price,
            'final_price' => $this->final_price,
            'sub_price' => $this->sub_price,
            // discount
            'discount_price' => $this->discount_price,
            'discount_start_date' => $this->discount_start_date,
            'discount_end_date' => $this->discount_end_date,
            'most_rating' => $this->most_rating,
            
            // review
            // 'reviews' => $this->reviews,
            // 'reviews' => ReviewResource::collection($this->reviews)
        ];
    }
}
