import { Injectable } from '@nestjs/common';
import { default as axios } from 'axios'
import { CoordinatesInterface } from './coordinates.interface';

const { once } = require('events');

@Injectable()
export class PositionStackService {
	
    async getCoordinates(address: string){
    	const spawn = require("child_process").spawn;
	const pythonProcess = spawn('python3',["coords.py",address]);
	let output = '';
	
	pythonProcess.stdout.on('data', (data) => {
		console.log(data.toString())
		output += data.toString()
	});
    	// Handle error output
   	pythonProcess.stderr.on('data', (data) => {
    	// As said before, convert the Uint8Array to a readable string.
      		console.log('error:' + data);
   	});
    	pythonProcess.stdout.on('end', async function(code){
     		console.log('output: ' + output);
     		console.log(`Exit code is: ${code}`);
   	});
    	
    	await once(pythonProcess, 'close')
    	return output;
    }
  /*async getCoordinates(address: string): Promise<CoordinatesInterface> {
    const baseUrl = 'http://api.positionstack.com/v1/';
    const accessKey = '';
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
  }*/
}
