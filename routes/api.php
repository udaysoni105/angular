<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('product',ProductController::class);
Route::get('product',[ProductController::class,'index']);
Route::post('product',[ProductController::class,'store']);
Route::get('product/{id}',[ProductController::class,'show']);
Route::get('product/{id}',[ProductController::class,'edit']);

Route::put('product/update/{id}',[ProductController::class,'update']);
Route::delete('product/{id}', [ProductController::class,'destroySoftDelete']);
Route::delete('hard/{id}', [ProductController::class,'forcedelete']);

Route::get('vendor',[ProductController::class,'showvendor']);

Route::get('productswithvendor', [ProductController::class, 'getProductsWithVendor']);
Route::delete('/vendor/{vendorId}', 'VendorController@delete')->name('vendor.delete');




