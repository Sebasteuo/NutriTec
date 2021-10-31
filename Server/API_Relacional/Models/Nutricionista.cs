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
        public string nombre1y2 { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public string dirección { get; set; }
        public int edad { get; set; }
        public string foto { get; set; }
        public DateTime fechanacimiento { get; set; }
        public int peso { get; set; }
        public int imc { get; set; }
        public int numerotarjetacredito { get; set; }
        public string tipocobro { get; set; }
        public string correo { get; set; }
        public string password { get; set; }

    }
}
