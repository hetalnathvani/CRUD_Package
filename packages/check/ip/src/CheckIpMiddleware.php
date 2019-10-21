<?php

namespace check\ip;

use Closure;

class CheckIpMiddleware
{
    public $whiteIps = ['192.168.1.1', '127.0.0.1'];
    /**
     * Handle an incoming request.
     *  
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!in_array(request()->getHost(), $this->whiteIps)) {
    
            /*
                 You can redirect to any error page. 
            */
            return response()->json(['your ip address is not valid.']);
        }
    
        return $next($request);
    }
}
