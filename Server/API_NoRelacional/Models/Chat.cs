using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_NoRelacional.ChatManager
{
    public class Chat
    {
        //Representacion binaria de JSON
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public int codigonutricionista { get; set; }
        public int cedulausuario { get; set; }
        public string mensaje { get; set; }
    }
}
