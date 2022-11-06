<?php

namespace App\Repositories;

use App\Models\Author;

class AuthorRepository
{
    public function getAuthor()
    {
        return Author::all(['id', 'author_name']);
    }
}
