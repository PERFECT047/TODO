import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const inputValidate = z.object({
    body: z.object({
        title: z.string().min(1, "Title not present!"),
        description: z.string().min(1, "Description not present!"),
        completed: z.boolean().optional()
    })
});

const validator = async (req: Request, res: Response, next: NextFunction) => {
    try{
        inputValidate.safeParse({
            body: req.body
        });
        next();
    }
    catch(err){
        res.status(400);
        res.json({ data: err, success: false });
    }
}

export { inputValidate, validator };