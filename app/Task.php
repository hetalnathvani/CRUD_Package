<?php

// namespace hetal\crud;
namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    protected $table = 'tasks';

    protected $fillable = [
        'name',
    ];
}
