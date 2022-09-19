<?php

namespace App\Http\Controllers;

use App\Models\TmpWorker;
use Illuminate\Http\Request;
use Mail;
use Illuminate\Support\Facades\Hash;


class TmpWorkerController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tmpWorker = TmpWorker::get()->all();
            return response()->json(['TmpWorker'=>$tmpWorker]);
    }
    public function send(Request $request)
    {
       $email=$request ->email;
       $key = \Hash::make($email);
       $array=[
        'url'=>'http://localhost:3000/Login?key='.$key,
       ];
       $tmpWorker = new TmpWorker;([
        'key'=>$key,
        'store_id'=>$request ->store_id,
       ]);
       $tmpWorker ->save();
        Mail::send('hosgeldin',$array,function($message)use($email){
            $message->subject('hosgeldin');
            $message->to($email);
        });
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TmpWorker  $tmpWorker
     * @return \Illuminate\Http\Response
     */
    public function show(TmpWorker $tmpWorker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TmpWorker  $tmpWorker
     * @return \Illuminate\Http\Response
     */
    public function edit(TmpWorker $tmpWorker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TmpWorker  $tmpWorker
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TmpWorker $tmpWorker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TmpWorker  $tmpWorker
     * @return \Illuminate\Http\Response
     */
    public function destroy(TmpWorker $tmpWorker)
    {
        //
    }
}
