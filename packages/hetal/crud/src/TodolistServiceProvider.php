<?php

namespace hetal\crud;

use Illuminate\Support\ServiceProvider;

class TodolistServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->make('hetal\crud\TaskController');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
        // $this->app->register(HtmlServiceProvider::class);
        // $loader = AliasLoader::getInstance();
        // $loader->alias('Form', '\Collective\Html\FormFacade');
        
        $this->loadRoutesFrom(__DIR__.'/routes.php');
        $this->loadMigrationsFrom(__DIR__.'/hetal/crud/migrations');
        $this->loadViewsFrom(__DIR__.'/views', 'crud');
        // $this->publishes([
        //     __DIR__.'/views' => base_path('resources/views/hetal/crud'),
        // ]);
        \Config::set('database.connections.db_crud_pkg',
        \Config::get('package::database.connections.db_crud_pkg'));
        
    }
}
