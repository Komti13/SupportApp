<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

 
 
Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return response()->json([
        'name' => 'komti',
        'state' => 'celib',
    ]);

});
Route::get('/data', function () {
    
    return response()->json([
            "id" => 44
        
    ]);

});
Route::get('/komti/{id}', function ($id) {
    return 'Hello World' . $id;
});