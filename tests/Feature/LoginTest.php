<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testLoginSuccessfully()
    {
        $response = $this->get('/api/user');
        $response->assertSuccessful();
        // $response->assertViewIs('auth.login');      
    }
}
