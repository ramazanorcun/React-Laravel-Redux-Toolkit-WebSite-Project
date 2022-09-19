<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TmpStore extends Model
{
    use HasFactory;
    protected $fillable =[
        'name',
        'telefon_numarası',
        'email',
        'user_id'
    ];
}
