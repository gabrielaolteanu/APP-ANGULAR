import {  HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, pipe } from "rxjs";
import { tap } from "rxjs";

@Injectable()
export class AuthIncterceptor implements HttpInterceptor {
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log("interceptop ", request.url);
        request= request.clone({
            setHeaders: {
                Authorization:`Bearer 1234 `
            }
        })
        return next.handle(request).pipe (
            tap(res => console.log(res))
        )
    }
}