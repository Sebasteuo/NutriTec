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
    public class udft_TotalNutricionalController : ControllerBase
    {
        private string cadenaDeConexion = "SQLServerConnection"; //hace referencia a la cadena de conexion en appsettings.json
        private readonly IConfiguration _configuration;

        Consultas consulta = new Consultas();

        //el metodo constructor recibe como parametro una instancia de la interface Iconfiguration que permite la representacion de un conjunto de propiedades clave/valor
        public udft_TotalNutricionalController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get api/<udft_TotalNutricionalController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select dbo.udft_TotalNutricional()
                ";

            return consulta.get(query, _configuration, cadenaDeConexion);
        }
    }
}
