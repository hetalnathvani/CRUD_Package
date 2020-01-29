<?php

namespace App\Http\Controllers;

use Gate;
use App\Mail\SendMailable;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Show the application private resources.
     *
     * @return \Illuminate\Http\Response
     */
    public function private()
    {
        if (Gate::allows('admin-only', auth()->user())) {
            return view('private');
        }
    }

    public function mail()
    {
        $name = 'Hetal';
        Mail::to('hetal.nathvani@cygnetinfotech.com')->send(new SendMailable($name));

        return 'Email was sent';
    }
}
