<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('_product__category', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('ProductId');
            $table->unsignedBigInteger('CategoryId');
            $table->foreign('ProductId')->references('id')->on('Product')->onDelete('cascade');
            $table->foreign('CategoryId')->references('id')->on('category')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_product__category');
    }
};
