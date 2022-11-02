<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Public Route
Route::get('/home/discount', [BookController::class, 'showBooksDiscount']);
Route::get('/home/recommended', [BookController::class, 'recommended']);
Route::get('/home/popular', [BookController::class, 'showPopular']);
Route::get('/books', [BookController::class, 'show']);

Route::post('/login', [AuthController::class, 'login']);

// Protected Route
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

// API test
// Route::get('/books/testresource', function(){
//     return DiscountResource::collection(Discount::all());
// });

// Route::get('/books/testcollection', function(){
//     return new BookCollection(Book::all());
// });