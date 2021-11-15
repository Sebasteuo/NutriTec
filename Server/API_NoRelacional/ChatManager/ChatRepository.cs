using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_NoRelacional.ChatManager
{
    public class ChatRepository : IChatRepository
    {
        private MongoClient _mongoClient = null;
        private IMongoDatabase _database = null;
        private IMongoCollection<Chat> _chatTable = null;

        public ChatRepository()
        {
            _mongoClient = new MongoClient("mongodb://nutritec:1e9vRqvbScO7B1ZyEBSKQTOfdzBLX98QGMrA4qiO7YBmZN2xmLkvWOOD3M9ETVIel0DCPAJTC9lCLRAbb5Mi8w==@nutritec.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@nutritec@"); 
            _database = _mongoClient.GetDatabase("nutritecMongo");
            _chatTable = _database.GetCollection<Chat>("chats");
        }
        public string _delete(int id)
        {
            _chatTable.DeleteOne(x => x.id == id);
            return "Eliminado";
        }

        public Chat GetOne(int id)
        {
            return _chatTable.Find(x => x.id == id).FirstOrDefault();
        }

        public List<Chat> GetAll()
        {
            return _chatTable.Find(FilterDefinition<Chat>.Empty).ToList();
        }

        public Chat Save(Chat chat)
        {
            var empObj = _chatTable.Find(x => x.id == chat.id).FirstOrDefault();
            if (empObj == null)
            {
                _chatTable.InsertOne(chat);
            }
            else
            {
                _chatTable.ReplaceOne(x => x.id == chat.id, chat);
            }
            return chat;
        }
    }
}
