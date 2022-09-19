<?php

namespace App\Http\Controllers;

use App\Models\Photos;
use Illuminate\Http\Request;

class PhotosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $photos =Photos::get();
        return response()->json(['Photos'=>$photos]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $photos = new Photos();
        $photos -> url = $request ->url;
        $photos ->table_name = $request ->table_name;
        $photos ->table_id = $request -> table_id;
        $photos ->type = $request -> table_id;
        $photos ->save();
        return response()->json(['Photos'=>$photos]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function show(Photos $photos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function edit(Photos $photos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photos $photos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $photos = Photos::find($id);
        $photos ->delete();
        return response()->json(['Photos'=>$photos]);
    }
}
