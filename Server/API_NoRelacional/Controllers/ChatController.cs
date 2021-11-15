using API_NoRelacional.ChatManager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_NoRelacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private IChatRepository _chatRep = null;

        public ChatController(IChatRepository chatRep)
        {
            _chatRep = chatRep;
        }

        public JsonResult GetChats()
        {
            var chats = _chatRep.Gets();
            //string result = JsonConvert.SerializeObject(chats);
            return new JsonResult(chats);
        }

        public JsonResult SaveChat(Chat chat)
        {
            var cht = _chatRep.Save(chat);
            //string result = JsonConvert.SerializeObject(chats);
            return new JsonResult(cht);
        }

        public JsonResult DeleteChat(int id)
        {
            var message = _chatRep.Delete(id);
            //string result = JsonConvert.SerializeObject(chats);
            return new JsonResult(message);
        }
    }
}
