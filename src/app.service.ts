import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'Aucun utilisateur google trouvé';
    }
    return {
      message: 'Information utilisateur google',
      user: req.user,
    };
  }
}
