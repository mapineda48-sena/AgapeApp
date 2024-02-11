<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Eliminar Personas</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
    <h2>Eliminar Personas</h2>
    <p class="text-danger mt-4 mb-4">Advertencia: Esta acción eliminará permanentemente todos los registros de personas y no se pueden recuperar.</p>
    
    <form action="EliminarPersonasServlet" method="post">
        <div class="mb-3 d-grid gap-2 d-md-block">
            <button type="submit" class="btn btn-danger">Eliminar Todos los Registros</button>
            <a href="index.html" class="btn btn-outline-secondary ms-2">Volver</a>
        </div>       
    </form>
</div>

<!-- Bootstrap Bundle with Popper -->
<script src="bootstrap/js/bootstrap.bundle.min.js"></script>

</body>
</html>
