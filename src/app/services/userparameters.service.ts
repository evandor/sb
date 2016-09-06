import { Injectable, Inject } from "@angular/core";
import { RegistrationUser } from "../public/auth.component.ts";
import { AwsUtil } from "./aws.service";
import { DynamoDBService } from "../services/dynamodb.service";
import { CognitoUtil,Callback } from "./cognito.service";

@Injectable()
export class UserParametersService {

  static getParameters(callback: Callback) {
    let cognitoUser = CognitoUtil.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
        if (err)
          console.log("Couldn't retrieve the user");
        else {
          cognitoUser.getUserAttributes(function (err, result) {
            if (err) {
              console.log("in getParameters: " + err);
            } else {
              callback.callbackWithParam(result);
            }
          });
        }

      });
    } else {
      callback.callbackWithParam(null);
    }


  }

  getParameter(name: string, callback: Callback) {

  }

}