<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainCategories extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
    ];
    public function getMainCategories(){
        return $this -> hasMany(MainCategories::class,"id","main_category_id");
    }
}
