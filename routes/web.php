<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [PostController::class, 'index'])->name('welcome.show');
Route::get('/create', [TestController::class, 'create'])->name('create.show');
Route::post('/posts/store', [PostController::class, 'store'])->name('create.store');
Route::get('/posts/{id}', [PostController::class, 'show'])->name('show');
Route::delete('/posts/{id}', [PostController::class, 'destroy'])->name('destroy');
Route::get('/contact', [TestController::class, 'contact'])->name('contact.show');
Route::get('/posts/{id}/edit', [PostController::class, 'edit'])->name('edit');
Route::put('/posts/{id}', [PostController::class, 'update'])->name('update');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
 