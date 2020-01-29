<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        // Eager Loading
        $categories = Category::with(['user'])->get();
        
        // Lazy Loading
        $categories = Category::get();
    
        return view('category.index', compact('categories'));
    }
    
    //Create Categories
    public function create()
    {
        return view('category.create');
    }

    // Store the Categoris
    public function store(Request $request)
    {
        $category = new Category;
        $category->title = $request->get('title');
        $category->user()->associate($request->user());

        $category->save();

        return 'Success';
    }
}
