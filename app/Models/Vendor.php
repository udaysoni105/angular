<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;
    
protected $table = 'vendor';   
protected $fillable = ['id', 'Name', 'Email', 'City', 'State', 'Country'];
}

