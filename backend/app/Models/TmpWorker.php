<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TmpWorker extends Model
{
    use HasFactory;
    protected $fillable=[
        'key',
        'store_id'
    ];
}
