<?php

namespace App\Http\Controllers;

use App\Models\TmpStore;
use Illuminate\Http\Request;
use App\Models\Stores;
use App\Models\User;

class TmpStoreController extends Controller
{


     /**

     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tmpStore = TmpStore::get()->all();
            return response()->json(['TmpStore'=>$tmpStore]);
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
        $tmpStore = new TmpStore();
            $tmpStore ->name= $request ->name;
            $tmpStore ->telefon_numarası= $request ->telefon_numarası;
            $tmpStore ->email= $request ->email;
            $tmpStore ->user_id= $request ->user_id;
            $tmpStore -> save();
            return response()->json(['TmpStore', $tmpStore]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TmpStore  $tmpStore
     * @return \Illuminate\Http\Response
     */
    public function show(TmpStore $tmpStore)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TmpStore  $tmpStore
     * @return \Illuminate\Http\Response
     */
    public function edit(TmpStore $tmpStore)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TmpStore  $tmpStore
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tmpStore = TmpStore::find($id);
        $user = User::find($tmpStore->user_id);

        $store =new Stores([
            'name' => $tmpStore -> name,
            'phone' => $tmpStore -> telefon_numarası,
            'email' =>$tmpStore-> email

        ]);
        $store -> save();
        $user->update(["store_id"=>$store->id,"user_level"=>2]);
        $tmpStore->delete();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TmpStore  $tmpStore
     * @return \Illuminate\Http\Response
     */
    public function destroy(TmpStore $tmpStore)
    {
        //
    }

}
