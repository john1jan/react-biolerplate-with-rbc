import * as ENV from "./env";

export function log(message, data) {
  if (ENV.isDev) {
    if (arguments.length == 1) {
      console.log(message)
    } else if (arguments.length == 2) {
      console.log(message, data)
    }
  }
}


export function error(message, data) {
  if (ENV.isDev) {
    if (arguments.length == 1) {
      console.error(message)
    } else if (arguments.length == 2) {
      console.error(message, data)
    }
  }
}

export function warn(message, data) {
  if (ENV.isDev) {
    if (arguments.length == 1) {
      console.warn(message)
    } else if (arguments.length == 2) {
      console.warn(message, data)
    }
  }
}
