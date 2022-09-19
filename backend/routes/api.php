<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainCategoriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\PhotosController;
use App\Http\Controllers\StoreProductsController;
use App\Http\Controllers\StoresController;
use App\Http\Controllers\SubCategoriesController;
use App\Http\Controllers\TmpStoreController;
use App\Http\Controllers\TmpWorkerController;

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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('register',[AuthController::class,'register']);

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::get('me', [AuthController::class,'me']);

});

Route::post("/addMainCategory",[MainCategoriesController::class,'add']);
Route::get("/mainCategories",[MainCategoriesController::class,'index']);
Route::delete("/deleteMainCategory/{id}",[MainCategoriesController::class,'destroy']);
Route::put("/updateCategory/{id}",[MainCategoriesController::class,'update']);

Route::post("/addSubCategory",[SubCategoriesController::class,'add']);
Route::get("/SubCategory",[SubCategoriesController::class,'index']);
Route::delete("/deleteSubCategory/{id}",[SubCategoriesController::class,'destroy']);
Route::put("/updateSubCategory/{id}",[SubCategoriesController::class,'update']);

Route::post("/addProduct",[ProductsController::class,'add']);
Route::get("/Product",[ProductsController::class,'index']);
Route::delete('/deleteProducts/{id}', [ProductsController::class, 'destroy']);
Route::put("/updateProducts/{id}",[ProductsController::class,"update"]);


Route::post("/addPhotos",[PhotosController::class,'add']);
Route::get("/Photos",[PhotosController::class,'index']);
Route::delete("/deletePhotos/{id}",[PhotosController::class,'destroy']);

Route::post("/addStores",[StoresController::class,'add']);
Route::get("/Stores",[StoresController::class,'index']);
Route::delete("/deleteStores/{id}",[StoresController::class,'destroy']);

Route::post("/addStoreProduct",[StoreProductsController::class,'add']);
Route::get("/StoreProduct",[StoreProductsController::class,'index']);
Route::delete("/deleteStoreProduct/{id}",[StoreProductsController::class,'destroy']);


Route::get("/TmpStore",[TmpStoreController::class,'index']);
Route::post("/addTmpStore",[TmpStoreController::class,'add']);
Route::put("/updateTmpStore/{id}",[TmpStoreController::class,'update']);



Route::post('/mailGonder',[TmpWorkerController::class,'send']);
Route::get('/mail',[TmpWorkerController::class,'index']);

