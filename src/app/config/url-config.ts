export class UrlConfig {
  private base = 'http://mydomain/api/';
  CORE = this.base;

  // AUTH

  LOGIN = this.base + 'login';
  REGISTER = this.base + 'register';
  UPDATE_USER = this.base + 'update_user';
  LOGIN_REMEMBER = this.base + 'login_remember';
  ROLES = this.base + 'roles';
  USER = this.base + 'user';
  IS_ADMIN = this.base + 'is_admin';
  IS_AUTH = this.base + 'is_auth';
  REPEAT_VERIFICATION = this.base + 'repeat_verification_letter';

  // CONTACTS

  // Branch

  private branchesBase = this.base + 'branches';
  BRANCHES = this.branchesBase;
  BRANCHESROLES = this.branchesBase + '/roles';
  ADD_BRANCH = this.branchesBase + '/add';

  // MAIN

  // SALES_AREA

  private salesAreaBase = this.base + 'salesarea';
  SALES_AREA = this.salesAreaBase;

  // NEWS

  private newsBase = this.base + 'news';
  ALL_NEWS = this.newsBase;
  PACK_NEWS = this.newsBase + '/pack';
  BUILDING_NEWS = this.newsBase + '/building';
  ADD_NEWS = this.newsBase + '/add';

  // CAMPAIGN

  private campaignBase = this.base + 'events/';
  ALL_CAMPAIGN = this.campaignBase + 'all';
  PACK_CAMPAIGN = this.campaignBase + 'pack';
  BUILDING_CAMPAIGN = this.campaignBase + 'building';
  ADD_CAMPAIGN = this.campaignBase + 'add';

  // GOODS

  // groups
  private appGroupsBase = this.base + 'applying_groups/';
  SHOW_PACK_GROUPS = this.appGroupsBase + 'pack';
  SHOW_BUILD_GROUPS = this.appGroupsBase + 'building';
  SHOW_ALL_GROUPS = this.appGroupsBase + 'all';
  ADD_GROUP = this.appGroupsBase + 'add';

  // brands
  private brandsBase = this.base + 'brands/';
  SHOW_PACK_BRANDS = this.brandsBase + 'pack';
  SHOW_BUILDING_BRANDS = this.brandsBase + 'building';
  SHOW_ALL_BRANDS = this.brandsBase + 'all';
  ADD_BRAND = this.brandsBase + 'add';
  SHOW_EXCHANGES = this.base + 'brandsexchanges';

  // products
  private productsBase = this.base + 'products/';
  SHOW_PRODUCT = this.productsBase;
  SHOW_ALL_PRODUCTS = this.productsBase + 'all';
  SHOW_PRODUCTS_BY_APPLYING = this.productsBase + 'applying/';
  SHOW_PRODUCTS_BY_BRAND = this.productsBase + 'brand/';
  ADD_PRODUCT = this.productsBase + 'add';

  // clients

  private clientsBase = this.base + 'client/';
  SHOW_CLIENT = this.clientsBase;
  SHOW_CLIENTS = this.base + 'clients/';
  ADD_CLIENT = this.clientsBase + 'add';

  // build_obj

  private buildObjBase = this.base + 'object/';
  SHOW_BUILD_OBJ = this.buildObjBase;
  SHOW_BUILD_OBJS = this.base + 'objects';
  ADD_BUILD_OBJ = this.buildObjBase + 'add';

  // solutions

  private solutionsBase = this.base + 'solutions';
  SHOW_SOLUTIONS = this.solutionsBase;
  ADD_SOLUTION = this.solutionsBase + '/add';

  // ADMIN

  // Images

  private imagesBase = this.base + 'images';
  SHOW_IMAGES = this.imagesBase;
  SHOW_IMAGE = this.base + 'image/';
  UPLOAD_IMAGE = this.imagesBase + '/upload_image';

  // SALE
  private saleBase = this.base + 'sales/';
  // Products
  SHOW_SALES_PRODUCTS = this.saleBase + 'products';
  SHOW_SALES_PRODUCTS_FOR_ADMIN = this.saleBase + 'products/admin';
  ADD_SALES_PRODUCT = this.saleBase + 'products/add';
  SHOW_SALES_PRODUCT = this.saleBase + 'product/';
  SHOW_SALES_PRODUCT_BY_BRAND = this.saleBase + 'products/';
  SAVE_ORDER = this.saleBase + 'save';
  SEND_ORDER_BY_EMAIL = this.saleBase + 'sendorder';
  SHOW_ORDERS = this.saleBase + 'orders/';
  SHOW_DISCOUNT = this.saleBase + 'clientdisc';
  UPDATE_DISCOUNT = this.saleBase + 'updatediscount';
  SHOW_SALE_CLIENTS = this.saleBase + 'clients';
}
