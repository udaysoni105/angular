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
        Schema::create('Product', function (Blueprint $table) {
            $table->id();
            $table->string('Name');
            $table->string('Description');
            $table->integer('Sku');
            $table->float('InstockQuantity');
            $table->float('SalePrice');
            $table->string('Text')->nullable();
            $table->softDeletes();
            $table->unsignedBigInteger('vendorid');
            $table->foreign('vendorid')->references('id')->on('vendor')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
