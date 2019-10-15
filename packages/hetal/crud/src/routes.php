<?php


Route::get('/calc', function(){
        echo "Hello World";
    }   
);
Route::group(['middleware' => ['web']], function () {
    //routes here

    Route::resource('/task', 'hetal\crud\TaskController');

});
