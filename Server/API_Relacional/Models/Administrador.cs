using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class Administrador
    {
        [Key]
        public int adminid { get; set; }
        public string correo { get; set; }
        public string password { get; set; }
    }
}
