<?php


Route::get('/calc', function(){
        echo "Hello World";
    }   
)->name('calc');
Route::group(['middleware' => ['web']], function () {
    //routes here

    Route::resource('/task', 'hetal\crud\TaskController');
    Route::post('/task/store', 'hetal\crud\TaskController@store')->name('store');

});

Route::post('/task/store', 'hetal\crud\TaskController@store')->name('store');
Route::post('/task', 'hetal\crud\TaskController@index')->name('list');