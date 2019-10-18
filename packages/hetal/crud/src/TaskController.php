<?php

namespace hetal\crud;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;    
use hetal\crud\Task;
use Illuminate\Routing\Redirect;

class TaskController extends Controller
{
    //
    public function index()
    {
        $tasks = Task::all();
        $submit = 'Add';
        return view('crud::list', compact('tasks', 'submit'));
    }  

    public function create()
    {
        $tasks = Task::all();
        $submit = 'Add';
        return view('crud::create', compact('tasks', 'submit'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|alpha|max:255'
        ]);

        Task::create($request->all());
        return redirect()->route('task.index');
    }

    public function edit($id)
    {
        $tasks = Task::all();
        $task = $tasks->find($id);
        $submit = 'Update';
        return view('crud::edit', compact('tasks', 'task', 'submit'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|alpha|max:255'
        ]);
       
        $data= $request->all();
       
        Task::find($id)->update(['name' => $data['name']]);  
        return redirect()->route('task.index')->with('success','Product updated successfully');                
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return redirect()->route('task.index')->with('success','Contact deleted successfully');
    }

    public function valid(Request $request)
    {
        // Validate and store the blog post...

        $validatedData = $request->validate([
            'name' => 'required|unique:tasks|max:2|min:1',
        ]); 
    }
}
