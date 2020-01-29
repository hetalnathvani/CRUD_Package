<?php

namespace check\ip;

use check\ip\CheckIpController;
use Illuminate\Database\Eloquent\Model;

class CheckIp extends Model
{
    //
    protected $checkip;

    public function __construct()
    {
        $checkip = $this->sum(6,8);
        return $checkip;
    }
}
