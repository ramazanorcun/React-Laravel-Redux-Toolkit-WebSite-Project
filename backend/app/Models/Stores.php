<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stores extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'adress',
        'phone',
        'email'
    ];

    public function getStores(){
        return $this->belongsTo(User::class,"id","store_id");
    }
    public function getStoreProducts(){
        return $this->hasMany(StoreProducts::class,"id","store_id");
    }
    public function getPhotos(){
        return $this->hasOne(Photos::class,"id","table_id");
    }
}
