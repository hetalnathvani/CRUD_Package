<?php


// Routes for Middleware to check if the IP Address is valid or not

Route::middleware(['checkIp'])->group(function () {
   Route::get('/check', 'check\ip\CheckIpController@add');
});