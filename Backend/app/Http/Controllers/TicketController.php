<?php

namespace App\Http\Controllers;

use App\Http\Resources\Ticket as TicketRresource;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TicketRresource::collection(Ticket::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) //store a ticket in data base and return success message

    {
        $request->validate([
            'category' => 'Required',
            'subject' => 'Required',
            'description' => 'Required',
        ]);
        $ticket = new Ticket([
            'category' => $request->category,
            'subject' => $request->subject,
            'description' => $request->description,
        ]);
        $ticket->save();
        return response()->json([
            'data' => 'Created Ticket successfully!',
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) //update a ticket in data base and return success message

    {
        $request->validate([
            'category' => 'Required',
            'subject' => 'Required',
            'description' => 'Required',
        ]);
        $ticket = Ticket::findOrfail($id);
        $ticket->category = $request->category;
        $ticket->subject = $request->subject;
        $ticket->description = $request->description;
        $ticket->save();
        return response()->json([
            'data' => 'Ticket Updated successfully!',
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}