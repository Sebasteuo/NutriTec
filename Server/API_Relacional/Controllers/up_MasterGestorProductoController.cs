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
    public class up_MasterGestorProductoController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public up_MasterGestorProductoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Producto x, string statementtype)
        {
            string query = @"
                exec dbo.up_MasterGestorNutricionista @codigodbarras, @nombre, @descripcion, @porcion, @energia, @grasa, @sodio, @carbohidratos, @proteina, @hierro, @calcio, @aprobado, @statementtype
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
                    cmd.Parameters.Add("@codigodbarras", SqlDbType.Int);
                    cmd.Parameters["@codigodbarras"].Value = x.codigodbarras;
                                        
                    cmd.Parameters.Add("@nombre", SqlDbType.NVarChar);
                    cmd.Parameters["@nombre"].Value = x.nombre;

                    cmd.Parameters.Add("@descripcion", SqlDbType.NVarChar);
                    cmd.Parameters["@descripcion"].Value = x.descripcion;

                    cmd.Parameters.Add("@porcion", SqlDbType.Int);
                    cmd.Parameters["@porcion"].Value = x.porcion;

                    cmd.Parameters.Add("@energia", SqlDbType.Int);
                    cmd.Parameters["@energia"].Value = x.energia;
                                        
                    cmd.Parameters.Add("@grasa", SqlDbType.Int);
                    cmd.Parameters["@grasa"].Value = x.grasa;

                    cmd.Parameters.Add("@sodio", SqlDbType.Int);
                    cmd.Parameters["@sodio"].Value = x.sodio;

                    cmd.Parameters.Add("@carbohidratos", SqlDbType.Int);
                    cmd.Parameters["@carbohidratos"].Value = x.carbohidratos;

                    cmd.Parameters.Add("@proteina", SqlDbType.Int);
                    cmd.Parameters["@proteina"].Value = x.proteina;

                    cmd.Parameters.Add("@hierro", SqlDbType.Int);
                    cmd.Parameters["@hierro"].Value = x.hierro;
                                        
                    cmd.Parameters.Add("@calcio", SqlDbType.Int);
                    cmd.Parameters["@calcio"].Value = x.calcio;
                                        
                    cmd.Parameters.Add("@aprobado", SqlDbType.Int);
                    cmd.Parameters["@aprobado"].Value = x.aprobado;

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
