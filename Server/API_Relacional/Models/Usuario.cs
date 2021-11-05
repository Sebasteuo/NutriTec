﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Relacional.Models
{
    public class Usuario
    {
        [Key]
        public int cedula { get; set; }
        public string nombre1 { get; set; }
        public string nombre2 { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public DateTime fechanacimiento { get; set; }
        public int peso { get; set; }
        public int altura { get; set; }
        public string pais { get; set; }
        public string password { get; set; }
        public string correo { get; set; }
        public int porcentajegrasa { get; set; }
        public int porcentajemusculo { get; set; }
    }
}
