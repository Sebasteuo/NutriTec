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
        public string porcion { get; set; }
        public string energia { get; set; }
        public string grasa { get; set; }
        public string sodio { get; set; }
        public string carbohidratos { get; set; }
        public string proteina { get; set; }
        public string hierro { get; set; }
        public string calcio { get; set; }
        public Boolean aprobado { get; set; }
    }
}
