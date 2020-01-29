<?php

namespace App\Http\Controllers;

use App\Item;
use PDF;
use Illuminate\Http\Request;
use DB;

class ItemController extends Controller
{
    //
    public function create()
    {
        return view('create');
    }

    public function store(Request $request)
    {
        $item = new Item;
        $item->name = $request->get('name');
        $item->price = $request->get('price');
        $item->save();

        return 'Stored the data';
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function pdfview(Request $request)
    {
        $items = DB::table("items")->get();
        view()->share('items',$items);


        if($request->has('download')){
            $pdf = PDF::loadView('pdfview');
            return $pdf->download('pdfview.pdf');
        }


        return view('pdfview');
    }
}
