using API_Relacional.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public UsuarioController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<NutricionistaController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT cedula, nombre1, nombre2, apellido1, apellido2, fechanacimiento, peso, altura, pais, correo, password, porcentajemusculo, porcentajegrasa 
                FROM usuario
                ";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                SELECT cedula, nombre1, nombre2, apellido1, apellido2, fechanacimiento, peso, altura, pais, correo, password, porcentajemusculo, porcentajegrasa 
                FROM usuario
                WHERE cedula=" + id +
                "";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Usuario x)
        {
            string query = @"
                insert into usuario(cedula, nombre1, nombre2, apellido1, apellido2, fechanacimiento, peso, altura, pais, correo, password, porcentajemusculo, porcentajegrasa)
                values (@cedula, @nombre1, @nombre2, @apellido1, @apellido2, @fechanacimiento, @peso, @altura, @pais, @correo, @password, @porcentajemusculo, @porcentajegrasa)";

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {

                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@cedula", SqlDbType.Int);
                    cmd.Parameters["@cedula"].Value = x.cedula;

                    cmd.Parameters.Add("@nombre1", SqlDbType.VarChar);
                    cmd.Parameters["@nombre1"].Value = x.nombre1;

                    cmd.Parameters.Add("@nombre2", SqlDbType.VarChar);
                    cmd.Parameters["@nombre2"].Value = x.nombre2;

                    cmd.Parameters.Add("@apellido1", SqlDbType.VarChar);
                    cmd.Parameters["@apellido1"].Value = x.apellido1;

                    cmd.Parameters.Add("@apellido2", SqlDbType.VarChar);
                    cmd.Parameters["@apellido2"].Value = x.apellido2;

                    cmd.Parameters.Add("@fechanacimiento", SqlDbType.Date);
                    cmd.Parameters["@fechanacimiento"].Value = x.fechanacimiento;

                    cmd.Parameters.Add("@peso", SqlDbType.Int);
                    cmd.Parameters["@peso"].Value = x.peso;

                    cmd.Parameters.Add("@altura", SqlDbType.Int);
                    cmd.Parameters["@altura"].Value = x.altura;

                    cmd.Parameters.Add("@pais", SqlDbType.VarChar);
                    cmd.Parameters["@pais"].Value = x.pais;

                    cmd.Parameters.Add("@correo", SqlDbType.VarChar);
                    cmd.Parameters["@correo"].Value = x.correo;

                    cmd.Parameters.Add("@password", SqlDbType.VarChar);
                    cmd.Parameters["@password"].Value = x.password;

                    cmd.Parameters.Add("@porcentajemusculo", SqlDbType.Int);
                    cmd.Parameters["@porcentajemusculo"].Value = x.porcentajemusculo;

                    cmd.Parameters.Add("@porcentajegrasa", SqlDbType.Int);
                    cmd.Parameters["@porcentajegrasa"].Value = x.porcentajegrasa;

                    reader = cmd.ExecuteReader();//El lector ejecuta el comando
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Insertado exitosamente");
        }

        // PUT api/<HablaController>/5
        [HttpPut("{id}")]
        public JsonResult Put(Usuario x)
        {
            string query = @"
                UPDATE usuario
                SET cedula = @cedula, 
                    nombre1 = @nombre1, 
                    nombre2 = @nombre2, 
                    apellido1 = @apellido1, 
                    apellido2 = @apellido2, 
                    fechanacimiento = @fechanacimiento, 
                    peso = @peso, 
                    altura = @altura, 
                    pais = @pais, 
                    correo = @correo, 
                    password = @password, 
                    porcentajemusculo = @porcentajemusculo, 
                    porcentajegrasa = @porcentajegrasa
                WHERE cedula = @cedula";

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {
                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@cedula", SqlDbType.Int);
                    cmd.Parameters["@cedula"].Value = x.cedula;

                    cmd.Parameters.Add("@nombre1", SqlDbType.NVarChar);
                    cmd.Parameters["@nombre1"].Value = x.nombre1;

                    cmd.Parameters.Add("@nombre2", SqlDbType.NVarChar);
                    cmd.Parameters["@nombre2"].Value = x.nombre2;

                    cmd.Parameters.Add("@apellido1", SqlDbType.NVarChar);
                    cmd.Parameters["@apellido1"].Value = x.apellido1;

                    cmd.Parameters.Add("@apellido2", SqlDbType.NVarChar);
                    cmd.Parameters["@apellido2"].Value = x.apellido2;

                    cmd.Parameters.Add("@fechanacimiento", SqlDbType.NVarChar);
                    cmd.Parameters["@fechanacimiento"].Value = x.fechanacimiento;

                    cmd.Parameters.Add("@peso", SqlDbType.NVarChar);
                    cmd.Parameters["@peso"].Value = x.peso;

                    cmd.Parameters.Add("@altura", SqlDbType.NVarChar);
                    cmd.Parameters["@altura"].Value = x.altura;

                    cmd.Parameters.Add("@pais", SqlDbType.NVarChar);
                    cmd.Parameters["@pais"].Value = x.pais;

                    cmd.Parameters.Add("@correo", SqlDbType.NVarChar);
                    cmd.Parameters["@correo"].Value = x.correo;

                    cmd.Parameters.Add("@password", SqlDbType.NVarChar);
                    cmd.Parameters["@password"].Value = x.password;

                    cmd.Parameters.Add("@porcentajemusculo", SqlDbType.NVarChar);
                    cmd.Parameters["@porcentajemusculo"].Value = x.porcentajemusculo;

                    cmd.Parameters.Add("@porcentajegrasa", SqlDbType.NVarChar);
                    cmd.Parameters["@porcentajegrasa"].Value = x.porcentajegrasa;

                    reader = cmd.ExecuteReader();
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Actualizado exitosamente");
        }

        // DELETE api/<HablaController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from usuario
                where cedula =" + id;

            return consulta.delete(query, _configuration, cadenaDeConexion);
        }
    }
}
