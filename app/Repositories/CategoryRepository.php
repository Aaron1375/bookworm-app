<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository{
    public function getCategory()
    {    
        return Category::all(['id','category_name']);
    }
}
