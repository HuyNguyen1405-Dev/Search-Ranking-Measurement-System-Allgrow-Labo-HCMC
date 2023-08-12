<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Url;
use App\Models\Keyword;

class APIController extends Controller
{
    public function saveData(Request $request){
        $data = $request->json()->all();
        return response()->json(['message' => 'Data received successfully']);
    }
}