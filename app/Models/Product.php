<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'Product';  
    protected $primarykey ='id';  
    protected $fillable = ['id', 'Name','Description','Sku','InstockQuantity','SalePrice','Text'];
    protected $casts = [
        'Text' => 'array',
    ];
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    } 
}

