<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <title>Consultar Personas</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    </head>
    <body>
        <c:if test="${listaDePersonas == null}">
            <script>
                window.location.href = 'consultarPersonas';
            </script>
        </c:if>
        <div class="container mt-5">
            <h2>Lista de Personas</h2>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cédula</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Correo Electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${listaDePersonas}" var="persona">
                        <tr>
                            <td><c:out value="${persona.id}"/></td>
                            <td><c:out value="${persona.nombre}"/></td>
                            <td><c:out value="${persona.apellido}"/></td>
                            <td><c:out value="${persona.documento}"/></td>
                            <td><c:out value="${persona.fechaNacimiento}"/></td>
                            <td><c:out value="${persona.correoElectronico}"/></td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center">
                        <a href="index.html" class="btn btn-success mt-3">Volver</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bootstrap Bundle with Popper -->
        <script src="bootstrap/js/bootstrap.bundle.min.js"></script>

    </body>
</html>
