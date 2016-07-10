/**
 * Created by dilunika on 10/07/16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SampleService {

  constructor(private http: Http){

  }

  public userDetails(): any {

    return this.http.get('/api/users')
               .map(response => response.json());
  }
}
