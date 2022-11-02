<?php
    namespace App\Filters;

    class BookFilter extends QueryFilter{
        protected $filterable = [
            'author_name',
            'category_name'
        ];

        public function filterName($name){
            return $this->builder->where('name', 'like', '%' . $name . '%');
        }
    }

?>