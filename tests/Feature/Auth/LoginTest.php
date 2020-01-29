<?php

namespace Tests\Feature\Auth;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSignUp()
    {
        // $response = $this->get('/api/user');
        // $response->assertSuccessful();
        // $response->assertViewIs('auth.login');  
        
        // User::create([
        //     'name' => 'John Doe',
        //     'email' => 'johnn@example.com',
        //     'password' => bcrypt('secret'),
        // ]);

        // Replacing above code with factories..
        // Factories will automatically take users from Database and check login..
        
        // $user = factory(User::class)->make();
        // $response = $this->actingAs($user)->get('/login');
        // $response->assertRedirect('/home');

        $user = factory(User::class)->create([
            'password' => bcrypt($password = 'Admin@123'),
        ]);
        $response = $this->actingAs($user)->get('/login');
        $response->assertRedirect('/home');
        // $response->assertViewHas();
        // $this->assertAuthenticatedAs($user);  
    }

    public function test_user_cannot_login_with_incorrect_password()
    {
        $email = \Config::get('test_variables.email.valid_email');
        $this->post('api/auth/login', [
            'email' => $email,
            'password' => 'Abc#1',
        ])->assertStatus(404);
    }
}
