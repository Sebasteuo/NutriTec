using API_Relacional.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
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
    public class up_MasterGestorUsuarioController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public up_MasterGestorUsuarioController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Usuario x, string statementtype)
        {
            string query = @"
                exec dbo.up_MasterGestorUsuario  @cedula, @nombre1, @nombre2, @apellido1, @apellido2, @fechanacimiento, @peso, @altura, @pais, @correo, @password, @porcentajemusculo, @porcentajegrasa, @statementtype
                ";

            String result;
            DataTable table = new DataTable();
            SqlDataReader reader;

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion

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

                    cmd.Parameters.Add("@peso", SqlDbType.Decimal);
                    cmd.Parameters["@peso"].Value = x.peso;

                    cmd.Parameters.Add("@altura", SqlDbType.Decimal);
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

                    cmd.Parameters.Add("@statementtype", SqlDbType.NVarChar);
                    cmd.Parameters["@statementtype"].Value = statementtype;

                    reader = cmd.ExecuteReader(); //El lector ejecuta el comando
                    table.Load(reader); //El objeto DataTable se carga con los datos del lector
                    result = JsonConvert.SerializeObject(table); //Se serializa la tabla a JSON
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult(result);
        }
    }
}
