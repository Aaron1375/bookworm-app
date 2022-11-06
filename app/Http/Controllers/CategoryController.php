<?php

namespace App\Http\Controllers;

use App\Repositories\CategoryRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $categoryRepository;
    
    public function __construct(CategoryRepository $CategoryRepository)
    {
        $this->categoryRepository = $CategoryRepository;
    }

    public function getCategory()
    {
        return $this->categoryRepository->getCategory();
    }
}
