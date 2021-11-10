using API_NoRelacional.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_NoRelacional.ChatService
{
    public class ChatService
    {

        private IMongoCollection<Chat> _chatCollection;

        public ChatService(IChatSettings settings)
        {
            var client = new MongoClient(settings.Server);

            var database = client.GetDatabase(settings.Database);

            _chatCollection = database.GetCollection<Chat>(settings.Collection);
        }

        public List<Chat> Get()
        {
            return _chatCollection.Find(cht => true).ToList();

        }

        public Chat GetById(int id)
        {
            return _chatCollection.Find<Chat>(cht => cht.id == id).FirstOrDefault();
        }

        public void Create(Chat chat)
        {
            _chatCollection.InsertOne(chat);
        }

        public void Update(int id, Chat chat)
        {
            _chatCollection.ReplaceOne(cht => cht.id == id, chat);
        }

        public void Delete(Chat chat)
        {
            _chatCollection.DeleteOne(cht => cht.id == chat.id);
        }

        public void DeleteById(int id)
        {
            _chatCollection.DeleteOne(cht => cht.id == id);
        }
    }
}
