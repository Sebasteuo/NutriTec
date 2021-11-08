using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API_NoRelacional.Models
{
    public class Chat
    {
        //Representacion binaria de JSON
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public int id { get; set; }
        public string mensaje { get; set; }
    }
}
