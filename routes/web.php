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

// Route of Welcome Page 
Route::get('/', function () {
    return view('welcome');
});

// Routes of Auth by Laravel 
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Routes of Check IP Package with Middleware
Route::get('my-web', ['middleware' => ['checkIp']],  function () {
    return view('check');
});

// Routes for using Check IP package in this project
Route::get('/user', 'UserController@getData');
