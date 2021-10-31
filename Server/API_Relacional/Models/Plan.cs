using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class Plan
    {
        [Key]
        public int idplan { get; set; }
        public int totalcal { get; set; }
        public string nombre { get; set; }
        public int codigonutricionista { get; set; }
    }
}
