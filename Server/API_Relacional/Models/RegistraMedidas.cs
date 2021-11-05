using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class RegistraMedidas
    {
        public int cedula { get; set; }
        public string zona { get; set; }
        public int medida { get; set; }
        public DateTime fecharegistro { get; set; }
    }
}
