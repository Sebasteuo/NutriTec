using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Relacional.Models.Database;


namespace API_Relacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class outputsController : ControllerBase
    {
        private readonly CallSPDBContext _context;

        public outputsController(CallSPDBContext context)
        {
            _context = context;
        }

        // GET: api/outputs
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<output>>> Getoutput(String id)
        {
            
            string storedProcedure = "exec storedproceduretest" +
                                     "@id=" + id;

            return await _context.output.FromSqlRaw(storedProcedure).ToListAsync();
        }
    }
}
