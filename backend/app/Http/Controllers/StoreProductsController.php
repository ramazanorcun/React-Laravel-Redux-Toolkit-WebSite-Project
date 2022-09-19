<?php

namespace App\Http\Controllers;

use App\Models\StoreProducts;
use Illuminate\Http\Request;

class StoreProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $storeProducts = StoreProducts::get();
        return response()->json(['StoreProducts'=>$storeProducts]);
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
        $storeProducts =new StoreProducts();
        $storeProducts -> store_id = $request ->store_id;
        $storeProducts -> product_id = $request ->product_id;
        $storeProducts -> price = $request ->price;
        $storeProducts -> stock = $request ->stock;
        $storeProducts ->save();
        return response()->json(['StoreProducts'=>$storeProducts]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StoreProducts  $storeProducts
     * @return \Illuminate\Http\Response
     */
    public function show(StoreProducts $storeProducts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StoreProducts  $storeProducts
     * @return \Illuminate\Http\Response
     */
    public function edit(StoreProducts $storeProducts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StoreProducts  $storeProducts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StoreProducts $storeProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StoreProducts  $storeProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $storeProducts =StoreProducts::find($id);
        $storeProducts ->delete();
        return response()->json(['StoreProducts'=>$storeProducts]);
    }
}
