<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $data = [
            'fname' => 'Hetal',
            'lname' => 'Nathvani',
        ];

        return Inertia::render('Dashboard/index', $data);
    }
}
