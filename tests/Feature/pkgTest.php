<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class pkgTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_create_method_successfully()
    {
        $response = $this->get('/task/create');
        $response->assertSuccessful();
        $response->assertStatus(200);
    }

    public function test_list_method_successfully()
    {
        $response = $this->get('/task');
        $response->assertSuccessful();
        $response->assertStatus(200);
    }
}
