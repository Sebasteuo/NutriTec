using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class Puede_Tener
    {
        [Key]
        public int codigonutricionista { get; set; }
        public int cedula { get; set; }
        public int chatid { get; set; }
    }
}
