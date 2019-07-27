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

  // CAMPAIGN

  private campaignBase = this.base + 'events/';
  PACK_CAMPAIGN = this.campaignBase + 'pack';
  BUILDING_CAMPAIGN = this.campaignBase + 'building';

  // GOODS

  // groups
  private appGroupsBase = this.base + 'applying_groups/';
  SHOW_PACK_GROUPS = this.appGroupsBase + 'pack';
  SHOW_BUILD_GROUPS = this.appGroupsBase + 'building';

  // brands
  private brandsBase = this.base + 'brands/';
  SHOW_PACK_BRANDS = this.brandsBase + 'pack';
  SHOW_BUILDING_BRANDS = this.brandsBase + 'building';

  // products
  private productsBase = this.base + 'products/';
  SHOW_PRODUCT = this.productsBase;
  SHOW_PRODUCTS_BY_APPLYING = this.productsBase + 'applying/';
  SHOW_PRODUCTS_BY_BRAND = this.productsBase + 'brand/';
}
