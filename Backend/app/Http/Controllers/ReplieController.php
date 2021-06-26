<?php

namespace App\Http\Controllers;

use App\Models\Replie;
use App\Models\Ticket;
use Illuminate\Http\Request;

class ReplieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $ticket = Ticket::findOrfail($request->id);

        Replie::create([
            'content' => $request->content,
            'ticket_id' => $ticket->id,
        ]);
        return response()->json([
            'data' => 'Created replie successfully! with ticket id = '.$request->id
        ],200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Replie  $replie
     * @return \Illuminate\Http\Response
     */
    public function show(Replie $replie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Replie  $replie
     * @return \Illuminate\Http\Response
     */
    public function edit(Replie $replie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Replie  $replie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Replie $replie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Replie  $replie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Replie $replie)
    {
        //
    }
}