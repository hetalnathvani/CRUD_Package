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

// Routes of Mutator
Route::get('mutator/index', 'MutatorController@index');

// Routes of Accessor & Closure
Route::get('accessor/index', 'AccessorController@index');

// Routes of Gate - Private Page for Logged in User - Auth
Route::get('/private', 'HomeController@private')->name('private');

// Routes of Observer
Route::get('item', 'ItemController@create')->name('item.create');
Route::post('item', 'ItemController@store')->name('item.store');

//Above Routes can be defined as follows too...
// Route::get('/item', [ 'as' => 'item.create', 'uses' => 'ItemController@create']);
// Route::post('/item/store', [ 'as' => 'item.store', 'uses' => 'ItemController@store']);

// Routes of Eager Loading and Lazy Loading
Route::get('/category/create', 'CategoryController@create')->name('category.create');
Route::post('category/store', 'CategoryController@store')->name('category.store');
Route::get('category', 'CategoryController@index')->name('category.index');


Route::get('pdfview',array('as'=>'pdfview','uses'=>'ItemController@pdfview'));
