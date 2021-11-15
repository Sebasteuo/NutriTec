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
            _mongoClient = new MongoClient("servidor");
            _database = _mongoClient.GetDatabase("base de datos");
            _chatTable = _database.GetCollection<Chat>("coleccion");
        }
        public string Delete(int id)
        {
            _chatTable.DeleteOne(x => x.id == id);
            return "Eliminado";
        }

        public Chat Get(int id)
        {
            return _chatTable.Find(x => x.id == id).FirstOrDefault();
        }

        public List<Chat> Gets()
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
