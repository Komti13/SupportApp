<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'category',
        'subject',
        'description',
    ];
    public function replies()
{
  return $this->hasMany('App\Models\Replie');
}
}