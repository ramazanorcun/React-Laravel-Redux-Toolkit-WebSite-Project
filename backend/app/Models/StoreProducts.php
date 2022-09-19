<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreProducts extends Model
{
    use HasFactory;
    protected $fillable =[
        'store_id',
        'product_id',
        'price',
        'stock',
    ];
    public function getProducts(){
        return $this->hasOne(Product::class,"product_id","id");
    }
    public function getStores(){
        return $this->hasOne(Store::class,"store_id","id");
    }
}
