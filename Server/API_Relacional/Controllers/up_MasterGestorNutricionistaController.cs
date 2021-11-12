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
    public class up_MasterGestorNutricionistaController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public up_MasterGestorNutricionistaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Nutricionista x, string statementtype)
        {
            string query = @"
                exec dbo.up_MasterGestorNutricionista @codigonutricionista, @cedula, @nombre1, @nombre2, @apellido1, @apellido2, @direccion, @foto, @fechanacimiento, @peso, @altura, @numerotarjetacredito, @tipocobro, @correo, @password, @statementtype
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
                    cmd.Parameters.Add("@codigonutricionista", SqlDbType.Int);
                    cmd.Parameters["@codigonutricionista"].Value = x.codigonutricionista;

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

                    cmd.Parameters.Add("@direccion", SqlDbType.NVarChar);
                    cmd.Parameters["@direccion"].Value = x.direccion;

                    cmd.Parameters.Add("@foto", SqlDbType.NVarChar);
                    cmd.Parameters["@foto"].Value = x.foto;

                    cmd.Parameters.Add("@fechanacimiento", SqlDbType.DateTime);
                    cmd.Parameters["@fechanacimiento"].Value = x.fechanacimiento;

                    cmd.Parameters.Add("@peso", SqlDbType.Float);
                    cmd.Parameters["@peso"].Value = x.peso;

                    cmd.Parameters.Add("@altura", SqlDbType.Float);
                    cmd.Parameters["@altura"].Value = x.altura;

                    cmd.Parameters.Add("@numerotarjetacredito", SqlDbType.NVarChar);
                    cmd.Parameters["@numerotarjetacredito"].Value = x.numerotarjetacredito;

                    cmd.Parameters.Add("@tipocobro", SqlDbType.NVarChar);
                    cmd.Parameters["@tipocobro"].Value = x.tipocobro;

                    cmd.Parameters.Add("@correo", SqlDbType.NVarChar);
                    cmd.Parameters["@correo"].Value = x.correo;

                    cmd.Parameters.Add("@password", SqlDbType.NVarChar);
                    cmd.Parameters["@password"].Value = x.password;

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
