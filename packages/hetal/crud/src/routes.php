<?php


Route::get('/calc', function(){
        echo "Hello World";
    }   
);
Route::resource('/task', 'hetal\crud\TaskController');
