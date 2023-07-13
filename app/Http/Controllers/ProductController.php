<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Vendor;
use Carbon\Exceptions\Exception;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
/*
@author Uday soni
class ProductController
create new controller for intract with products   
*/

class ProductController extends Controller
{
    /*create new method for  Retrieve all products*/
    public function index()
    {
        $products = Product::join('vendor', 'Product.vendorid', '=', 'vendor.id')
            ->select('Product.*', 'vendor.Name as vName', 'vendor.id as vendorid')
            ->get();
    
        return response()->json($products);
    }

    public function store(Request $request)
    {
        /*create new method for  Store a new product*/

        // Validate the request data
        $validator = Validator::make($request->all(), [
                'Name' => 'required|string|max:255',
                'Sku' => 'required|string|max:16',
                'InstockQuantity' => 'required|numeric|min:0|max:999999',
                'SalePrice' => 'required|numeric|min:0|max:999999.99',
                'Text.*' => '',
                'vendorid.*'=>''
        ]);

        if ($validator->fails()) {
            // If validation fails, return the error messages
            return response()->json(['error' => $validator->errors()->all()], 409);
        }

        // Create a new product instance and save it
        $product = new Product();
        $product->Name = $request->Name;
        $product->Description = $request->Description;
        $product->Sku = $request->Sku;
        $product->InstockQuantity = $request->InstockQuantity;
        $product->SalePrice = $request->SalePrice;
        $product->Text = !empty($request->Text) ? $request->Text : 'N.A';
        $product->vendorid = $request->vendorid;
        $product->save();

        // Return a success response
        return Response::json(['message' => 'Product successfully added']);
    }

    public function edit($id)
    {
        /*create new method for Retrieve a specific product for editing*/

        $product = Product::find($id);
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Name' => 'required',
            'Sku' => 'required',
            'InstockQuantity' => 'required',
            'SalePrice' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $product->update($request->all());
        return response()->json($product);
    }

    public function destroySoftDelete($id)
    {

        /*create new method for Soft delete a product*/
        $product = Product::find($id);
        $product->delete();

        // Return a success response
        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function forcedelete($id)
    {
        /*create new method for force delete a product*/

        Product::where('id', $id)->forceDelete();

        // Return a success response
        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function showvendor()
    {
        $product = Vendor::all();
        return response()->json($product);
    }
    public function getProductsWithVendor()
    {
        $products = Product::with('Vendor')->get();

        return response()->json($products);
    }
}
