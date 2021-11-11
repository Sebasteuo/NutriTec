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
                SELECT codigonutricionista, cedula, nombre1, nombre2, apellido1, apellido2, direccion, foto, fechanacimiento, peso, altura, numerotarjetacredito, tipocobro, correo, password 
                FROM nutricionista
                ";

            return consulta.get(query, _configuration, cadenaDeConexion);
        }

        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                SELECT codigonutricionista, cedula, nombre1, nombre2, apellido1, apellido2, direccion, foto, fechanacimiento, peso, altura, numerotarjetacredito, tipocobro, correo, password  
                FROM nutricionista
                WHERE codigonutricionista=" + id +
                "";

            return consulta.get(query, _configuration, cadenaDeConexion);
            
        }

        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(Nutricionista x)
        {
            string query = @"
                insert into nutricionista(codigonutricionista, cedula, nombre1, nombre2, apellido1, apellido2, direccion, foto, fechanacimiento, peso, altura, numerotarjetacredito, tipocobro, correo, password )
                values (@codigonutricionista, @cedula, @nombre1, @nombre2, @apellido1, @apellido2, @direccion, @foto, @fechanacimiento, @peso, @altura, @numerotarjetacredito, @tipocobro, @correo, @password )";
            
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

                    cmd.Parameters.Add("@fechanacimiento", SqlDbType.NVarChar);
                    cmd.Parameters["@fechanacimiento"].Value = x.fechanacimiento;

                    cmd.Parameters.Add("@peso", SqlDbType.Decimal);
                    cmd.Parameters["@peso"].Value = x.peso;

                    cmd.Parameters.Add("@altura", SqlDbType.Decimal);
                    cmd.Parameters["@altura"].Value = x.altura;

                    cmd.Parameters.Add("@numerotarjetacredito", SqlDbType.NVarChar);
                    cmd.Parameters["@numerotarjetacredito"].Value = x.numerotarjetacredito;

                    cmd.Parameters.Add("@tipocobro", SqlDbType.NVarChar);
                    cmd.Parameters["@tipocobro"].Value = x.tipocobro;

                    cmd.Parameters.Add("@correo", SqlDbType.NVarChar);
                    cmd.Parameters["@correo"].Value = x.correo;

                    cmd.Parameters.Add("@password", SqlDbType.NVarChar);
                    cmd.Parameters["@password"].Value = x.password;

                    reader = cmd.ExecuteReader();//El lector ejecuta el comando
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Insertado exitosamente");
        }

        // PUT api/<HablaController>/5
        [HttpPut("{id}")]
        public JsonResult Put(Nutricionista x)
        {
            string query = @"
                UPDATE nutricionista
                SET codigonutricionista = @codigonutricionista, 
                    cedula = @cedula, 
                    nombre1 = @nombre1, 
                    nombre2 = @nombre2, 
                    apellido1 = @apellido1, 
                    apellido2 = @apellido2, 
                    direccion = @direccion, 
                    foto = @foto, 
                    fechanacimiento = @fechanacimiento, 
                    peso = @peso, 
                    altura = @altura, 
                    numerotarjetacredito = @numerotarjetacredito, 
                    tipocobro = @tipocobro, 
                    correo = @correo, 
                    password = @password
                WHERE codigonutricionista = @codigonutricionista";
            
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

                    cmd.Parameters.Add("@fechanacimiento", SqlDbType.NVarChar);
                    cmd.Parameters["@fechanacimiento"].Value = x.fechanacimiento;

                    cmd.Parameters.Add("@peso", SqlDbType.NVarChar);
                    cmd.Parameters["@peso"].Value = x.peso;

                    cmd.Parameters.Add("@altura", SqlDbType.NVarChar);
                    cmd.Parameters["@altura"].Value = x.altura;

                    cmd.Parameters.Add("@numerotarjetacredito", SqlDbType.NVarChar);
                    cmd.Parameters["@numetotarjetacredito"].Value = x.numerotarjetacredito;

                    cmd.Parameters.Add("@tipocobro", SqlDbType.NVarChar);
                    cmd.Parameters["@tipocobro"].Value = x.tipocobro;

                    cmd.Parameters.Add("@correo", SqlDbType.NVarChar);
                    cmd.Parameters["@correo"].Value = x.correo;

                    cmd.Parameters.Add("@password", SqlDbType.NVarChar);
                    cmd.Parameters["@password"].Value = x.password;

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
                delete from nutricionista
                where codigonutricionista =" + id;

            return consulta.delete(query, _configuration, cadenaDeConexion); 
        }
    }
}