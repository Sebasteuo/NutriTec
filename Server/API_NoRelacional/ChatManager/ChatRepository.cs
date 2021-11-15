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
            _mongoClient = new MongoClient("mongodb://nutritec:Vh8wTVKT0pmjoDqY6uuiAM2RKbXQOtgKVTyjtyhXpBrdVh1KKTzgrP0uLFZV9YfEK2jUypitnpJ2mcFYqHT6FA==@nutritec.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@nutritec@"); 
            _database = _mongoClient.GetDatabase("nutritec");
            _chatTable = _database.GetCollection<Chat>("Chats");
        }
        public string _delete(string id)
        {
            _chatTable.DeleteOne(x => x.id == id);
            return "Eliminado";
        }

        public Chat GetOne(string id)
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
            if (empObj==null)
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
