using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_NoRelacional.Models;

namespace API_NoRelacional.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatService chatservice;

        public ChatController(ChatService chatservice)
        {
            this.chatservice = chatservice;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(chatservice.Get());
        }

        [HttpGet("{id:length(24)}", Name = "GetChat")]
        public IActionResult GetById(int id)
        {
            var chat = chatservice.GetById(id);

            if (chat == null)
            {
                return NotFound();
            }

            return Ok(chat);
        }

        [HttpPost]
        public IActionResult Create(Chat chat)
        {
            chatservice.Create(chat);

            return CreatedAtRoute("GetChat", new
            {
                id = chat.id.ToString()
            }, chat);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(int id, Chat chat)
        {
            var cht = chatservice.GetById(id);

            if (cht == null)
            {
                return NotFound();
            }

            chatservice.Update(id, chat);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(int id)
        {
            var chat = chatservice.GetById(id);

            if (chat == null)
            {
                return NotFound();
            }

            chatservice.DeleteById(chat.id);

            return NoContent();
        }
    }
}
