<?php

namespace App\Http\Controllers;

use App\Models\MainCategories;
use Illuminate\Http\Request;

class MainCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mainCategory=MainCategories::get();
        return response()->json($mainCategory);
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
    function add(Request $request)
    {
       $mainCategory=  new MainCategories;
       $mainCategory-> name=$request->name;
       $mainCategory->Save();
       return response()->json($mainCategory) ;
   }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MainCategories  $mainCategories
     * @return \Illuminate\Http\Response
     */
    public function show(MainCategories $mainCategories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MainCategories  $mainCategories
     * @return \Illuminate\Http\Response
     */
    public function edit(MainCategories $mainCategories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MainCategories  $mainCategories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $mainCategory = MainCategories::find($id);
        $mainCategory->name=$request->name;
        $mainCategory-> update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainCategories  $mainCategories
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mainCategory = MainCategories::find($id);
        $mainCategory ->delete();
        return response()->json($mainCategory);
    }
}
