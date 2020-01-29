<?php

namespace check\ip;

use Illuminate\Support\ServiceProvider;

class CheckIpServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->make('check\ip\CheckIpController');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
        include __DIR__.'/routes.php';
        $this->loadViewsFrom(__DIR__.'/views', 'ip');
    }
}
