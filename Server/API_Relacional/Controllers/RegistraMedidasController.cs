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
    public class RegistraMedidasController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public RegistraMedidasController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<NutricionistaController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT cedula, zona, medida, fecharegistro 
                FROM registramedidas
                ";
 
            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                SELECT cedula, zona, medida, fecharegistro 
                FROM registramedidas
                WHERE cedula=" + id +
                "";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(RegistraMedidas x)
        {
            string query = @"
                insert into registramedidas(cedula, zona, medida, fecharegistro)
                values (@cedula, @zona, @medida, @fecharegistro)";

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

                    cmd.Parameters.Add("@zona", SqlDbType.NVarChar);
                    cmd.Parameters["@zona"].Value = x.zona;

                    cmd.Parameters.Add("@medida", SqlDbType.NVarChar);
                    cmd.Parameters["@medida"].Value = x.medida;

                    cmd.Parameters.Add("@fecharegistro", SqlDbType.NVarChar);
                    cmd.Parameters["@fecharegistro"].Value = x.fecharegistro;

                    reader = cmd.ExecuteReader();//El lector ejecuta el comando
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Insertado exitosamente");
        }

        // PUT api/<HablaController>/5
        [HttpPut]
        public JsonResult Put(RegistraMedidas x)
        {
            string query = @"
                UPDATE registramedidas
                SET cedula = @cedula, 
                    zona = @zona, 
                    medida = @medida, 
                    fecharegistro = @fecharegistro
                WHERE cedula = @cedula and fecharegistro = @fecharegistro and zona = @zona";

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

                    cmd.Parameters.Add("@zona", SqlDbType.NVarChar);
                    cmd.Parameters["@zona"].Value = x.zona;

                    cmd.Parameters.Add("@medida", SqlDbType.NVarChar);
                    cmd.Parameters["@medida"].Value = x.medida;

                    cmd.Parameters.Add("@fecharegistro", SqlDbType.NVarChar);
                    cmd.Parameters["@fecharegistro"].Value = x.fecharegistro;

                    reader = cmd.ExecuteReader();
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Actualizado exitosamente");
        }

        // DELETE api/<HablaController>/5
        [HttpPut("[action]")]
        public JsonResult Delete(RegistraMedidas x)
        {
            string query = @"
                delete from registramedidas
                  WHERE cedula = @cedula and fecharegistro = @fecharegistro and zona = @zona";


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

                    cmd.Parameters.Add("@zona", SqlDbType.NVarChar);
                    cmd.Parameters["@zona"].Value = x.zona;

                    cmd.Parameters.Add("@medida", SqlDbType.NVarChar);
                    cmd.Parameters["@medida"].Value = x.medida;

                    cmd.Parameters.Add("@fecharegistro", SqlDbType.NVarChar);
                    cmd.Parameters["@fecharegistro"].Value = x.fecharegistro;

                    reader = cmd.ExecuteReader();
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Actualizado exitosamente");

        }
    }
}
