using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using System.Configuration;
using System.Data;
using Microsoft.IdentityModel.Protocols;
using Microsoft.Extensions.Configuration;
using API_Relacional.Models;

namespace API_Relacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Puede_TenerController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public Puede_TenerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<NutricionistaController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT codigonutricionista, cedula, chatid 
                FROM puede_tener
                ";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                SELECT codigonutricionista, cedula, chatid
                FROM puede_tener
                WHERE codigonutricionista=" + id +
                "";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Puede_Tener x)
        {
            string query = @"
                insert into puede_tener(codigonutricionista, cedula, chatid)
                values (@codigonutricionista, @cedula, @chatid)";

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {

                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@codigonutricionista", SqlDbType.Int);
                    cmd.Parameters["@codigonutricionista"].Value = x.codigonutricionista;

                    cmd.Parameters.Add("@cedula", SqlDbType.NVarChar);
                    cmd.Parameters["@cedula"].Value = x.cedula;

                    cmd.Parameters.Add("@chatid", SqlDbType.NVarChar);
                    cmd.Parameters["@chatid"].Value = x.chatid;

                    reader = cmd.ExecuteReader();//El lector ejecuta el comando
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Insertado exitosamente");
        }

        // PUT api/<HablaController>/5
        [HttpPut("{id}")]
        public JsonResult Put(Puede_Tener x)
        {
            string query = @"
                UPDATE puede_tener
                SET codigonutricionista = @codigonutricionista, 
                    cedula = @cedula, 
                    chatid = @chatid
                WHERE id = @id";

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {
                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@codigonutricionista", SqlDbType.Int);
                    cmd.Parameters["@codigonutricionista"].Value = x.codigonutricionista;

                    cmd.Parameters.Add("@cedula", SqlDbType.NVarChar);
                    cmd.Parameters["@cedula"].Value = x.cedula;

                    cmd.Parameters.Add("@chatid", SqlDbType.NVarChar);
                    cmd.Parameters["@chatid"].Value = x.chatid;

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
                delete from puede_tener
                where cedula =" + id;

            return consulta.delete(query, _configuration, cadenaDeConexion);
        }
    }
}
