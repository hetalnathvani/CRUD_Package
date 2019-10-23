<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use check\ip\CheckIpController;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    //
    public function getData()
    {
        $object = new CheckIpController;
        var_dump($object);   
    }
}
