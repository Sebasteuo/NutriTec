using API_NoRelacional.ConnectionDB;
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

        private readonly IMongoCollection<Chat> _chatCollection;

        public ChatService(IChatStoreSettings settings)
        {
            // var mdbClient = new MongoClient(settings.ConnectionString);
            var mdbClient = new MongoClient(settings.ConnectionString);

            var database = mdbClient.GetDatabase(settings.DatabaseName);

            _chatCollection = database.GetCollection<Chat>(settings.ChatCollectionName);
        }

        public List<Chat> Get()
        {
            return _chatCollection.Find(chat => true).ToList();

        }

        public Chat GetById(int id)
        {
            return _chatCollection.Find<Chat>(chat => chat.id == id).FirstOrDefault();
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
