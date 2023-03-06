import { Observable, of } from 'rxjs';
import { LoginResponse, SignupResponse, User } from '../models/user.model';
import userMock from '../../mocks/users.json';
export class AuthService {

  login(requestBody: {
    email: string;
    password: string;
  }): Observable<LoginResponse> {
    const user = userMock.data.find(
      (user: User) => user.email === requestBody.email
    );
    if (user) return of({ user: user, isAuth: true });
    return of({ user: { email: '' }, isAuth: false });
  }

  signUp(user: User): Observable<SignupResponse> {
    return of({ user, success: true });
  }
  logout(): Observable<any> {
    return of({});
  }
}
