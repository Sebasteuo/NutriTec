using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class X
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public int id { get; set; }
        public string texto { get; set; }
    }
}
