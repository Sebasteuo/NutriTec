using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API_Relacional
{
    public class DataManager
    {
        public string DataTableToJSON(DataTable table)
        {
            string JSONString;
            JSONString = JsonConvert.SerializeObject(table);
            return JSONString;
        }
    }
}
