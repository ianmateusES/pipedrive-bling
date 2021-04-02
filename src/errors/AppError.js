class AppError {
  constructor(message, statusCode = 400) {
    this.messege = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
