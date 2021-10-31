using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class Receta
    {
        [Key]
        public int idreceta { get; set; }
        public string nombre { get; set; }
        public int idplan { get; set; }
        public int cedula { get; set; }

    }
}
