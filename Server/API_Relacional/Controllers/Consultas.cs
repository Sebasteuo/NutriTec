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

    //Esta clase se emplea para reutilizar el codigo de los metodos get
    public class Consultas
    {
        //Este metodo se emplea para hacer consultas a la base de datos y devolver un json de acuerdo al query especificado como parametro
        public JsonResult get(string query, IConfiguration _configuration, string cadenaDeConexion)
        {
            String result;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion); //La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource)) //Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection)) //El comando a ejecutar se hace con un query y la conexion
                {
                    reader = cmd.ExecuteReader(); //El lector ejecuta el comando
                    table.Load(reader); //El objeto DataTable se carga con los datos del lector
                    result = JsonConvert.SerializeObject(table); //Se serializa la tabla a JSON
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult(result);
        }

        public JsonResult delete(string query, IConfiguration _configuration, string cadenaDeConexion)
        {
            String result;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion); //La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource)) //Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection)) //El comando a ejecutar se hace con un query y la conexion
                {
                    reader = cmd.ExecuteReader(); //El lector ejecuta el comando
                    table.Load(reader); //El objeto DataTable se carga con los datos del lector
                    result = JsonConvert.SerializeObject(table); //Se serializa la tabla a JSON
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Eliminado exitosamente");
        }
    }
}
