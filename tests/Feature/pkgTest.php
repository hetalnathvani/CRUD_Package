<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use App\Task;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class pkgTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    
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

    public function testCreateTask()
    {
        // $response = $this->get('/task/create');
        // $response->assertSuccessful();
        // $response->assertStatus(200);

        $task = factory('App\Task')->create();
        
        $response = $this->post('/task/create', $task->toArray());
        //Counts the number of users listed   
        
        $response->assertSee($task->name);
    }

    
    public function testUpdateTask()
    {
        $task = factory('App\Task')->create();
 
        $task->name = "Updated Name";
    
        $response = $this->get('/task'.$task->id, $task->toArray()); // your route to update task data
        //The task should be updated in the database.
        $task->update();
        $response = $this->assertDatabaseHas('tasks',['name'=> $task->name ]); 
    }

    public function testDeleteTask()
    {
        $task = factory('App\Task')->create();
    
        // $this->post('\task'.$task->id); // your route to delete Task
        //The task should be deleted from the database.
        $response = $this->get('/task'.$task->id);
        $task->delete();
        $this->assertDatabaseMissing('tasks',['id'=> $task->id]);
    }
}
