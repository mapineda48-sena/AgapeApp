/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package AgapeAppRepositorio;

import AgepeAppEntidades.Persona;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author win
 */
public class PersonaRepositorio {

    private static final String URL = "jdbc:mysql://localhost:3306/AgapeApp";
    private static final String USUARIO = "root";
    private static final String PASSWORD = "tu_contraseña";  // Reemplaza con tu contraseña real

    // Cargar el driver JDBC
    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("No se pudo cargar el driver de JDBC");
            e.printStackTrace();
        }
    }

    public static boolean crearNuevaPersona(String nombre, String apellido, String documento, String fechaNacimiento, String correoElectronico) {
        String sql = "INSERT INTO Personas (Nombre, Apellido, Documento, FechaNacimiento, CorreoElectronico) VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(URL, USUARIO, PASSWORD); PreparedStatement pstmt = conn.prepareStatement(sql)) {
            // Insertar el registro
            pstmt.setString(1, nombre);
            pstmt.setString(2, apellido);
            pstmt.setString(3, documento);
            pstmt.setDate(4, java.sql.Date.valueOf(fechaNacimiento));
            pstmt.setString(5, correoElectronico);
            pstmt.executeUpdate();

            System.out.println("Registros insertados con éxito.");

            return true;

        } catch (SQLException ex) {
            ex.printStackTrace();

            return false;
        }
    }

    public static List<Persona> consultarPersonas() {
        List<Persona> personas = new ArrayList<>();
        String sql = "SELECT * FROM Personas";

        try (Connection conn = DriverManager.getConnection(URL, USUARIO, PASSWORD); PreparedStatement pstmt = conn.prepareStatement(sql); var rs = pstmt.executeQuery()) {

            while (rs.next()) {
                Persona persona = new Persona();
                persona.setId(rs.getInt("ID"));
                persona.setNombre(rs.getString("Nombre"));
                persona.setApellido(rs.getString("Apellido"));
                persona.setDocumento(rs.getString("Documento"));
                persona.setFechaNacimiento(rs.getDate("FechaNacimiento"));
                persona.setCorreoElectronico(rs.getString("CorreoElectronico"));
                personas.add(persona);
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return personas;
    }

    public static boolean actualizarNombrePersonas(String documento, String nombre) {
        String sql = "UPDATE Personas SET Nombre = ? WHERE Documento = ?";

        try (Connection conn = DriverManager.getConnection(URL, USUARIO, PASSWORD); PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(2, documento);
            pstmt.setString(1, nombre);
            int affectedRows = pstmt.executeUpdate();

            if (affectedRows > 0) {
                System.out.println("Persona actualizada con éxito.");
            } else {
                System.out.println("No se encontró un registro con el ID proporcionado.");
            }

            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();

            return false;
        }
    }

    public static boolean eliminarTodasLasPersonas() {
        String sql = "DELETE FROM Personas";

        try (Connection conn = DriverManager.getConnection(URL, USUARIO, PASSWORD); PreparedStatement pstmt = conn.prepareStatement(sql)) {

            int affectedRows = pstmt.executeUpdate();

            System.out.println(affectedRows + " registros eliminados con éxito.");

            return true;

        } catch (SQLException ex) {
            ex.printStackTrace();

            return false;
        }
    }
}
