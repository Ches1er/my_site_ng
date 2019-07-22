export class UrlConfig {
  private base = 'http://mydomain/api/';

  // AUTH

  LOGIN = this.base + 'login';
  REGISTER = this.base + 'register';
  LOGIN_REMEMBER = this.base + 'login_remember';
  ROLES = this.base + 'roles';
  USER = this.base + 'user';

      // MAIN

  // NEWS

  private newsBase = this.base + 'news/';
  PACK_NEWS = this.newsBase + 'pack';
  BUILDING_NEWS = this.newsBase + 'building';

}
