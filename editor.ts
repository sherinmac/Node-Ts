class AppError extends Error {
  code: number;
  
  constructor(code: number, message: string){
    super();
    this.code = code;
    this.message = message;
    this.stack = process.env.NODE_ENV === "production" ? "" : this.stack;
  }
}


error: any | AppError


const statusCode = error.code || 500;
const message = error.message;

if(!(error instaceof AppError)){
 return res.status(code).send({
   message: "The problem is our end. We are working on fix it.",
   success: false,
   data:null
 })
}

return res.status(code).send({
   message,
   success: false,
   data:null
 })

index.ts
________________

throw newAppError(404, "This is our error handler working")



 
