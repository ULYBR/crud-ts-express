import { Request, Response } from "express";
export declare const verifyToken: (req: Request, res: Response, next: any) => Response<any, Record<string, any>> | undefined;
