import { Request, Response } from "express";
export declare const authenticate: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
