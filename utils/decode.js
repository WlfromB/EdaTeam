function parseJWT(token) {
    // Разделить токен на части
    const parts = token.split('.');
  
    if (parts.length !== 3) {
      throw new Error('Invalid JWT token');
    }
  
    // Функция для декодирования Base64Url
    function base64UrlDecode(str) {
      let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
      
      // Добавить заполнение, если необходимо
      switch (base64.length % 4) {
        case 0:
          break;
        case 2:
          base64 += '==';
          break;
        case 3:
          base64 += '=';
          break;
        default:
          throw new Error('Invalid Base64Url string');
      }
      
      const decoded = atob(base64);
      try {
        return decodeURIComponent(escape(decoded));
      } catch (e) {
        return decoded;
      }
    }
  
    // Декодировать каждую часть
    const header = JSON.parse(base64UrlDecode(parts[0]));
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    const signature = parts[2];
  
    // Вернуть распарсенные данные
    return {
      header,
      payload,
      signature
    };
  }
  
export default parseJWT;