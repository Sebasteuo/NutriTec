using API_Relacional.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
//using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Text;
using Newtonsoft.Json.Linq;

namespace API_Relacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NutricionistaController : ControllerBase
    {

        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public NutricionistaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
       
        // GET: api/<NutricionistaController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT * 
                FROM x
                ";

            return consulta.get(query, _configuration, cadenaDeConexion);
            
        }

        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                SELECT * 
                FROM x
                WHERE id=" + id +
                "";

            return consulta.get(query, _configuration, cadenaDeConexion);
            
        }

        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(X x)
        {
            string query = @"
                insert into x(id, texto)
                values (@id, @texto)";
            
            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {

                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@id", SqlDbType.Int);
                    cmd.Parameters["@id"].Value = x.id;

                    cmd.Parameters.Add("@texto", SqlDbType.NVarChar);
                    cmd.Parameters["@texto"].Value = x.texto;

                    reader = cmd.ExecuteReader();//El lector ejecuta el comando
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Insertado exitosamente");
        }

        // PUT api/<HablaController>/5
        [HttpPut("{id}")]
        public JsonResult Put(X x)
        {
            string query = @"
                UPDATE x
                SET id = @id,
                texto = @texto
                WHERE id = @id";
            
            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {
                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@id", SqlDbType.Int);
                    cmd.Parameters["@id"].Value = x.id;

                    cmd.Parameters.Add("@texto", SqlDbType.NVarChar);
                    cmd.Parameters["@texto"].Value = x.texto;

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
                delete from x
                where id =" + id;

            return consulta.delete(query, _configuration, cadenaDeConexion); 
        }
    }
}