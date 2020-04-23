<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Laravel Vue</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link href="{{asset('css/select2.min.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/slick.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/slick-theme.css')}}" rel="stylesheet" type="text/css">

    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>

         <script>
           window.Laravel = <?php echo json_encode([
               'csrfToken' => csrf_token(),
            ]); ?>
          </script>
        <script src="{{asset('js/app.js')}}"></script>
        <script src="{{asset('js/select2.min.js')}}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js"></script>

        <script>
            $('.select2').select2();
        </script>
    </body>
</html>