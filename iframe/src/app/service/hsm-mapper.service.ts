import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HsmMapperService {

  constructor() {
  }

  inboundDataMapper(templateData: any, token: string) {
    const destinations = templateData.destinations.split(',').map((number: string) => ({
      destination: number.trim()
    }));

    const inboundData = {
      did: "56935387065",
      type: "template",
      channel: "WHATSAPP",
      campaign: 2246,
      hsm: {
        destinations: destinations,
        template: templateData.templateName,
        languageCode: "es",
        botAttention: false
      }
    };

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return { inboundData, headers };
  }
}
