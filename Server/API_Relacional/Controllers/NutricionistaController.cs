using API_Relacional.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Text;
using Npgsql;
using Newtonsoft.Json.Linq;

namespace API_Relacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NutricionistaController : ControllerBase
    {

        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

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
            DataManager dm = new DataManager();
            String result;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))
                {
                    reader = cmd.ExecuteReader();
                    table.Load(reader);
                    result=dm.DataTableToJSON(table);
                    reader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(result);
        }
          
    }

}