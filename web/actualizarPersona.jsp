<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Actualizar Persona</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    </head>
    <body>

        <div class="container mt-5">
            <h2>Actualizar Datos de Persona</h2>
            <p class="mb-4">Ingrese la cédula de la persona y el nuevo nombre para actualizar los datos.</p>

            <form action="ActualizarPersonaServlet" method="post" class="mt-4">
                <div class="mb-3">
                    <label for="documento" class="form-label">Cédula</label>
                    <input type="text" class="form-control" id="documento" name="documento" required>
                </div>

                <div class="mb-3">
                    <label for="nombre" class="form-label">Nuevo Nombre</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" required>
                </div>

                <div class="mb-3 d-grid gap-2 d-md-block">
                    <button type="submit" class="btn btn-primary">Actualizar Datos</button>
                    <a href="index.html" class="btn btn-outline-secondary ms-2">Volver</a>
                </div>
            </form>
        </div>

        <!-- Bootstrap Bundle with Popper -->
        <script src="bootstrap/js/bootstrap.bundle.min.js"></script>

    </body>
</html>
