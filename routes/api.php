<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Ensure users table has at least 'email' and 'password' columns for authentication
// Generate JWT secret with: php artisan jwt:secret

Route::prefix('api')->group(function () {
    Route::post('login', [AuthController::class, 'login']);

    Route::middleware('jwt.auth')->group(function () {
        Route::get('user', [AuthController::class, 'user']);
        Route::post('logout', [AuthController::class, 'logout']);
    });
});
