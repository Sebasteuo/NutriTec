import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chat } from '../Models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  chat: Chat []=[]
  chatByClient: Chat []=[]
  async getChatByClient(cedula:number){  //Función que obtiene clientes

    await this.http.get(environment.apiChat+"/chat").toPromise().then(res=>{
      this.chat=JSON.parse(res as string) as Chat[]
      this.chat.forEach(item=>{
        if(item.cedulausuario==cedula){
          this.chatByClient.push(item)
        }
      })
    
    })
    
    return this.chatByClient
    
  }
  async addComment(chat : Chat){

    const body = {}
    await this.http.post(environment.apiChat+"/Chat", chat).toPromise()
  }

}
