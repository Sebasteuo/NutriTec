﻿using API_Relacional.Models;
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
    public class TiempoComidaController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public TiempoComidaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<NutricionistaController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT idtiempo, nombre 
                FROM tiempodcomida
                ";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                SELECT idtiempo, nombre 
                FROM tiempodcomida
                WHERE idtiempo=" + id +
                "";

            return consulta.get(query, _configuration, cadenaDeConexion);

        }

        // POST api/<HablaController>
        [HttpPost]
        public JsonResult Post(TiempoComida x)
        {
            string query = @"
                insert into tiempodcomida(idtiempo, nombre)
                values (@idtiempo, @nombre)";

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {

                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@idtiempo", SqlDbType.Int);
                    cmd.Parameters["@idtiempo"].Value = x.idtiempo;

                    cmd.Parameters.Add("@nombre", SqlDbType.NVarChar);
                    cmd.Parameters["@nombre"].Value = x.nombre;

                    reader = cmd.ExecuteReader();//El lector ejecuta el comando
                    reader.Close(); //Se cierra  el lector
                    connection.Close(); //Se cierra la conexion
                }
            }
            return new JsonResult("Insertado exitosamente");
        }

        // PUT api/<HablaController>/5
        [HttpPut("{id}")]
        public JsonResult Put(TiempoComida x)
        {
            string query = @"
                UPDATE tiempodcomida
                SET idtiempo = @idtiempo,
                nombre = @nombre
                WHERE idtiempo = @idtiempo";

            string sqlDataSource = _configuration.GetConnectionString(cadenaDeConexion);//La fuente de los datos se obtiene de la cadena de conexion
            SqlDataReader reader;

            using (SqlConnection connection = new SqlConnection(sqlDataSource))//Se utiliza la fuente de datos para hacer la conexion
            {
                connection.Open();

                using (SqlCommand cmd = new SqlCommand(query, connection))//El comando a ejecutar se hace con un query y la conexion
                {
                    //Se agregan los valores y el tipo de dato respectivo
                    cmd.Parameters.Add("@idtiempo", SqlDbType.Int);
                    cmd.Parameters["@idtiempo"].Value = x.idtiempo;

                    cmd.Parameters.Add("@nombre", SqlDbType.NVarChar);
                    cmd.Parameters["@nombre"].Value = x.nombre;

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
                delete from tiempodcomida
                where idtiempo =" + id;

            return consulta.delete(query, _configuration, cadenaDeConexion);
        }
    }
}
