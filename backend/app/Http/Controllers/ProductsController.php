<?php

namespace App\Http\Controllers;
use App\Models\Photos;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Products::with("getPhotos")->get();
        // $products = Products::get();
        // return response()->json(['Products'=>$products]);
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
        // return $request;
        $validator = validator()->make($request->all(),[
            'name' => 'required',
            'description' => 'required',
            'sub_category_id' => 'required',
            'images' => 'required',
        ]);

        $products = new Products([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'sub_category_id' => $request->input('sub_category_id'),

        ]);
        $products -> save();


        $files = $request->file("images");
        $i = 0 ;
        foreach ($files as $file) {
            $data = new Photos();

            $imageName = time().'_'. $file->getClientOriginalName();
            $file->move(\public_path('Image'),$imageName);

            $data->imageable_type = Products::class;
            $data->imageable_id = $products->id;
            $data->type = $i;
            $data->path = $imageName;
            $data->save();
            $i +=1;
        }

        $newData = $products->load("getPhotos");

        return $newData;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Products $products,$id)
    {
        $products = Products::find($id);
        $products->name=$request->name;
        $products->description=$request->description;
        $products-> update();



        // if($request->images != ''){
        //      $path = public_path().'/Image';

        //      //code for remove old file
        //      if($products->images != ''  && $products->images != null){
        //           $file_old = $path.$products->images;
        //           unlink($file_old);
        //      }

        //      //upload new file
        //      $file = $request->file;
        //      $filename = $file->getClientOriginalName();
        //      $file->move($path, $filename);

        //      //for update in table
        //      $products->update(['images' => $filename]);
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $products = Products::find($id);
        $products ->delete();
        return response()->json(['Products'=>$products]);
    }
}
