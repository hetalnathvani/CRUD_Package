<?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Controllers\Controller;

class AccessorController extends Controller
{
    //
    private $data = 5;

    public function index()
    {
        //Closure Demo for using private variable in a function
        $functionReference = function(){
            return $this->data;
        };
        echo $functionReference();

        echo "\n";

        // load post
        $post = Post::find(1);
         
        // check the name property
        echo $post->name;
         
        // check the date property
        echo $post->published_at;
         
        // as we've mutated the published_at column as Carbon date, we can use following as well
        echo $post->published_at->getTimestamp();
        exit;
    }
}
