using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API_Relacional.Models
{
    public class Nutricionista
    {
        [Key]
        public int codigonutricionista { get; set; }
        public int cedula { get; set; }
        public string nombre1 { get; set; }
        public string nombre2 { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public string direccion { get; set; }
        public string foto { get; set; }
        public DateTime fechanacimiento { get; set; }
        public Decimal peso { get; set; }
        public Decimal altura { get; set; }
        public string numerotarjetacredito { get; set; }
        public string tipocobro { get; set; }
        public string correo { get; set; }
        public string password { get; set; }

    }
}
