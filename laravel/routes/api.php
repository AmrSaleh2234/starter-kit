<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::get("/evaluations",function(){
   return response(["hello"=>app()->getLocale()]);
});

Route::get('language/{locale}', function ($locale) {
    app()->setLocale($locale);

    return response()->json([
        'app_locale' => app()->getLocale(),
        'message' => 'locale has been sent in backend locale system'
    ]);

    return redirect()->back();

});

