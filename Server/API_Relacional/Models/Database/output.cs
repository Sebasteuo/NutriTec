using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models.Database
{
    public partial class output
    {
        [Key]
        public int antiid { get; set; }
        public string antitexto { get; set; }
    }
}
