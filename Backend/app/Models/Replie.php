<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Replie extends Model
{
      protected $fillable = ['content', 'ticket_id'];
      public function ticket()
  {
    return $this->belongsTo('App\Model\ticket');
  }
}