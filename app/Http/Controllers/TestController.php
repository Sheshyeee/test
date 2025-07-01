<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function create(){
        return inertia('create/create');
    }
    public function contact(){
        return inertia('contact');
    }
}
