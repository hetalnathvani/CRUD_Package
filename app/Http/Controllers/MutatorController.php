<?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Controllers\Controller;

class MutatorController extends Controller
{
    //
    public function index()
    {
        // create a new post object
        $post = new Post;
        $post->setAttribute('name', 'Post TiTle');dd($post);
        //Not saving data in Database
        $post->save();
        return $post;
    }   
}
