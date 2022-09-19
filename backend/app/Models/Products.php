<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'description',
        'sub_category_id',
    ];
    public function getPhotos()
    {
        return $this->morphMany(Photos::class, 'imageable');
    }
    public function getSubCategories(){
        return $this ->hasMany(SubCategories::class,"sub_category_id","id");
    }
    public function getStoreProduts(){
        return $this ->belongsTo(StoreProducts::class,"id","product_id");
    }
}
