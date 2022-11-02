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
            'book_title' => $this->book_title,
            'book_price' => $this->book_price,
            'book_cover_photo' => $this->book_cover_photo,
            'author_name' => $this->author->author_name,
            'author_id' => $this->author_id,
            'category_name' => $this->category_name,
            'discount_price' => $this->discount_price,
            'discount_start_date' => $this->discount_start_date,
            'discount_end_date' => $this->discount_end_date,
            'final_price' => $this->final_price,
            // 'onsale' => $this->onsale,
            'most_rating' => $this->most_rating
        ];
    }
}
