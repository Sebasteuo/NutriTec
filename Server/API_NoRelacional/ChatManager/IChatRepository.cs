using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_NoRelacional.ChatManager
{
    public interface IChatRepository
    {
        Chat Save(Chat chat);
        Chat GetOne(string id);
        List<Chat> GetAll();
        string _delete(string id);
    }
}
