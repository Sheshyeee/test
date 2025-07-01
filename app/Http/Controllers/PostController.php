<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(10);
        return inertia('welcome', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $incomingData = $request->validate([
           
            'body' => 'required|string',
    
        ]);

    
        Post::create($incomingData);

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */

    public function show($id)
    {
        $post = Post::findOrFail($id);
         return inertia('show', ['post'=> $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return inertia('edit', ['post'=> $post]);
    }
    public function update(Request $request, $id)
    {
         $incomingData = $request->validate([
           
            'body' => 'required|string',
    
        ]);

        $post = Post::findOrFail($id);
    
         $post->update($incomingData);

        return redirect('/');
    }
    

    /**
     * Update the specified resource in storage.
     */
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id){
        $post = Post::findOrFail($id);
        $post->delete();

        return redirect('/');
    }
}
