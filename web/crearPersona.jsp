<%-- 
    Document   : crearPersona
    Created on : Feb 10, 2024, 4:22:01 PM
    Author     : win
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Crear Nueva Persona</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
    <h2>Registrar Nueva Persona</h2>
    <form action="CrearPersonaServlet" method="post" class="mt-4">

        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre" required>
        </div>

        <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" name="apellido" required>
        </div>

        <div class="mb-3">
            <label for="documento" class="form-label">Cédula</label>
            <input type="text" class="form-control" id="documento" name="documento" required>
        </div>

        <div class="mb-3">
            <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento</label>
            <input type="date" class="form-control" id="fechaNacimiento" name="fechaNacimiento" required>
        </div>

        <div class="mb-3">
            <label for="correoElectronico" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="correoElectronico" name="correoElectronico" required>
        </div>

        <div class="mb-3 d-grid gap-2 d-md-block">
            <button type="submit" class="btn btn-primary">Crear Persona</button>
            <a href="index.html" class="btn btn-outline-secondary ms-2">Volver</a>
        </div>
    </form>
</div>

<!-- Bootstrap Bundle with Popper -->
<script src="bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>


