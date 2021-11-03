using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using System.Configuration;
using System.Data;
using Microsoft.IdentityModel.Protocols;

namespace API_Relacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HablaController : ControllerBase
    {
        /**

        // GET: api/<HablaController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            SqlConnection cnn = new SqlConnection(ConfigurationManager.ConnectionStrings["SQLServerConnection"].ToString());
            SqlCommand cmd = new SqlCommand();
            DataTable dataTable = new DataTable();
            SqlDataAdapter sqlDA; cnn.Open();
            cmd.CommandText = "select * from x;";
            cmd.CommandType = CommandType.Text;
            cmd.Connection = cnn;
            sqlDA = new SqlDataAdapter(cmd);
            sqlDA.Fill(dataTable);
            cnn.Close();
        }
    }


        */



        // GET api/<HablaController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<HablaController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<HablaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HablaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
