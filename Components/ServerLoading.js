import React, { useState, useContext } from "react";
import { DataContext, GlobalData } from "../store/Context";

function isPromise(p) {
  return p && Object.prototype.toString.call(p) === "[object Promise]";
}

const check = (ctx) => {
  let totalApis = Object.keys(ctx).length - 3;
  let pending = 0;
  Object.keys(ctx).forEach((item, index) => {
    if (ctx.item instanceof Promise) {
      pending++;
    }
  });
  console.log(ctx.loading);
  ctx.loading = ((totalApis - pending) * 100) % totalApis;
  if (totalApis == pending) {
    return true;
  }
  return false;
};

export default function ServerLoading() {
  const ctx = useContext(DataContext);
  if (!ctx?.done) {
    let interval;
    let promise = new Promise((resolve) => {
      if (!interval) {
        interval = setInterval(() => {
          if (check(ctx)) {
            ctx.done = true;
            clearInterval(interval);
            resolve();
          }
        }, 100);
      }
    });
    throw promise;
  }
  return <></>;
}
