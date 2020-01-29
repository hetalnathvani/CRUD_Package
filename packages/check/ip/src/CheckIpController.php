<?php

namespace check\ip;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CheckIpController extends Controller
{
    //

    /**
     * add function
     * 
     * This Function returns IP address of Host if valid.
     * 
     * @param Request $request
     * @return View
     */
    public function add(Request $request){

        echo $request->ip();
        return View('ip::check');
    }
}
