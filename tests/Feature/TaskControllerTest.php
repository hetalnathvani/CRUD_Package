<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{

    use WithoutMiddleware;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->followingRedirects()
            ->post('/task/store', ['name' => 'Anushka'])
            ->assertStatus(200);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testNumericNameTest()
    {
        $this->withExceptionHandling()->followingRedirects()
            ->post('/task/store', ['name' => 131235])
            ->assertSessionHasErrors('name');
    }

    public function testEmptyNameTest()
    {
        $this->withExceptionHandling()->followingRedirects()
            ->post('/task/store', ['name' => ' '])
            ->assertSessionHasErrors('name');
    }

    public function testListedTasks()
    {
        $response = $this->get('/task');
        $response->assertSuccessful();
        $response->assertStatus(200);
    }

    public function testTasksInDbFailed()
    {
        $response = $this->assertDatabaseMissing('tasks', [
            'name' => 'Hetalhjdsfg',
        ]);
    }

    public function testUpdateTask()
    {
        $task = factory('App\Task')->create();

        $task->name = "Updated Name";

        $response = $this->get('/task' . $task->id, $task->toArray()); // your route to update task data
        //The task should be updated in the database.
        $task->update();
        $response = $this->assertDatabaseHas('tasks', ['name' => $task->name]);
    }
    public function testDeleteTask()
    {
        $task = factory('App\Task')->create();

        // $this->post('\task'.$task->id); // your route to delete Task
        //The task should be deleted from the database.
        $response = $this->get('/task' . $task->id);
        $task->delete();
        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }

    public function testUpdateNullTask()
    {
        $task = factory('App\Task')->create();
        // $response = $this->get('/task/' . $task->id . '/edit');
        // $response->assertStatus(200);
        $data = ['name' => ' '];
        $edit = $this->post('/task/' . $task->id . '/edit', $data);
        $edit->assertStatus(302);
    }

    public function testUpdateNumericTask()
    {
        $task = factory('App\Task')->create();
        // $response = $this->get('/task/' . $task->id . '/edit');
        // $response->assertStatus(200);
        $data = ['name' => '1234'];
        $edit = $this->post('/task/' . $task->id . '/edit', $data);
        $edit->assertStatus(302);
    }
}
