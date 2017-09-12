import { CONSTANTS } from './values'
import { COLORS } from './values'
import * as VALUES from './values'
import * as ENV from './env'
import * as ROUTES from '../routes'
import _ from 'lodash'
import lscache from "lscache"



export function getSessionId() {
  if (typeof (lscache) != "undefined") {
    const sessionId = lscache.get(CONSTANTS.SESSION_ID);
    if (sessionId && sessionId != null && sessionId != "") {
      return sessionId;
    }
    return "";
  }
  return "";

}


