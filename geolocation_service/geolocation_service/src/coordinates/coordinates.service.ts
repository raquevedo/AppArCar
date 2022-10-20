import { Injectable } from '@nestjs/common';
import { default as axios } from 'axios'
import { CoordinatesInterface } from './coordinates.interface';

@Injectable()
export class PositionStackService {

  async getCoordinates(address: string): Promise<CoordinatesInterface> {
    const baseUrl = 'http://api.positionstack.com/v1/';
    const accessKey = '2e9115a21f9865097b39441ab4acc4a8';
    const endpoint = 'forward';
    const fullUrl = baseUrl + endpoint + '?access_key=' + accessKey + '&query=' + address + '&country=AR';
    const encodedUrl = encodeURI(fullUrl);
    const res = await axios.get(encodedUrl)
    const response = res.data;
    console.log(response)
    const coordinates = {
      latitude: response['data'][0]['latitude'],
      longitude: response['data'][0]['longitude']
    };
    return coordinates;
  }
}
