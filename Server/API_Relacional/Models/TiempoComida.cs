using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class TiempoComida
    {
        [Key]
        public int id { get; set; }
        public string nombre { get; set; }
    }
}
