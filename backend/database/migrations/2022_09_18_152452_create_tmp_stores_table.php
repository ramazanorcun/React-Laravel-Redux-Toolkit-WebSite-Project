<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

Schema::create('tmp_stores', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->bigInteger('telefon_numarası');
    $table->string('email');
    $table->integer('user_id')->constrained();
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tmp_stores');
    }
};
