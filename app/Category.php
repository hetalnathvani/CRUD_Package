<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // Each Category belongs to a User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
