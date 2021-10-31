using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Relacional.Models.Database;

namespace API_Relacional.Models.Database
{
    public class CallSPDBContext:DbContext
    {
        public CallSPDBContext(DbContextOptions<CallSPDBContext> options) : base(options)
        {

        }
        public DbSet<API_Relacional.Models.Database.output> output { get; set; }
    }
}
