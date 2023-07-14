import { Request, Response } from "express";
export declare const create: (req: Request, res: Response) => Promise<void>;
export declare const get: (req: Request, res: Response) => Promise<void>;
export declare const getId: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const remove: (req: Request, res: Response) => Promise<void>;