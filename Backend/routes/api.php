<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use App\Http\Controllers\ReplieController;

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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::resource('tickets', TicketController::class);
Route::resource('replies/{id}', ReplieController::class);