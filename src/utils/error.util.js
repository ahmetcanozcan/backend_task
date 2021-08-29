const createError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  return error;
}

module.exports = {
  createError,
  
  // Errors
  notFoundByPhoneError: createError('Belirtilen telefona ait kayıt bulunamamıştır.', 403),
  notFoundBySubscriptionError: createError('Belirtilen Aboneliğe ait kayıt bulunamamıştır.', 403),
  // General server error
  serverError: createError('Sunucu hatası. Lütfen tekrar deneyin', 500),
}