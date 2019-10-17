@extends('crud::app')

@section('content')
<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Add New Product</h2>
        </div>
    </div>
</div>

@if ($errors->any())
<div class="alert alert-danger">
    <strong>Whoops!</strong> There were some problems with your input.<br><br>
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif


<form action="{{ route('store') }}" method="POST">
    @csrf
    <script>
        function myFunction() {
            var x, text;

            // Get the value of the input field with id="numb"
            x = document.getElementById("numb").value;

            // If x is Not a Number or less than one or greater than 10
            if (isNaN(x)) {
                text = "Input Ok";
            } else {
                text = "Input not valid";
            }
            document.getElementById("demo").innerHTML = text;
        }
    </script>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Name:</strong>
                <input type="text" name="name" class="form-control" placeholder="Name">
            </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary" onclick="myFunction()">Submit</button>
        </div>
    </div>

</form>
@endsection