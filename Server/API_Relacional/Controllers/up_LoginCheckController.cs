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
    public class up_LoginCheckController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public up_LoginCheckController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Credenciales credenciales)
        {
            string query = @"
                exec dbo.up_LoginCheck @identificacion, @resultado OUTPUT, @password, @statementType
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
                    cmd.Parameters.Add("@identificacion", SqlDbType.Int);
                    cmd.Parameters["@identificacion"].Value = credenciales.cedula;

                    cmd.Parameters.Add("@password", SqlDbType.VarChar);
                    cmd.Parameters["@password"].Value = credenciales.password;

                    cmd.Parameters.Add("@statementType", SqlDbType.NVarChar);
                    cmd.Parameters["@statementType"].Value = credenciales.statementType;

                    // Parametros para el valor de retorno
                    cmd.Parameters.Add("@resultado", SqlDbType.Int).Direction = ParameterDirection.Output;
                    
                    reader = cmd.ExecuteReader(); //El lector ejecuta el comando

                    result = cmd.Parameters["@resultado"].Value.ToString();

                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                    }
            }
            return new JsonResult(result);
        }


    }
}
