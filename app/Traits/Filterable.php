<?php
    namespace App\Traits;

    use Illuminate\Database\Eloquent\Builder;
    use App\Filters\QueryFilter;

    trait Filterable{
        public function scopeFilter(Builder $builder, QueryFilter $filter, array $filterFields = ['*'], array $orderFields = []){
            return $filter->apply($builder, $filterFields, $orderFields);
        }
    }

?>