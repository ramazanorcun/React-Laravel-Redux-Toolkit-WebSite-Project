<?php

namespace App\Http\Controllers;

use App\Models\SubCategories;
use Illuminate\Http\Request;

class SubCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subCategories = SubCategories::get()->all();
        return response()->json(['SubCategories'=>$subCategories]);

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
        $subCategories = new SubCategories();
        $subCategories ->name = $request ->name;
        $subCategories ->main_category_id = $request ->main_category_id;
        $subCategories ->save();
        return response()->json(['SubCategories'=>$subCategories]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubCategories  $subCategories
     * @return \Illuminate\Http\Response
     */
    public function show(SubCategories $subCategories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubCategories  $subCategories
     * @return \Illuminate\Http\Response
     */
    public function edit(SubCategories $subCategories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubCategories  $subCategories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $subCategories = subCategories::find($id);
        $subCategories->name=$request->name;
        $subCategories->main_category_id=$request->categoryId;

        $subCategories-> update();
        return response()->json(['SubCategories'=>$subCategories]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubCategories  $subCategories
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $subCategories = SubCategories::find($id);
        $subCategories->delete();
        return response()->json(['SubCategories'=>$subCategories]);
    }

}
