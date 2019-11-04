<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AccessorController extends Controller
{
    //
    public function index()
    {
        // load post
        $post = Post::find(3);
         
        // check the name property
        echo $post->name;
         
        // check the date property
        echo $post->published_at;
         
        // as we've mutated the published_at column as Carbon date, we can use following as well
        echo $post->published_at->getTimestamp();
        exit;
    }
}
