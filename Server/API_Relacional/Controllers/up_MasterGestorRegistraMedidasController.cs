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
    public class up_MasterGestorRegistraMedidasController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public up_MasterGestorRegistraMedidasController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(RegistraMedidas x, string statementtype)
        {
            string query = @"
                exec dbo.up_MasterGestorRegistraMedidas  @cedula, @zona, @medida, @fecharegistro @statementtype
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

                    cmd.Parameters.Add("@zona", SqlDbType.NVarChar);
                    cmd.Parameters["@zona"].Value = x.zona;

                    cmd.Parameters.Add("@medida", SqlDbType.Int);
                    cmd.Parameters["@medida"].Value = x.medida;

                    cmd.Parameters.Add("@fecharegistro", SqlDbType.Int);
                    cmd.Parameters["@fecharegistro"].Value = x.fecharegistro;

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
