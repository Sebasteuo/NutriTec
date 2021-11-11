using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class Producto
    {
        [Key]
        public int codigodbarras { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public int porcion { get; set; }
        public int energia { get; set; }
        public int grasa { get; set; }
        public int sodio { get; set; }
        public int carbohidratos { get; set; }
        public int proteina { get; set; }
        public int hierro { get; set; }
        public int calcio { get; set; }
        public int aprobado { get; set; }
    }
}
