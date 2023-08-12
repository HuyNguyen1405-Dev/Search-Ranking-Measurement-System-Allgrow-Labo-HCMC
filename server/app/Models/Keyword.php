<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "keyword";
    protected $primaryKey = 'id';
    protected $fillable = [
        'keyword',
        'url_id'
    ];
}